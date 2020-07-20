/* eslint-disable */
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////  WEB APP CODE FOR GET ESPRIT OCCITANIE EVENT CALENDAR  /////////
///////               IN GOOGLE APPSCRIPT                       /////////
/////////////////////////////////////////////////////////////////////////

/**

Lien partageable du calendar: 

https://calendar.google.com/calendar?cid=NGRvZnNuOGc5cjUzb2xxYnVkcnEwcTAxMjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ

lien WebApp:

https://script.google.com/macros/s/AKfycbya2CcsOpKGTpl3rC6c4bGk-JfKNnKgcbB6fMxwi53NH-_wdms/exec

 */

const CALENDAR_ID = '4dofsn8g9r53olqbudrq0q0128@group.calendar.google.com';
const FOLDER_PICTURES = '1naE65R1ljn6aXexz9U06GMlXoYO5QSL2';
const PICTURE_DEFAULT_URL =
  'https://drive.google.com/file/d/1M6oImBSa56S49hQsfGbObV2M8pP3bS86/view';

/**
 * this function return data from Google calendar
 * @return(object) return JSON Object with data.
 */
const doGet = () => {
  const events = JSON.stringify(getAllEvents_());
  return ContentService.createTextOutput(events).setMimeType(ContentService.MimeType.JSON);
};

/**
 * Lists the next events for the next 7 days in the program calendar.
 * @return(object) Custom Object who contains 100 next events from Google Calendar.
 */
const getAllEvents_ = () => {
  const now = new Date();
  now.setHours(0, 0, 0);
  const next7Days = new Date();
  next7Days.setHours(23, 59, 59);
  next7Days.setDate(now.getDate() + 7);
  const data = [];
  const events = Calendar.Events.list(CALENDAR_ID, {
    timeMin: now.toISOString(),
    timeMax: next7Days.toISOString(),
    singleEvents: true,
    orderBy: 'startTime'
  });
  if (events.items && events.items.length > 0) {
    for (let i = 0; i < events.items.length; i++) {
      const d = {};
      const event = events.items[i];
      d.program_title = event.summary;
      d.program_start = event.start.dateTime;
      d.program_end = event.end.dateTime;
      d.program_animator = event.description
        ? event.description.indexOf(',') !== -1
          ? event.description.split(',').map(item => item.trim())
          : [event.description]
        : [];
      d.program_image = event.attachments
        ? event.attachments[0].fileUrl.split('?')[0]
        : PICTURE_DEFAULT_URL;
      data.push(d);
    }
  } else {
    console.error('No events found.');
  }
  console.log(data);
  return data;
};

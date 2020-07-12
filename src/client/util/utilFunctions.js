/// ////////////////////////////////////////////////////////////////////////////////////////////
// Function to transform String to a Valid URL
// exemple "My tiTle é   ho  " -->  "my-title-e-ho"
/// ////////////////////////////////////////////////////////////////////////////////////////////
export function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}
/// ////////////////////////////////////////////////////////////////////////////////////////////
// Play / pause / mute
/// ////////////////////////////////////////////////////////////////////////////////////////////

// Play / pause sound
export function play(setPlayerDuration, playerRef, setOnPlay) {
  setPlayerDuration(Math.trunc(playerRef.current.duration));
  if (playerRef.current.paused) {
    setOnPlay(true);
    return playerRef.current.play();
  }
  setOnPlay(false);
  return playerRef.current.pause();
}

// Mute sound
export function mute(isMute, setIsMute, playerRef) {
  if (isMute) {
    setIsMute(false);
    return (playerRef.current.muted = true);
  }
  setIsMute(true);
  return (playerRef.current.muted = false);
}

/// ////////////////////////////////////////////////////////////////////////////////////////////
// Function to control player & use pause/play
/// ////////////////////////////////////////////////////////////////////////////////////////////
export function handleAudio(
  urlPodcastAudio,
  currentIdPodcast,
  idPodastPlay,
  onPlay,
  programName,
  podcast_title,
  playerRef,
  setIdPodastPlay,
  setDataPlayer,
  setOnPlay
) {
  if (!onPlay || (onPlay && idPodastPlay !== currentIdPodcast)) {
    if (idPodastPlay !== currentIdPodcast) {
      playerRef.current.src = urlPodcastAudio;
      setIdPodastPlay(currentIdPodcast);
    }
    playerRef.current.play();
    setDataPlayer({ programName, podcast_title });
    return setOnPlay(true);
  }
  playerRef.current.pause();
  return setOnPlay(false);
}

/// ////////////////////////////////////////////////////////////////////////////////////////////
// Function to format date & time
/// ////////////////////////////////////////////////////////////////////////////////////////////

// Format for duration (ss to mm:ss)
export function formatDuration(duration) {
  let moment = require('moment');
  require('moment-duration-format');
  return moment.duration(duration.toString(), 'seconds').format('mm:ss', { trim: false });
}

export default { slugify, handleAudio, play, mute, formatDuration };

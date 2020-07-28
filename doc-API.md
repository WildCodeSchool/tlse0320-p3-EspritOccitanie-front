# Documentation API

## Racine

Le point d’entrée racine de l’API est http://151.80.119.192/

Dans la suite de cette documentation, il y sera fait référence par \$API.

## Formats de données

# Content-type

Les différents points d’entrée de l’API attendent du JSON (application/json) en entrée et renvoient du JSON en sortie.

# Gestion d’erreurs

La gestion d’erreur de l’API utilise les codes d’erreur HTTP standards :

    400: requête invalide
    401: authentification requise
    500: erreur indéfinie côté serveur
    502: le serveur ne répond pas

Lorsque c’est possible, l’API répondra en JSON avec le format suivant :

> {
> "message": "un message d’erreur"
> }

## Podcasts

# GET /podcast (récupérer tous les podcasts)

    On attend une réponse : 200
    Content-Type: application/json; charset=utf-8

    [
        {
            "podcast_id": 1, (integer)
            "podcast_title": "titre du podcast", (string)
            "podcast_duration": "durée", (string)
            "podcast_description": "description", (string)
            "podcast_image": "image.jpg/jpeg", (string)
            "podcast_mp3": "url.mp3", (string)
            "podcast_creation_date": "2020-07-21T22:00:00.000Z", (datetime)
            "ro_program_program_id": 1, (integer)
            "ro_category_category_id": 4, (integer)
            "program_title": "title", (string)
            "category_name": "name" (string)
        },
        { ... }
    ]

# GET /podcast/:id (récupérer un podcast avec son id)

>

    On attend une réponse : 200
    Content-Type: application/json; charset=utf-8

    [
        {
            "podcast_id": 1, (integer)
            "podcast_title": "titre du podcast", (string)
            "podcast_duration": "durée", (string)
            "podcast_description": "description", (string)
            "podcast_image": "image.jpg/jpeg", (string)
            "podcast_mp3": "url.mp3", (string)
            "podcast_creation_date": "2020-07-21T22:00:00.000Z", (datetime)
            "ro_program_program_id": 1, (integer)
            "ro_category_category_id": 4, (integer)
            "program_title": "title", (string)
            "category_name": "name" (string)
        }
    ]

>

# POST /podcast (création d'un podcast)

>

    Accept: application/json
    Content-Type: application/json

    {
      "podcast_title": "", (string)
      "podcast_duration": "", (string)
      "podcast_description": "", (string)
      "podcast_image": "", (string)
      "podcast_mp3": "", (string)
      "podcast_creation_date": "2013-07-08 09:00:00", (datetime)
      "ro_program_program_id": 4, (interger)
      "ro_category_category_id": 1, (integer)
      "ro_animator_animator_id": [1, 2] (integer)
    }

>

    Nous attendons une réponse :

>

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8

    {
    "fieldCount": 0,
    "affectedRows": 2,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "&Records: 2  Duplicates: 0  Warnings: 0",
    "protocol41": true,
    "changedRows": 0
    }

>

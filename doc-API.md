# Documentation API

## Racine

Le point d’entrée racine de l’API est http://151.80.119.192/

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

### GET /podcast (récupérer tous les podcasts)

    Réponse :

    HTTP/1.1 200 OK
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

### GET /podcast/:id (récupérer un podcast avec son id)

>

    Réponse :

    HTTP/1.1 200 OK
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

### POST /podcast (création d'un podcast)

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

    Réponse :

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

### PUT /podcast/:id (modification des données d'un podcast)

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

    Nous attendons une réponse comme suit:

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

### DELETE /podcast/:id (suppréssion d'un podcast)

>

    Réponse :

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8

    {
        "message": "field deleted"
    }

>

### GET /podcast?program=:id (récupérer les podcast en fonction de l'id d'une émission)

>

    Réponse :

    HTTP/1.1 200 OK
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
        {...}
    ]

>

### GET /podcast?animator=:id (récupérer les podcast en fonction de l'id d'un animateur)

>

    Réponse :

    HTTP/1.1 200 OK
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
        {...}
    ]

>

### GET /podcast?categorie=:id (récupérer les podcast en fonction de l'id d'une catégorie)

>

    Réponse :

    HTTP/1.1 200 OK
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
        {...}
    ]

>

## Émissions (program)

### GET /program (récupérer toutes les émissions)

>

    Réponse :

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8

    [
        {
            "program_id": 1, (interger)
            "program_title": "title", (string)
            "program_description": "desc", (string)
            "program_image": "image", (string)
            "ro_category_category_id": 4, (integer)
            "category_name": "name" (string)
        },
        {...}
    ]

>

### GET /program/:id (récupérer une émission avec son id)

>

    Réponse :

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8

    {
        "program_id": 1, (integer)
        "program_title": "title", (string)
        "program_description": "desc", (string)
        "program_image": "url image", (string)
        "ro_category_category_id": 1 (integer)
    }

>

### POST /program (création d'une nouvelle émission)

>

    Ce qui est attendu :

    Accept: application/json
    Content-Type: application/json

    {
      "program_title": "title", (string)
      "program_description": "desc", (string)
      "program_image": "url image", (string)
      "ro_category_category_id": 1, (integer)
      "ro_animator_animator_id": [1, 2] (integer)
    }

>

    Réponse :

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

### PUT /program/:id (modifier les données d'une émissions)

>

    Ce qui est attendu :

    Accept: application/json
    Content-Type: application/json

    {
      "program_title": "title update", (string)
      "program_description": "desc update", (string)
      "program_image": "", (string)
      "ro_category_category_id": 1, (integer)
      "ro_animator_animator_id": [1, 2] (integer)
    }

>

     Réponse :

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

### DELETE /program/:id (supprimer une émission)

>

    Réponse :

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8

    {
        "message": "field deleted"
    }

>

### GET /program?animator=:id (récupérer les données d'une ou plusieurs émissions en fonction d'un animateur)

>

    Réponse :

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8

    [
        {
            "program_id": 4, (integer)
            "program_title": "title", (string)
            "program_description": "desc", (string)
            "program_image": "url image", (string)
            "ro_category_category_id": 9, (integer)
            "category_name": "name" (string)
        },
        {...}
    ]

>

### GET /program?categorie=4 (récupérer les données d'une ou plusieurs émissions en fonction d'une catégorie)

>

    Réponse :

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8

    [
        {
            "program_id": 4, (integer)
            "program_title": "title", (string)
            "program_description": "desc", (string)
            "program_image": "url image", (string)
            "ro_category_category_id": 9, (integer)
            "category_name": "name" (string)
        },
        {...}
    ]

>

## Animateurs (animator)

### GET /animator (récupérer la liste de tous les animateurs)

>

    Réponse :

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-82020 09:58:26 GMT

    [
        {
            "animator_id": 1, (integer)
            "animator_firstname": "prénom", (string)
            "animator_lastname": "nom, (string)
            "animator_description": "description", (string)
            "animator_image": "url image" (string)
        },
        {...}
    ]

>

### GET /animator/:id (récupérer les données d'un animateur)

>

    Réponse :

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8

    {
        "animator_id": 1, (integer)
        "animator_firstname": "Prénom", (string)
        "animator_lastname": "Nom", (string)
        "animator_description": "description", (string)
        "animator_image": "url image" (string)
    }

>

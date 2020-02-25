# Top 25 NBA players restAPI

This is a simple rest api that allows you to retrieve the top 25 NBA players. Full CRUD functionality is available.

## Install
Clone the repo and install the dependencies
 
`git clone https://github.com/tyelf22/restAPI-NodeJS.git`
`cd restAPI-NodeJS.git`

`npm install`

`npm start`


# API Documentation

### Heroku link
    https://te-restapi.herokuapp.com/

## Welcome Page

### Request

`GET /`

return the welcome page

### Response

    welcome to my rest api


## All players

### Request

`GET /players`

returns top 25 current NBA players
    

### Response

    array of objects containing all players
    {
        "firstname": "lebron",
        "lastname": "james",
        "team": "lakers"
    }

## Create new player

### Request

`POST /player`

creates new player object
    

### Response

    new created player objects
    {
        "firstname": "lebron",
        "lastname": "james",
        "team": "lakers"
    }

## Player by team

### Request

`GET /players/team/{team}`

gets all of the players by team name
    

### Response

    all player objects with specified team name
    {
        "firstname": "lebron",
        "lastname": "james",
        "team": "lakers"
    }

## Player by id

### Request

`GET /player/{id}`

gets player by player id
    

### Response

    player object by id
    {
        "firstname": "lebron",
        "lastname": "james",
        "team": "lakers"
    }

## Edit player by id

### Request

`PUT /player/{id}`

edit player name or team by id
    

### Response

    edited player object
    {
        "firstname": "lebron",
        "lastname": "james",
        "team": "lakers"
    }

## Delete player by id

### Request

`DELETE /player/{id}`

delete player by id
    

### Response

    deleted player object
    {
        "firstname": "lebron",
        "lastname": "james",
        "team": "lakers"
    }
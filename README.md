# Welcome to flights service

## Project Setup

-clone the project
-Execute npm i in the root directory
-Create a .env file and add the following enviroment variables -`Port=3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following peice of json

```
  "development": {
    "username": "<YOUR DB_LOGIN NAME>",
    "password": "<DB PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```
``````
-Once you have added your db config as listed above , go to the src folder and execute the command `npx sequelize db:create`   
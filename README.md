# F/TforME Project
F/TforME is a First, Then picture scheduler. It is used primarily for children with autism or special needs. The goal is to simplify daily task into 2 images at a time. First (first image on the UI), Then (second image on the UI). This makes daily routines much more managable for children, while providing the partent/guardian with helpful notes and history, to analyse trends. 

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

To quickly view the fully functioning application, navigate to https://glacial-dawn-27008.herokuapp.com/#/home 

If you desire to run the code on a seperate client and server, follow the steps laid out below.

## Download This Repository

* You are encouraged to Download a zip file of this repository. Click the `Clone or Download` button and select `Download Zip`.
* Unzip the project and start with the code in that folder.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and tables

Create a new database called `solo_project` and create the tables found in the database.sql file (included in the folder):

```SQL EXAMPLE: 
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `solo_project` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Navigation
All navigations of this app can be found in the `About Page` on the User Interface.
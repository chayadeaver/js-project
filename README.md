# Chaya's Cafe
A web application using JavaScript to render frontend and Rails API to manage backend.

![js-project-demo](menu-client/assets/images/js-project-demo.gif)

[Demo](https://www.loom.com/share/3bdc454461b3424d8874676366aaf5c6) | [Deployed App](https://chayadeaver.github.io/js-project/menu-client/)

## Features

* Shows ability to make fetch requests to API via AJAX 
* Uses vanilla JavaScript to render HTML and CSS elements to the DOM
* Allows user to view items filtered by menu type
* Allows user to add new items

## Tech Used
* Ruby [2.6.1]
* Rails [6.0.2] - generated as an API only
* Postgresql - database
* Rack-cors - allow for cross-orgin resource sharing
* Fast_json_api - serializer to manage seeded data in json format

## To Install 

### Backend
* Clone this repo to local machin `git clone <this-repo>`
* `cd` into project directory and into `project-backend` and run `bundle install` to install dependencies
* Make sure Postgres app is running. To install Postgres app, go [here](https://www.postgresql.org/download/)
* Run `rails db:create` to create a database
* Run `rails db:migrate` to create tables 
* Run `rails db:seed` to generate seed data
* Run `rails s` to run server

### Frontend
* Open another tab in terminal and `cd` into `project-frontend` directory.
* Inside `project-frontend` directory, type `open index.html` to open `index.html` in the browser to begin navigating through this application.


# React Todo List

This project was made with React

## Run the project

- Clone the todos api here (https://github.com/MarceloFonseca/tasks-api/)

  - Run "set PORT=3008"
  - You can also run "set NEW_TASK_PERIOD= "\*/value you want to provide for a new task to be added in milliseconds\*/"
  - run npm start in the tasks-api directory after that

- Run "npm start" inside the react-todo-list directory

## Challenge

- Should be built using (preferably) React or another similar framework
- Should be a single page application
- Should contain 2 menus
  - Home: landing page
  - Tasks: will open the tasks page
- The Home page should be empty or containing any text you want.
- The Tasks page should contain a list of tasks obtained from a REST service (mocked, see below) and the list should be updated every-time the Tasks page is open.
- In terms of styling only the layout is a must - you can focus on functionality
- You could use external libraries to complete the challenge, like:
  - Bootstrap: https://getbootstrap.com/
  - React Material UI: https://material-ui.com/
  - Others you like
- Please use a GitHub (or similar) repository and make regular commits (preferably commit every
  time you think you closed a task)
- Unit tests are considered a plus but not mandatory

## Approach

- Create an architecture that can scale:
  - components folder should hold components that are as dummy as possible
  - it is divided into common and Layout as Layout holds components that are going to be present in ideally all pages
  - views are a collection of components to create each page of the application
  - the api's folder holds the configuration for the api used and also the functions that can be used to request the api

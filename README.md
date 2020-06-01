## College API: A Simple API using NodeJS + Express

### Data model
~~~
courses (
    id, course_name, duration
)

students (
    id, name, registration, course_id
)
~~~

### Run this project
- Installing the dependencies

`npm install`

> Make sure you're running MySQL Server


- Creating database

    - Create a database
    - Change the settings at **knexfile.js**

- Running the migrations on MySQL database

`npx knex migrate:latest`

- Running serve

`npm start`

> Server access address: http://localhost:3333

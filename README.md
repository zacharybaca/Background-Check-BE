# labs12-background-check

To run the fakedata use console command yarn json-server --watch fakedata.js it will run on http://localhost:3000/users

server: http://localhost:5000

For Users endpoints:

get: /users
get by id: /users/:id
post: /users
put: /users/:id
delete: /users/:id

| Method | Endpoint      |        Description                                                                                                                                                     |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register  |                                                                                                                                                  |
| POST   | /login     | |
| GET    | /users     | Returns an array of all the users that are in the database.            |
| POST   | /candidates|                                                                                                                                                 |
| POST   | /orders    |   |
| GET    | /candidates| respond with an array of all the candidates that are in the database.            |
| GET    | /orders    | respond with an array of all the orders that are in the database.            |

require('dotenv').config(); // add this line as the first thing to run1
const express = require('express');
var cookieParser = require('cookie-parser')
const server = express();
const usersRouter = require("./users/users-router");
const itemsRouter = require('./items/items-router');
const authRouter = require('./auth/auth-router');
const PORT = process.env.PORT || 5000;


server.use(cookieParser())

server.use(express.json());

server.use('/api/', authRouter);
server.use('/api/', authRouter);
server.use('/api/', usersRouter);
server.use('/api/', itemsRouter);

server.get('/', (req, res) => {
    res.send(`
    Welcome sauti-africa's API !
    Here are the base url and their endpoints:
    https://sauti-africa.herokuapp.com/: to land in the app
    https://sauti-africa.herokuapp.com/api/items: to retrieve items
    https://sauti-africa.herokuapp.com/api/register: to register
    https://sauti-africa.herokuapp.com/api/login: to login
    https://sauti-africa.herokuapp.com/api/users: to retrieve users
    `);
})
server.use((req, res) => {
    res.status(404).json(`The end point: ${req.url} does not exist in our api`);
})
 
// if (!module.parent) {
    server.listen(PORT, () => {
        console.log(`Listening on at: http://localhost:${PORT}/`);
    });
// }

// I have to push this today

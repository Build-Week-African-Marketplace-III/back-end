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
 
if (!module.parent) {
    server.listen(PORT, () => {
        console.log(`Listening on at: http://localhost:${PORT}/`);
    });
}

// I have to push this today

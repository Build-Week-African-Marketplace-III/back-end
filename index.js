require('dotenv').config(); // add this line as the first thing to run1
// const path = require('./public/index.html')
const express = require('express');
var cookieParser = require('cookie-parser')
const server = express();
const usersRouter = require("./users/users-router");
const itemsRouter = require('./items/items-router');
const authRouter = require('./auth/auth-router');
const PORT = process.env.PORT || 5000;


server.use(cookieParser())
server.use(express.static(__dirname+"/public"));
server.use(express.json());

server.use('/api/', authRouter);
server.use('/api/', authRouter);
server.use('/api/', usersRouter);
server.use('/api/', itemsRouter);

server.get('/', (req, res) => {
    // res.send(`Welcome to Sauti-africa `);
    // res.sendFile(path.join('./public/index.html'));
    res.sendFile(__dirname,+'./public/index.html');
})
server.use((req, res) => {
    res.status(404).json(`The end point: ${req.url} does not exist in our api`);
})
 
// if (!module.parent) {
    server.listen(PORT, () => {
        console.log(`Listening on at: http://localhost:${PORT}/`);
    });
// }

 

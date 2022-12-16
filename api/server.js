const express = require("express");
const locationRouter = require('./locations/locations-router')

const server = express();

server.use(express.json());
server.use('/locations' , locationRouter)

server.use('*', (req, res) =>{
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server;

const express = require('express');
const helmet = require('helmet');

const cookbookRouter = require('./cookbook/cookbook-router')
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', cookbookRouter);


module.exports = server;
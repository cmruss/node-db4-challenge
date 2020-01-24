const express = require('express');
const helmet = require('helmet');

const cookbookRouter = require('./cookbook/cookbook-router');
const ingredientRouter = require('./cookbook/ingredient-router');
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', cookbookRouter);
server.use('/api/ingredients', ingredientRouter);


module.exports = server;
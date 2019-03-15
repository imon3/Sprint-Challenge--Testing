const express = require('express');

const server = express()

server.use(express.json())

let games = [
    { id: 1, title: 'dragon ball fighter', genre: 'fighting' }
]

module.exports = server;
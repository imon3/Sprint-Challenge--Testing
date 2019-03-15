const express = require('express');

const server = express()

server.use(express.json())

let games = [
    { id: 1, title: 'dragon ball fighter', genre: 'fighting' }
]

// GET REQUEST
server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Running'
    })
})

server.get('/games', (req, res) => {
    return res.status(200).json(games)
})

module.exports = server;
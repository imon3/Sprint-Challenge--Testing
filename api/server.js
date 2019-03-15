const express = require('express');

const server = express()

server.use(express.json())

let games = [
    { id: 1, title: 'dragon ball fighter', genre: 'fighting' }
]

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Running'
    })
})

module.exports = server;
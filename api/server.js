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

// POST REQUEST
server.post('/games', (req, res) => {
    let game = { id: 2, title: 'street fighter 5', genre: 'fighting' };

    if (game.title === '' || game.genre === '') {
        return res.status(422).json({ message: 'data missing' })
    } else {
        games.push(game)
        return res.status(201).json(game)
    }
})

module.exports = server;
const request = require('supertest');

const server = require('./server');

describe('server', () => {
    // TEST GET REQUEST
    describe('Get /', () => {
        it('should return 200 ok', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
                .catch()
        });

        it('should return {message: "Server Running"}', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({ message: 'Server Running' })
                })
                .catch()
        });

        it('should return 200 ok', () => {
            return request(server)
                .get('/games')
                .then(res => {
                    expect(res.status).toBe(200)
                })
                .catch()
        });

        // TEST POST REQUEST
        describe('Post /', () => {
            it('should return 201 created', () => {
                return request(server)
                    .post('/games')
                    .then(res => {
                        expect(res.status).toBe(201)
                    })
                    .catch()
            });

            it(`should return { id: 2, title: 'street fighter 5', genre: 'fighting' }`, () => {
                return request(server)
                    .post('/games')
                    .then(res => {
                        expect(res.body).toEqual({ id: 2, title: 'street fighter 5', genre: 'fighting' })
                    })
                    .catch()
            });

            it('should return 422', () => {
                server.post('/games', (req, res) => {
                    let game = { id: 2, title: 'street fighter 5', genre: '' };

                    if (game.title === '' || game.genre === '') {
                        return res.status(422).json({ message: 'data missing' })
                    }

                    expect(res.status).toBe(422)
                })
            })
        });
    });

});

const request = require('supertest');

const server = require('./server');

describe('server Get /', () => {
    it('should return 200 ok', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
            .catch()
    });
});
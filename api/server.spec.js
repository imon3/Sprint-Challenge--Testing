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

    it('should return {message: "Server Running"}', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({ message: 'Server Running' })
            })
            .catch()
    })

    it('should return 200 ok', () => {
        return request(server)
            .get('/games')
            .then(res => {
                expect(res.status).toBe(200)
            })
            .catch()
    })
});
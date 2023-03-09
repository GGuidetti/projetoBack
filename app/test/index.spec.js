const request = require("supertest");
const app = require('../app');

describe('Sample Test', () => {
    it('should test that true == true', async () => {

        const res = await request(app)
        .post('/cadastrarPessoa')
        .send({
            name: 'jorge',
            email: 'email@jorge'
        });

        expect(res.body).toHaveProperty('message');
    })
})
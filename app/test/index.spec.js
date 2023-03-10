const request = require("supertest");
const app = require('../app');

describe('Testando post', () => {
    it('a response da request deve conter o atributo mensagem', async () => {

        const res = await request(app)
        .post('/cadastrarPessoa')
        .send({
            name: 'jorge',
            email: 'email@jorge'
        });

        expect(res.body).toHaveProperty('message');
    })
})

describe('Testando get', () => {
    it('a response da request deve conter o atributo mensagem', async () => {

        const res = await request(app).get('/procurarPessoa');
        expect(res.body).toHaveProperty('message');

    })
})
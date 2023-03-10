const express = require('express');
const router = express();
const PessoaCntrl = require('./controllers/Pessoa')
const pessoa = require('./models/Pessoa')

router.use(express.json());

router.get("/", async (req,res) => {
    res.send("Homepage")
})

router.get("/procurarPessoa", async (req, res) => {
    res.send(pessoa.findAll({}));
})


router.post("/cadastrarPessoa", async (req, res) => {
    console.log(req.body);

    await pessoa.create(req.body).then(() => {
        return res.json({
            erro: false,
            mensagem: "inseriu em galerinha"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: false,
            mensagem: "fudeu de vez"
        });
    });

    return res;
});

router.listen(8080, () =>{
    console.log('ouvindo porta 8080')
})

// module.exports = {criarPessoa};
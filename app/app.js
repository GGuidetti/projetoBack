const express = require('express');
const router = express();
const PessoaCntrl = require('./controllers/Pessoa')

router.use(express.json());

router.get("/", async (req,res) => {
    res.send("Homepage")
})


router.listen(8080, () =>{
    console.log('ouvindo porta 8080')
})

module.exports = {criarPessoa};
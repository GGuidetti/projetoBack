const Pessoa = require("../models/Pessoa");
const express = require('express');
const router = express();

// CREATE
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

    // READ const pessoa = await Pessoa.findAll({}); 
    // console.log(pessoa[0].nome);
    // READ 1 const pessoaone = await Pessoa.findOne({where:{nome:'teil'}});
    // console.log(pessoaone);
    // UPDATE await Pessoa.update({nome:"jorge"},{where:{nome:"teila"}});
    // const pessoaupd = await Pessoa.findAll({});
    // console.log(pessoaupd[0].nome);
    // DELETE await Pessoa.destroy({where:{nome:'teil'}});

// module.exports = {criarPessoa};
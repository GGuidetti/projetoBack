const express = require('express')
const router = express.Router()

const pessoa = require("../controllers/pessoa.js");

// Cadastrar um cliente
router.post("/cadastrarPessoa", pessoa.criarPessoa());

// Obter todos os clientes
router.get("/procurarPessoa", pessoa.findAll);

// Obter um cliente especifico
router.get("/procurarPessoa:id", pessoa.findOne);

// Update
// router.put("/:id", pessoa.update);

// // Delete
// router.delete("/:id", pessoa.delete);

module.exports = router;
const Pessoa = require("../models/Pessoa");

// CREATE
function criarPessoa(){
    app.post("/cadastrar", async (req,res) => {
        console.log(req.body);

        await Pessoa.create(req.body).then(() => 
        {
            return res.json({
                erro: false,
                mensagem:"inseriu em galerinha"
            })
        }).catch(() => 
        {
            return res.status(400).json({
                erro: false,
                mensagem:"fudeu de vez"
            });
        });

        res.send("Rota de cadastro");
        return res;
    });
}

    // READ const pessoa = await Pessoa.findAll({}); 
    // console.log(pessoa[0].nome);
    // READ 1 const pessoaone = await Pessoa.findOne({where:{nome:'teil'}});
    // console.log(pessoaone);
    // UPDATE await Pessoa.update({nome:"jorge"},{where:{nome:"teila"}});
    // const pessoaupd = await Pessoa.findAll({});
    // console.log(pessoaupd[0].nome);
    // DELETE await Pessoa.destroy({where:{nome:'teil'}});

module.exports = {criarPessoa};
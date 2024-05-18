const {Produto} = require ('../models/produto.models.js')

class ProdutoController{
    static async index(req,res){
        const produto = await Produto.findMany()
        res.json(produto)
    }
}

module.exports = ProdutoController

import Produto from '../models/produto.models.js'

export default class ProdutoController{
    static async index(req,res){
        const produto = await Produto.findMany()
        res.json(produto)
    }
}


const {Router} = require('express')
const {ProdutoController} = require('../controller/produto.controller.js')

const router = Router()

router.get('/', ProdutoController.index)

module.exports = router


import {Router} from 'express'
import {ProdutoController} from '../controller/produto.controller.js'

const router = Router()

router.get('/', ProdutoController.index)

export default router


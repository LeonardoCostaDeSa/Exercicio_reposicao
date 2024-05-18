import {Router} from 'express'
import produtoRouter from './produto.routes.js'

const router = Router()

router.use('/produtos', produtoRouter)

export default router
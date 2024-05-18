import express from 'express' 
const app = express()
const PORT = 3001
import routes from './routes/produto.routes.js'

app.use('/api', routes)

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
    })
    
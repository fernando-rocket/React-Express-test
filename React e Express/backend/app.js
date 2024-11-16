const express = require('express')
const cors = require('cors')
const Database = require('./database.js')
const app = express()
const PORT = 3001

const db = new Database()

db.create(1, {
    "email": "okok@gamil.com",
    "senha": "123456"
})

db.create(2, {
    "email": "teste@gamil.com",
    "senha": "098765"
})

app.use(express.json())
app.use(cors())
app.get('/', (req, res)=>{
    console.log(db.read())
    res.send(db.read())
})
app.post('/', (req, res)=>{
    const video = req.body
    db.create(3, video)
    res.send(req.body)
})
// app.get('/api', (req, res)=>{
//     console.log(db.read())
// })

// app.post('/api', (req, res)=>{
//     const video = req.body
//     db.create(3, video)
//     res.send(req.body)
// })

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}/api`)
})
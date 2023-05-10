const express = require('express')
const express = require('express')
const app = express()
const exphds = require('express-handlebars')
const Connection = require('mysql2/typings/mysql/lib/Connection')
constconn = require('./db/conn')
const Usuario = require('./models/Usuario')

const PORT = 3000
const hostname = 'localhost'

//------------------------------------------------- Config express -------------
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

//------------------------------------------------- Config express -------------

//------------------------------------------------- Config express handlebars --
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
//------------------------------------------------- Config express handlebars --

//------------------------------------------------------------------------------
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando ${hostname}:${PORT}`)
    })
})  .catch((error)=>{
    console.error('Erro de conexão com o BD'+error)
})



const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('bd_dados', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log('Conexão realizada coms sucesso ...')
// }).catch((error)=>{
//     console.error('Não foi possível realizar a conexão com o bd')
// })

module.exports = sequelize
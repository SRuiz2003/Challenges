// const express = require('express')
// require('dotenv').config()
// const {dbConnection} = require('./database/config')
// const app = express();
// var bodyParser = require('body-parser')
// dbConnection();
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(express.static('public'))

// app.use('/api/auth',require('./Routes/auth'))

// app.listen(process.env.PORT, ()=> {
//     console.log('Servidor corriendo en puerto: ', process.env.PORT)
// })

const Server = require('./Server/server')
const myServer = new Server();
myServer.listen();
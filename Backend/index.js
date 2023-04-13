const express = require('express')
require('dotenv').config()
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.use('/api/auth',require('./Routes/auth'))

app.listen(process.env.PORT, ()=> {
    console.log('Servidor corriendo en puerto: ', process.env.PORT)
})


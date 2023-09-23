const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})

app.listen(port, () =>{
    console.log('Servidor ok')
})

module.exports = app



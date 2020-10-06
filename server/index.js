require('dotenv').config({ path: __dirname + "/../.env" })
const {SERVER_PORT} = process.env
const express = require('express')
const pacMan = require('./controllers/pacMan')

const app = express()
app.use(express.json())

app.get('/api/pac-man/board', pacMan.board)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} listening`))
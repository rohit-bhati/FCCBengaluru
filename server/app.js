const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/FCCBengaluru', () => {
  console.log('> Connection successful...')
})

const app = express()

app.use(express.static(path.resolve(__dirname, 'build')))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.use('/api', routes)

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

module.exports = app

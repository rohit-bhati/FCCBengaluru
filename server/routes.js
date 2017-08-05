const express = require('express')
const routes = express()

// controller imports
const memberController = require('./controllers/memberController')
const notificationController = require('./controllers/notificationController')

// member routes
routes.post('/signup', memberController.addMember)
routes.get('/members', memberController.getMembers)

// notificaion routes
routes.get('/notifications', notificationController.getAll)
routes.post('/notifications', notificationController.addNotif)

module.exports = routes

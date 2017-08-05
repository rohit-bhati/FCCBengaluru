const mongoose = require('mongoose')
const { Schema } = mongoose

const notificationSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  isNewNotif: {
    type: Boolean,
    default: false
  }
})

const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification

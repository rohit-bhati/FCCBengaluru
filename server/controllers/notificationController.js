const db = require('./../models')

const notificationController = {}

notificationController.getAll = (req, res) => {
  db.Notification.find({}).then(notifications => {
    res.jsonp(notifications)
  })
}

notificationController.addNotif = (req, res) => {
  const { text, isNewNotif } = req.body
  const notif = new db.Notification({
    text,
    isNewNotif
  })
  notif
    .save()
    .then(newNotif => {
      res.status(200).json({
        success: true,
        data: newNotif
      })
    })
    .catch(err => {
      res.status(500).json({
        messsage: err
      })
    })
}

module.exports = notificationController

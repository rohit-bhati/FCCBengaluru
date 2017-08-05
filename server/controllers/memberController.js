const db = require('./../models')

const memberController = {}

memberController.addMember = (req, res) => {
  const { name, age, email, strongFields } = req.body

  const member = new db.Member({
    name,
    age,
    email,
    strongFields
  })

  member
    .save()
    .then(newMember => {
      res.status(200).json({
        success: true,
        data: newMember
      })
    })
    .catch(err => {
      res.status(500).json({
        messsage: err
      })
    })
}

memberController.getMembers = (req, res) => {
  db.Member.find({}).then(members => {
    res.json(members)
  })
}

module.exports = memberController

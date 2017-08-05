const mongoose = require('mongoose')

const { Schema } = mongoose

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: [50, 'name should be less than 50 characters']
  },
  email: {
    type: String,
    required: true,
    maxlength: [50, 'email cannot be more than 50 characters']
  },
  strongFields: {
    type: [String],
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member

const {model, Schema } = require('mongoose')

const userSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  dateOfBirth: String,
  createdAt: String
})

module.exports = model('User', userSchema)


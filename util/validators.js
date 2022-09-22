module.exports.validateRegisterInput = (
  username,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  dateOfBirth
) => {
  const errors = {}
  if (username.trim() === ''){
    errors.username = 'Username must not be empty'
  }
  if (firstName.trim() === ''){
    errors.firstName = 'Frist name must not be empty'
  }
  if (lastName.trim() === ''){
    errors.lastName = 'Last name must not be empty'
  }
  if (email.trim() === ''){
    errors.email = 'Email must not be empty'
  } else {
      const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if(!email.match(regEx)){
      errors.email = 'Email must be a valid email address'
    }
  }
  if (password === ''){
    errors.password = 'Password must not be empty'
  } else if (password !== confirmPassword) {
    errors.password = 'Passwords must match'
  }
  if (dateOfBirth.trim() === ''){
    errors.dateOfBirth = 'Date of birth must not be empty'
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
}

module.exports.validateLoginInput = (username, password) => {
  const errors = {}
  if (username.trim() === '') {
    errors.username = 'Username must not be empty'
  }
  if (password.trim() === '') {
      errors.password = 'Password must not be empty'
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
}

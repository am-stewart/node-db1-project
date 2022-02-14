const yup = require('yup')

const payloadSchema = yup.object ({
  name: yup.string().trim().required('name of account must be between 3 and 100').min(3).max(100),
  budget: yup.number().required('budget of account must be a number')
})

exports.checkAccountPayload = async (req, res, next) => {
  
  }
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}

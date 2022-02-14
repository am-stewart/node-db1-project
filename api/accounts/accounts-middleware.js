const yup = require('yup')
const Accounts = require('./accounts-model');

const payloadSchema = yup.object ({
  name: yup.string().trim().required('name of account must be between 3 and 100').min(3).max(100),
  budget: yup.number().required('budget of account must be a number')
})

exports.checkAccountPayload = async (req, res, next) => {
  }
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id)
    if (!account) {
      next({
        status: 404,
        message: 'account not found'
      })
    } else {
      req.account = account
      next();
    }
  } catch (err) {
    next(err)
  }
}

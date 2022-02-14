const router = require('express').Router();
const Accounts = require('./accounts-model');
const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require('./accounts-middleware');

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll()
    res.json(accounts)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id)
    res.json(account)
  } catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {

  } catch(err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {

  } catch(err) {
    next(err)
  }
});

router.delete('/:id', async (req, res, next) => {
  try {

  } catch(err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;

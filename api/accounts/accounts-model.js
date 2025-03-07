const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
}

const getById = (id) => {
  return db('accounts').where('id', id).first();
}

async function create (account) {
  let [id] = await db('accounts').insert(account);
  return getById(id)
}

async function updateById (id, account) {
  await db('accounts').where('id', id).first().update(account);
  return getById(id)
}

async function deleteById (id) {
  let result = await getById(id);
  await db('accounts').where('id', id).first().del();
  return result;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

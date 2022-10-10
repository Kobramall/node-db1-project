const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).first()
}

const create =  async (account) => {
  // DO YOUR MAGI
  return db('accounts').insert(account)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  return db('accounts').update(account).where('id', id)
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db(accounts).del().where('id', id)
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

const db = require('../../data/db-config')

const getAll = () => {

  return db('accounts');
}

const getById = id => {

  return db('accounts').where('id', id).first()
}

const create =  async location => {
 
  const [ id ] = await db('accounts').insert(location)
  return getById(id)
}



const deleteById = id => {

  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
}

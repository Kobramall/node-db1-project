const router = require('express').Router()
const Account = require('./accounts-model')
const md = require('./accounts-middleware')

router.get('/',  async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Account.getAll()
    res.json(data)
  } catch (err){
         next(err)
  }
})

router.get('/:id', md.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Account.getById(req.params.id)
    res.json(data)
  } catch (err){
    next(err)
  }
})

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, async(req, res, next) => {
  // DO YOUR MAGIC
   try{
    const data = await Account.create(req.body)
    res.status(201).json(data)
   } catch (err) {
    next(err)
   }
})

router.put('/:id', md.checkAccountPayload, md.checkAccountId, async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Account.updateById(req.params.id, req.body)
  } catch(err){
    next(err)
  }
});

router.delete('/:id', md.checkAccountId, async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Account.deleteById(req.params.id)
  } catch(err){
    next(err) 
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
})
})

module.exports = router;

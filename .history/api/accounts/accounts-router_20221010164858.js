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
    const newAccount = await Account.create(req.body)
    res.status(201).json(newAccount.trim())
   } catch (err) {
    next(err)
   }
})

router.put('/:id', md.checkAccountPayload, md.checkAccountId, async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Account.updateById(req.params.id, req.body)
    res.status(200).json(data)
  } catch(err){
    next(err)
  }
});

router.delete('/:id', md.checkAccountId, async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    await Account.deleteById(req.params.id)
    res.json(req.account)
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

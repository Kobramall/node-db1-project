const router = require('express').Router()
const Location = require('./locations-model')

router.get('/',  async (req, res, next) => {
  
  try{
    const data = await Location.getAll()
    res.json(data)
  } catch (err){
         next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Location.getById(req.params.id)
    res.json(data)
  } catch (err){
    next(err)
  }
})

router.post('/', async(req, res, next) => {
  // DO YOUR MAGIC
   try{
    const newAccount = await Location.create({name: req.body.name.trim(), budget: req.body.budget})
    res.status(201).json(newAccount)
   } catch (err) {
    next(err)
   }
})

router.put('/:id', async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Location.updateById(req.params.id, req.body)
    res.status(200).json(data)
  } catch(err){
    next(err)
  }
});

router.delete('/:id', async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    await Location.deleteById(req.params.id)
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

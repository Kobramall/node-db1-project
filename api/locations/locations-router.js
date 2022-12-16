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



router.post('/', async(req, res, next) => {

   try{
    const newAccount = await Location.create({name: req.body.name.trim(), budget: req.body.budget})
    res.status(201).json(newAccount)
   } catch (err) {
    next(err)
   }
})




router.delete('/:id', async(req, res, next) => {
  
  try{
    await Location.deleteById(req.params.id)
    res.json(req.account)
  } catch(err){
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

const express = require(`express`)

const router = express.Router()
const burger = require('../models/burger.js')

// get route to the index
router.get('/', function(req, res) {
burger.all(function(burgerData) {
  // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
  res.render('index', { burger_data: burgerData })
})
})

// post route back to index
router.post('/burgers/create', function(req, res) {
// takes the request object using it as input for burger.addBurger
burger.create(req.body.burger_name, function(result) {
  // wrapper for orm.js that using MySQL insert callback will return a log to console,
  // render back to index with handle
  console.log(result)
  res.redirect('/')
})
})

// put route to back to index
router.put('/burgers/:id', function(req, res) {
burger.update(req.params.id, function(result) {
  // wrapper for orm.js that using MySQL update callback will return a log to console,
  // render back to index with handle
  console.log(result)
  res.sendStatus(200)
})
})

module.exports = router
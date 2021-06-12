var express = require('express');
var router = express.Router();

var teacher = require('../query/teacher');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  const result = teacher.create("test_id", "0000");
  res.send(JSON.stringify(result));
})

router.get('/test2', function(req, res, next) {
  const result = teacher.read('test_id');
  res.json(result);
})

module.exports = router;

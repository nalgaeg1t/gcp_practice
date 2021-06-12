var express = require('express');
var router = express.Router();

var teacher = require('../query/teacher');

router.get('/test', function(req, res, next) {
  teacher.read('test2', (result) => {
    res.json(result);
  });
})

router.get('/test2', function(req, res, next) {
  teacher.create('test2', '1234', (result) => {
    res.json(result);
  });
})

module.exports = router;

var express = require('express');
var router = express.Router();
const authUtil = require('../middlewares/auth').checkToken;

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

router.get('/test3', function(req, res, next) {
  teacher.login('test', '0000', (result) => {
    res.json(result);
  });
})

router.get('/test4', authUtil, function(req, res, next) {
  res.json("DONE");
})
module.exports = router;

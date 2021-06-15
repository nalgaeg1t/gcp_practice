var express = require('express');
var router = express.Router();
const authUtil = require('../middlewares/auth').checkToken;

var teacher = require('../query/teacher');

router.get('/test/:id', function(req, res, next) {
  teacher.read(req.params.id, (result) => {
    res.json(result);
  });
})

router.get('/test2/:id/:pw', function(req, res, next) {
  teacher.create(req.params.id, req.params.pw, (result) => {
    res.json(result);
  });
})

router.get('/test3', authUtil, function(req, res, next) {
  res.json("DONE");
})

module.exports = router;

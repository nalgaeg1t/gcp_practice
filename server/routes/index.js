var express = require('express');
var router = express.Router();
const authUtil = require('../middlewares/auth').checkToken;

var teacher = require('../query/teacher');
var educlass = require('../query/educlass');

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

router.get('/educlass/create', function(req, res, next) {
  let id = Math.floor(Math.random() * 100000);
  let code = Math.random().toString(36).substr(2, 5) + Math.random().toString(36).substr(2, 5) + Math.random().toString(36).substr(2, 5) + Math.random().toString(36).substr(2, 5);
  // educlass.create(id, req.query.teacher_id, req.query.name, req.query.description, req.query.icon, code, (result) => {
  //   res.json(result);
  // });
  res.json([id, req.query.teacher_id, req.query.name, req.query.description, req.query.icon, code]);
})

router.get('/educlass/read', function(req, res, next) {
  educlass.read(req.query.teacher_id, (result) => {
    res.json(result);
  })
})

module.exports = router;

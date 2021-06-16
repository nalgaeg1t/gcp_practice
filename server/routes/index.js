var express = require('express');
var router = express.Router();
const authUtil = require('../middlewares/auth').checkToken;

var teacher = require('../query/teacher');
var educlass = require('../query/educlass');
var poem = require('../query/poem');
var picture = require('../query/picture');

router.get('/teacher/create/:id/:pw', function(req, res, next) {
  teacher.create(req.params.id, req.params.pw, (result) => {
    res.json(result);
  });
});

router.get('/teacher/read/:teacher_id', function(req, res, next) {
  teacher.read(req.params.teacher_id, (result) => {
    res.json(result);
  });
});

router.get('/educlass/create', function(req, res, next) {
  let id = Math.floor(Math.random() * 100000);
  let code = Math.random().toString(36).substr(2, 5) + Math.random().toString(36).substr(2, 5) + Math.random().toString(36).substr(2, 5) + Math.random().toString(36).substr(2, 5);
  educlass.create(req.query.teacher_id, id, req.query.name, req.query.description, req.query.icon, code, (result) => {
    res.json(result);
  });
})

router.get('/educlass/read/:teacher_id', function(req, res, next) {
  educlass.read(req.params.teacher_id, (result) => {
    res.json(result);
  });
})

router.get('/educlass/update/:educlass_id', function(req, res, next) {
  educlass.update(parseInt(req.params.educlass_id), req.query.name, req.query.description, req.query.icon, (result) => {
    res.json(result);
  });
});

router.get('/educlass/delete/:educlass_id', function(req, res, next) {
  educlass.delete(parseInt(req.params.educlass_id), (result) => {
    res.json(result);
  })
});

router.get('/poem/create/:educlass_id', function(req, res, next) {
  let id = Math.floor(Math.random() * 100000);
  poem.create(req.params.educlass_id, id, req.query.content, req.query.title, req.query.description, (result) => {
    res.json(result);
  });
});

router.get('/poem/read/:educlass_id', function(req, res, next) {
  poem.read(req.params.educlass_id, (result) => {
    res.json(result);
  });
});

router.get('/poem/update/:poem_id', function(req, res, next) {
  poem.update(req.params.poem_id, req.query.title, req.query.content, req.query.description, (result) => {
    res.json(result);
  });
});

router.get('/poem/delete/:poem_id', function(req, res, next) {
  poem.delete(req.params.poem_id, (result) => {
    res.json(result);
  });
});

router.get('/picture/create/:poem_id/:student_id', function(req, res, next) {
  let id = Math.floor(Math.random() * 100000);
  picture.create(req.params.poem_id, req.params.student_id, req.query.image, id, (result) => {
    res.json(result);
  });
});

router.get('/picture/read/:poem_id', function(req, res, next) {
  picture.read(req.params.poem_id, (result) => {
    res.json(result);
  });
});

router.get('/picture/update/:picture_id', function(req, res, next) {
  picture.update(req.params.picture_id, req.query.image, (result) => {
    res.json(result);
  });
});

router.get('/picture/delete/:picture_id', function(req, res, next) {
  picture.delete(req.params.picture_id, (result) => {
    res.json(result);
  });
});




module.exports = router;

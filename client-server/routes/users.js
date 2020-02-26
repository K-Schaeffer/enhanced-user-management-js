var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});


/* GET users listing. */
router.get('/', function (req, res, next) { //Express params

  client.get('/users', function (err, request, response, obj) { //Restify params
    assert.ifError(err);

    res.json(obj);

  });

});

/* GET specific user. */
router.get('/:id', function (req, res, next) { //Express params

  client.get(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  });

});

/* Edit user  */
router.put('/:id', function (req, res, next) { //Express params

  client.put(`/users/${req.params.id}`, req.body, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  });

});

/* Delete user  */
router.delete('/:id', function (req, res, next) { //Express params

  client.del(`/users/${req.params.id}`, function (err, request, response, obj) { // del is the delete from restify
    assert.ifError(err);

    res.json(obj);

  });

});

/* Create user  */
router.post('/', function (req, res, next) { //Express params

  client.post(`/users/`, req.body, function (err, request, response, obj) { // del is the delete from restify
    assert.ifError(err);

    res.json(obj);

  });

});

module.exports = router;

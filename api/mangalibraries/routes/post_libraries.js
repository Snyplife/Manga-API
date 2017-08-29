const express = require('express');
const mongoose = require('mongoose');
const store = require('../model/libraries');
const router = express.Router();

router.route('/')
.post((req, res) => {
  const store = new Store(req.body);
  store.save((err, store) =>  {
    if (err) {
      res.send(err);
    }
    res.json(store);
  });
});

module.exports = router;

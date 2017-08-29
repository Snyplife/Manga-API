const express = require('express');
const mongoose = require('mongoose');
const Store = require('../model/libraries');
const router = express.Router();

router.route('/')
 .get((req, res) => {
  // const, contact = new Contact(req.body);
		Store.find({},(err, store) => {
			if (err){
				res.status(500).send({error:"C PA BON"});
			}else {
				res.json(store);
			}
		})
	});

module.exports = router;

// app.put('/manga-store/:id', (req, res) => {
//   const id=req.params.id;
//   Manga.update({id}, {genre:req.body.genre, volumes:req.body.volumes},
//   (err, updateManga) => {
//   if (err) res.send("could not change genre & volumes");
//   res.send(updateManga);
// }
// )
// });
const express = require('express');
const mongoose = require('mongoose');
const store = require('../model/libraries');
const router = express.Router();



router.route('/')
.get((req, res) => {
  // const contact = new Contact(req.body);

		store.find({},(err, store) => {
			if (err){
				res.status(500).send({error:"C PA BON"});
			}
			else {
				res.json(store);
			}
		})

	});

module.exports = router;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const post_routes= require('./api/mangalibraries/routes/post_libraries');
const get_routes= require('./api/mangalibraries/routes/get_libraries');
const put_routes= require('./api/mangalibraries/routes/put_libraries');
const delete_routes= require('./api/mangalibraries/routes/delete_libraries');

mongoose.connect("mongodb://localhost/manga-api");




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.use('/api/mangalibraries', post_routes);
app.use('/api/mangalibraries', get_routes);
app.use('/api/mangalibraries', put_routes);
// app.use('/api/mangalibraries', delete_routes);


app.listen(3067, () => {
  console.log("Don't worry, it's working faggot !")
});

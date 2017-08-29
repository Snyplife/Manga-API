const mongoose  = require('mongoose');
const Schema  = mongoose.Schema;

const store = new Schema({
  genre: {type: String, required:true},
  writtenby: {type: String, required: true},
  illustratedby: {type: String, required: true},
  publishedby: {type: String, required: true}
})

module.exports = mongoose.model('store', store); 

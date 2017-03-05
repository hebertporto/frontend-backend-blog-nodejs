var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Novel    = mongoose.Schema({
	name : {
		type      : String,
		require   : true,
		unique    : true,
	},
	description: {
		type      : String,
		required  : true
	},
  author: {
    type      : [String],
		required  : true
  },
  translation_team: {
    type      : [String],
		required  : true
  },
  cover_url:{
    type : String,
    require: true
  },
  date_start: {
    type: Date
  },
  date_end: {
    type: Date
  },
	users: {
		type : [Schema.ObjectId],
    ref: 'User'
	},
  created_at:{
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Novel', Novel);
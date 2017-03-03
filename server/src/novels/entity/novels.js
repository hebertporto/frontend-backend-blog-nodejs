var mongoose = require('mongoose');

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
  autor: {
    type      : [String],
		required  : true
  },
  translation_team: {
    type      : [String],
		required  : true
  },
  thumbnail_url:{
    type : String,
    require: true
  },
  cover_url:{
    type : String,
    require: true
  }
  date_start: {
    type: Date
  }
  date_end: {
    type: Date
  },
	users: {
		type : ObjectId,
    ref: 'User'
	},
  created_at:{
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Novel', Novel);
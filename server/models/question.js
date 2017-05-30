var mongoose = require('mongoose');

//var User = mongoose.model('User');
var Answer = mongoose.model('Answer');
var QuestionSchema = new mongoose.Schema({
  user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
  question:{
      type:String,
      required:[true,"question field cannot be blank."],
      minlength:[10,"length too short"]
  },
  numAns:{
    type:Number,
    default:0
  },
  Description:{
    type:String
  },
  likes: {
		count: {
			type: Number,
			default: 0
		},
		users: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]
	},
answers: [{type: mongoose.Schema.Types.ObjectId,
              ref:'Answer'}]
            },
{timestsmps:true})


mongoose.model('Question',QuestionSchema);

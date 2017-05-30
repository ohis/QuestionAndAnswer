var mongoose = require('mongoose');

//var User = mongoose.model('User');
//var Answer = mongoose.model('Answer');
var AnswerSchema = new mongoose.Schema({
  user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
  question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Question'
	},
  answer:{
      type:String,
      required:[true,"answer field cannot be blank."],
      minlength:[5,"length too short"]
  },


  details:{
    type:String
  },

  likes: {
     type: Number,
     default: 0
   }
},
{timestamps:true})


mongoose.model('Answer',AnswerSchema);

var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');

module.exports = {
  index: function(req,res){
    Question.find({}).populate({
      path:'answers',
      model:'Answer',
      populate:{
        path:'user',
        model:'User'
      }
    }).exec(function(err,questions){
      if(err){
        return res.json(err);
      }
      console.log("got to question index")
      //console.log(questions);
      return res.json(questions);
    })
  },
  create: function(req,res){
    var question = new Question(req.body);
    Question.create(req.body,function(err,question){
      if(err){
        return res.json(err);
      }return res.json(question);
    })
  },
  show: function(req,res){
    Question.findById(req.params.id,function(err,question){
      if(err){
        return res.json(err);
      }
      User.findByIdAndUpdate(req.body.user, {$push: { questions : question_id}}, function(err,user){
        if(err){
          return res.json(err);
        }
        return res.json(question);
      })
      console.log("got to question");
    //  console.log(question);
    //  return res.json(question);
    })
  },

  show: function(req, res) {
    Question.findById(req.params.id).populate({
      path: 'answers',
      model: 'Answer',
      populate: {
        path: 'user',
        model: 'User'
      }
    }).exec(function(err, question) {
      if (err) {
        return res.json(err)
      }
      return res.json(question)
    })
  },
  destroy: function(req,res){
    Question.findById(req.params.id, function(err,question){
      if(err){
        return res.json(err);
      }
      question.remove(function(err,question){
        if(err){
          return res.json(err);
        }
        return res.json(question);
      })
    })
  }
}

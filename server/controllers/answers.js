var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
module.exports = {
  index: function(req,res){
    Answer.find({}).populate('question').populate('user').exec(function(err,answers){
      if(err){
        return res.json(err);
      }
      return res.json(anwers);
    })
  },
  create: function(req,res){
    var answer = new Answer(req.body);
    console.log("am in answer");
  //  console.log(req.body);
    Answer.create(req.body,function(err,answer){
      if(err){
        return res.json(err);
      }
      Question.findByIdAndUpdate(req.body.question, {$push: {answers:answer._id}},{new : true},function(err,question){
        if(err){
          return res.json(err);
        }
        User.findByIdAndUpdate(req.body.user, {$push: {answers: answer._id}},{new:true},function(err,user){
          if(err){
            return res.json(err);
          }        console.log(answer);
                  return res.json(answer);
        })

      })

    })
  },
  show: function(req,res){
    Answer.findById(req.params.id,function(err,answer){
      if(err){
        return res.json(err);
      }
      return res.json(answer);
    })
  },

  updateLikes: function(req, res){
  console.log("in asnwer likes");
  //console.log(req.body);
  Answer.findByIdAndUpdate(req.params.id, { $inc : { likes : 1 }}, { new: true }, function(err, answer){
    if(err){
      return res.json(err);
    }
    return res.json(answer);
  })
},

  destroy: function(req,res){
    Answer.findById(req.params.id, function(err,answer){
      if(err){
        return res.json(err);
      }
      answer.remove(function(err,answer){
        if(err){
          return res.json(err);
        }
        return res.json(answer);
      })
    })
  }
}

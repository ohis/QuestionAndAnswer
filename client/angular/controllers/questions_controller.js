app.controller('QuestionController', function($location,$routeParams,QuestionFactory,UserFactory,AnswerFactory){
  var self = this;
  self.questions = {};
  self.new_question = {};
  self.questions_error = [];
  self.question = [];
  self.answer = [];
  self.answers_errors = [];
  self.answer_error = [];


  self.index = function(){
    console.log('got to qc index');
		QuestionFactory.index(function(res){
      self.questions = {};
			self.questions = res.data;
      console.log(res.data);

		})
	}

  self.updateLikes = function(answer_id){
  AnswerFactory.updateLikes(answer_id, self.show);
}
  self.show = function(){
    console.log("i am in show controller");
    console.log($routeParams);
    QuestionFactory.show($routeParams.id,function(res){
      console.log(res.data);
      self.question = res.data;
    })

  }

  self.createAnswer = function(newAnswer,question_id){
    console.log("in asnwr");
    console.log(newAnswer);
  // self.answer = newAnswer.answer;
    //console.log(self.answer);

  //  console.log(newAnswer.question);
    UserFactory.session(function(user){
      console.log("getting user");

       if(newAnswer == undefined){
         self.answer_error = ['answer field cannot be blank'];
       }else{
              newAnswer.question = question_id;
         //  newAnswer.user = user;
         //  console.log(newAnswer.user);
         AnswerFactory.create(newAnswer, function(res){
          if(res.data.errors){
            for(key in res.data.errors){
              var error = res.data.errors[key];
              self.answers_errors.push(error.message);
            }
          }else{
            //self.answer = newAnswer.answer;
          //  console.log(self.answer);

            self.index();

            $location.url('/dashboard');
          }
         })


       }
    })
  }
  self.create = function(newQuestion){
    console.log("got to qc create");
    console.log(newQuestion);
    QuestionFactory.create(newQuestion,function(res){
      if(res.data.errors){
        for(key in res.data.errors){
          var error = res.data.errors[key];
          self.questions_error.push(error.message);
        }

      }else {
          //self.new_question = {};
          self.index();
          console.log('leaving qc create');
          $location.url('/dashboard');
      }

    })
  }


})

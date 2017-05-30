app.factory('AnswerFactory', function($http){
  var factory = {};

  factory.index = function(callback){
    		$http.get('/answers').then(callback);
    	}

  factory.create = function(newAnswer,callback){
    console.log("in answer factory");
    $http.post('/answers',newAnswer).then(callback);
  }
  factory.updateLikes = function(answer_id, callback){
    console.log("in answer like facttory");
    console.log(answer_id);
    //console.log(question_id);
    $http.put('/answers/' + answer_id + '/likes').then(callback);
  }

  return factory;
})

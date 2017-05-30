app.factory('QuestionFactory',function($http){
  var factory = {};

  factory.create = function(newQuestion,callback){
    $http.post('/questions',newQuestion).then(callback);
  }

  factory.index = function(callback){
    $http.get('/questions').then(callback);
  }

  factory.show = function(id,callback){
    console.log("got to show factory");
    console.log(id)
    $http.get('/questions/'+id).then(callback);
  }
  return factory;
})

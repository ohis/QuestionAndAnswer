var app = angular.module('app',['ngRoute','ngCookies']);

app.config(function($routeProvider){
      $routeProvider
      .when('/',{
        templateUrl:'partials/new.html',
        controller:'UsersController as UC'
      })
      .when('/dashboard',{
        templateUrl:'partials/dashboard.html',
        controller: 'UsersController as UC'
      })
      .when('/new_question',{
        templateUrl:'partials/new_question.html',
        controller:'QuestionController as QC'

      })
      .when('/question/:id',{
        templateUrl:'partials/question_show.html'
      })
      .when('/question/:id/answer',{
        templateUrl:'partials/new_answer.html'
      })
      .otherwise({redirecTo:'/'})
})

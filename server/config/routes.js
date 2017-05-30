var Users = require('../controllers/users.js');
var   Questions = require('../controllers/questions.js');
var Answers = require('../controllers/answers.js');

module.exports = function(app){
  app.get('/users',Users.index);
  app.post('/users',Users.create);
  app.post('/sessions',Users.login);
  app.get('/users/:id',Users.show);

  app.get('/questions',Questions.index);
  app.post('/questions',Questions.create);
  app.get('/questions/:id',Questions.show);

  app.get('/answers',Answers.index);
  app.post('/answers',Answers.create);
  app.get('/answers/:id',Answers.show);
 app.put('/answers/:id/likes', Answers.updateLikes)
  //app.put('/questions/:id/answers', Questions.updateAns);
}

var app = angular.module('hiredApp')

app.service('questionService', function ($http, $q) {
    this.getQuestion = function (lang) {
        var dif = $q.defer();
        $http.get('/api/' + lang)
            .then(function(response) {
            console.log("QuestionService - questions: ", response)
            dif.resolve(response.data)
    // this callback will be called asynchronously
    // when the response is available
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
        return dif.promise;
    }
    
    this.getQuestions = function(){
        return $http.get('/api')
    }
});
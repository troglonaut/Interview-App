var app = angular.module('hiredApp');

app.controller('htmlCtrl', function ($scope, htmlQuestions){
    $scope.questions = htmlQuestions;
    $scope.currentQuestion = $scope.questions[0];
});
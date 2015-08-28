var app = angular.module('hiredApp');

app.controller('mongoCtrl', function ($scope, mongoQuestions, $location){
    $scope.questions = mongoQuestions;
    
    $scope.totalQuestions = $scope.questions.length;
    $scope.thisQuestion = 0;
    $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
    $scope.nextProblem = function(){
        //something to see if it's correct
        $scope.thisQuestion++;
            $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
    }
});
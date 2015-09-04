var app = angular.module('hiredApp');

app.controller('htmlCtrl', function ($scope, htmlQuestions, $location){
    $scope.userAnwers = [];
    
    $scope.questions = htmlQuestions;
    
    $scope.totalQuestions = $scope.questions.length;
    $scope.thisQuestion = 0;
    $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
    $scope.nextProblem = function(index){
        
        var obj = {}
        obj.selectedAnswer = $scope.selectedIndex;
        obj.correctAnswer = $scope.currentQuestion.answer;
        obj.question = $scope.thisQuestion;
        $scope.userAnwers.push(obj)
        console.log("Selected Inx: ", $scope.selectedIndex);
        console.log(index);
        console.log($scope.userAnwer);
        console.log('userAnswers', $scope.userAnwers);
        
        $scope.thisQuestion++;
        console.log("thisQuestion: ", $scope.thisQuestion)
            $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
        $scope.val = undefined;
    }
    console.log("Questions: ", $scope.questions)
    console.log("Current Question: ", $scope.currentQuestion)
    console.log("This Question: ", $scope.thisQ1uestion)
//    console.log("Questins: ", $scope.questions)
//    console.log("Questins: ", $scope.questions)
//    console.log("Questins: ", $scope.questions)
$scope.onChange = function(idx) {
    $scope.selectedIndex = idx;
    console.log($scope.selectedIndex);
  };
});


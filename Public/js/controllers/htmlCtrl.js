var app = angular.module('hiredApp');

app.controller('htmlCtrl', function ($scope, htmlQuestions, $location){
    $scope.userAnwers = [];
    
    $scope.questions = htmlQuestions;
    console.log($scope.questions);
    
    $scope.lastQuestion = false;
    $scope.finished = false;
    
    $scope.totalQuestions = $scope.questions.length;
    $scope.thisQuestion = 0;
    $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
    $scope.nextProblem = function(index){
        
        console.log($scope.thisQuestion);
        console.log($scope.totalQuestions);
    
    if ($scope.thisQuestion >= $scope.totalQuestions) {
        return false;
    }
        var obj = {}
        obj.selectedAnswer = $scope.selectedIndex;
        obj.correctAnswer = $scope.currentQuestion.answer;
        obj.question = $scope.thisQuestion;
        
        $scope.selectedIndex = null;
        $scope.userAnwers.push(obj)
        
        console.log("Selected Inx: ", $scope.selectedIndex);
        console.log(index);
        console.log($scope.userAnwer);
        console.log('userAnswers', $scope.userAnwers);
        
        $scope.thisQuestion++;
        console.log("thisQuestion: ", $scope.thisQuestion)
            $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
        $scope.val = undefined;
        
        if ($scope.thisQuestion === $scope.totalQuestions) {
        $scope.lastQuestion = true;
        return false;
        }
    }
    console.log("Questions: ", $scope.questions)
    console.log("Current Question: ", $scope.currentQuestion)
    console.log("This Question: ", $scope.thisQ1uestion)
   
$scope.onChange = function(idx) {
    $scope.selectedIndex = idx;
    console.log($scope.selectedIndex);
  };
    
    $scope.calcResult = function () {
        var numRight = 0
        var tempArray = $scope.userAnwers;
        
        //loop through userAnswers and calculate numer right
        for (var i = 0; i < tempArray.length; i++ ) {
            if (tempArray[i].selectedAnswer === tempArray[i].correctAnswer) {
                numRight++;
            }
        }
        $scope.questionsCurrect = numRight;
        //finished to true 
        $scope.finished = true;
    }
});


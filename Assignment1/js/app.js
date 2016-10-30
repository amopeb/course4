( function() {
	'use strict';

	angular.module("LunchCheck",[])
	.controller("LunchCheckController", LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.resultMessage = "";
		$scope.classMessage = "";
		$scope.checkFood = function() {
		  if($scope.food == undefined || /^(\s*,\s*)+$/.test($scope.food) || $scope.food.length==0) {
		  	$scope.resultMessage = "Please enter data first";
		  	$scope.classMessage = "msg-error";
		    return;
		  }
		  //var a = $scope.food.split(",");
		  var a = $scope.food.replace(/(^(\s*,\s*)+)|((\s*,\s*)+$)/,"").replace( /(\s*,)+\s*/g,",").split(",")
		  $scope.classMessage = "msg-correct";
          if(a.length <= 3)          	  
          	$scope.resultMessage = "Enjoy!";
          else
          	$scope.resultMessage = "Too much!";
		}
	}



})();


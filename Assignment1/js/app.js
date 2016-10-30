( function() {
	'use strict';

	angular.module("MyApp",[])
	.controller("MyController", MyController);
    
    MyController.$inject = ['$scope'];

	function MyController($scope){
		$scope.resultMessage = "";
		$scope.checkFood = function() {
		  if($scope.food == undefined || /^(\s*,\s*)+$/.test($scope.food)) {
		  	$scope.resultMessage = "Please enter data first";
		    return;
		  }
		  //var a = $scope.food.split(",");
		  var a = $scope.food.replace(/(^(\s*,\s*)+)|((\s*,\s*)+$)/,"").replace( /(\s*,)+\s*/g,",")
		  console.log(a);
		  a = a.split(",");
          if(a.length <= 3)          	  
          	$scope.resultMessage = "Enjoy!";
          else
          	$scope.resultMessage = "Check If Too Much";
		}
	}



})();
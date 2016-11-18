(function(){
  'use strict';
  angular.module("MenuApp")
    .controller('ItemsController', 
    	['response', function (response){
        var my = this;
        my.items = response.data;
    }]);
})();

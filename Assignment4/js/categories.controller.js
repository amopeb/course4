(function(){
  'use strict';

   angular.module("MenuApp")
     .controller('CategoriesController', 
      [ 'response', function(response){
  	     var my = this;
         my.categories = response.data;
    }]);

})();
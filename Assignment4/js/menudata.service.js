(function(){
  'use strict';

  angular.module('data')
  .service('MenuDataService',['$http',
  	function($http){
      var my = this;

      my.getAllCategories = function(){
      	return $http(
      	  { method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/categories.json',
            cache: true
          });
      };

      my.getItemsForCategory = function(categoryShortName){
      	return $http(
          { method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
            params: { category: categoryShortName},
            cache: true
          });
      }; 
  	}
  	]);
})();
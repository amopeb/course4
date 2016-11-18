(function(){
  'use strict';
  angular.module('MenuApp')
  .config(['$stateProvider','$urlRouterProvider', 
  	function($stateProvider, $urlRouterProvider){

  		$urlRouterProvider.otherwise('/');

  		$stateProvider.state('home', {
          url: '/',
          templateUrl: 'src/home.html'
        })
        .state('categories', {
          url: '/categories',
          templateUrl: 'src/categories.html',
          controller: 'CategoriesController as cc',
          resolve: {
            response: ['MenuDataService', function(MenuDataService){
              return MenuDataService.getAllCategories();
            }]
          }
        })
        .state('items', {
          url: '/items/{categoryShortName}',
          templateUrl: 'src/items.html',
          controller: 'ItemsController as ci',
          resolve: {
            response: ['MenuDataService', '$stateParams', function(MenuDataService,$stateParams){
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
          }
        });
    }]);
	
})();
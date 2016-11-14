( function() {
	'use strict';

	angular.module("NarrowItDownApp",[])
	.controller("NarrowItDownController", NarrowItDownController)
	.service("MenuSearchService",  MenuSearchService)
  .directive("foundItems", foundItemsDirective);

  function foundItemsDirective(){
      return {
        //templateUrl: 'template.html',
        templateUrl: 'loader/itemsloaderindicator.template.html',
        restrict: "E",
        scope: {
          title: '<',
          found: '=',
          onRemove: '&'
        }
      };
  }
    
  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

	function NarrowItDownController($scope, MenuSearchService){
    var ctrl = this;
    ctrl.items = [];
    //ctrl.title = "No data";

    function changeTitle(){
      if(ctrl.items.length==0){
        ctrl.title = "Nothing found";
      } else {
        ctrl.title = String(ctrl.items.length) +  " items";
      }
    }
    ctrl.searchItems = function() {
      var elements = document.getElementsByClassName('loader');
      elements[0].style.display = 'block';
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function(result){
        //console.log(result);
        elements[0].style.display = 'none';
        ctrl.items = result;   
        changeTitle();
      }).catch(function(error){
        ctrl.error = error;
        elements[0].style.display = 'none';
      });
    }

    ctrl.removeItem = function(index) {
      console.log("remove item:", index);
      ctrl.items.splice(index,1);
      changeTitle();
    }
	}

  MenuSearchService.$inject = ['$http'];
	function  MenuSearchService($http) {
	  var service = this;

    function postFilter(searchTerm, data){
      searchTerm = searchTerm || "";
      searchTerm = searchTerm.toLowerCase();
      searchTerm.replace(/^(\s)*|(\s)*$/g,'');
        var descr;
        var name;
        var foundItems = [];
         for(var i in data) {
           descr = data[i].description.toLowerCase();
           name = data[i].name.toLowerCase();
           if(searchTerm == "" || descr.indexOf(searchTerm) != -1
                                            || name.indexOf(searchTerm) != -1) {
             foundItems.push(data[i]);
           }
         }
        return foundItems;
       
   }

   service.getMatchedMenuItems = function (searchTerm) {
      var promise = $http(
        { method: 'GET',
             url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
             cache: true 
        }).then(function (response){
          return postFilter(searchTerm, response.data.menu_items);
        });      
      return promise;   
   }
  } // end of MenuSearchService

})();


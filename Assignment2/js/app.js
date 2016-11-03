( function() {
	'use strict';

	angular.module("ShoppingListCheckOff",[])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService){

       var ctrl = this;
       ctrl.items = ShoppingListCheckOffService.getToBuyItems();

       ctrl.moveToBoughtItems = function(index){
          ShoppingListCheckOffService.moveItem(index);
       }

       //console.log(ctrl);
	}

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
       var ctrl = this;
       ctrl.items = ShoppingListCheckOffService.getBoughtItems();

    }

	function ShoppingListCheckOffService() {
	   var service = this;
       var toBuyItems = [];
       var boughtItems = [];

       var defaultList =  function() {
         var list=["apple","orange","pear","cherry","plum","peach","almond"];

    	  for(var i in list) {
           addToBuyItems(list[i], Number(i) + 1);    		
    	  }
       } 

       service.getToBuyItems = function() {
         return toBuyItems;
       };

       var addToBuyItems = function(name,quantity){
         var v = {name: name, quantity: quantity};
         toBuyItems.push(v);
       };

       var removeFromToBuyItems = function(index){
         var v = toBuyItems[index];
       	 toBuyItems.splice(index,1);
         return v;
       };

       var addToBoughtItems=function(item) {
       	var v = {name: item.name, quantity: item.quantity};
         boughtItems.push(v);
       }

       service.getBoughtItems = function(){
         return boughtItems;
       };

       service.moveItem = function(index) {
          addToBoughtItems(removeFromToBuyItems(index));
       }

       defaultList();
	}

})();


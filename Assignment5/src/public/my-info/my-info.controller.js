( function() {
	'use strict';
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['data']
    function MyInfoController(data){
      var my = this;

      my.user = data.user;
      my.isSignUp = data.isSignUp;
      my.menuItem = data.menuItem;
    }
})();
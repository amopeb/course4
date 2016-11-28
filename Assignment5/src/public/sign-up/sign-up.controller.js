( function() {
	'use strict';
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserInfoService'];
    function SignUpController(UserInfoService){
      var my = this;

      my.user = UserInfoService.getUser();
      my.isDishNotExists = false;
      my.isSaved = false;
      my.do = function(){
        UserInfoService.test(my.user).then(function(response){
          my.isSaved = response;
          my.isDishNotExists = !response;
        });        
      };
    }
})();
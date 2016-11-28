(function(){
  'use strict';
  angular.module('public')
  .service('UserInfoService', UserInfoService);

  UserInfoService.$inject = ['MenuService','$cookies'];
  function UserInfoService(MenuService, $cookies){
    var my = this;

    my.data = {};
    my.data.isSignUp = false;

    my.test = function(user) {
      return MenuService.getMenuItem(user.dish).then(function(response){
         my.data.isSignUp = true;
         my.data.user = angular.copy(user);
         my.data.menuItem = response;
         $cookies.putObject('sign-up-user', my.data.user);
         return true;
      }).catch(function(response){
        my.data.isSignUp = false;
        return false;
      });
    };

    my.getData = function(){
      var user = $cookies.getObject('sign-up-user');
      if(!user || my.data.isSignUp) {
        return my.data; 
      }
      return my.test(user).then(function(response) {
         return my.data; 
     });
    };
    

    my.getIsSignUp = function(){
       return my.data.isSignUp;
    };

    my.getUser = function(){
       return my.data.user;
    };

    my.getMenuItem = function(){
       return my.data.menuItem;
    };

  }   

})();
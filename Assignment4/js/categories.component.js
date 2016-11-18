(function(){
  'use strict';

  angular.module("MenuApp")
    .component('categories',{
  	  templateUrl: 'src/categories.template.html',
  	  controller: function() {},
  	  bindings: {
        list: '<'
  	  }
  });

})();
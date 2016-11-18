(function(name){
	'use strict';

	angular.module(name)
	.component('placeForError', {
	  templateUrl: 'src/place-for-error.html',
	  controller: Controller
	});

	function Controller($rootScope) {
       var my = this;
       var canceller = [];
       my.isShow = false;
       my.text = "";

       canceller.push($rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
        console.log(error);
         my.data = { text: "Error in http request.", url: error.config.url, status: error.status, statusText: error.statusText};
         my.isShow = true;
       }));


       canceller.push($rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
         my.isShow = false;
       }));


       my.clearShow = function(){
          my.isShow = false;
       };

       my.$onDestroy = function(){
         canceller.forEach( function(cancelFunction){ cancelFunction();});
       };
	};
})('MenuApp');
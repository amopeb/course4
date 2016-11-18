(function(){
	angular.module("MenuApp")
	.component('placeForWait',{
		templateUrl: 'src/place-for-wait.html',
		controller: Controller
	});

    Controller.$inject = ['$rootScope'];
	function Controller($rootScope){
		var my = this;
        var canceller = [];

        my.isShow = false;

       canceller.push($rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
         my.isShow = false;
       }));


       canceller.push($rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
        if(toState.name != "home") {
          my.isShow = true;
        }
       }));

       canceller.push($rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
         my.isShow = false;
       }));


        my.$onDestroy = function(){
        	canceller.forEach( function(cancelFunction){ cancelFunction();});
         };

	}
})();
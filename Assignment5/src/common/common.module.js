(function() {
"use strict";

angular.module('common', [])
//.constant('ApiPath', '')
//.constant('ApiPath', 'https://www.davidchuschinabistro.com')
.constant('ApiPath', 'https://enigmatic-garden-89536.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

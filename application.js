(function () {

  var appConfig = function ($urlLocationProvider, $httpProvider) {
    $urlLocationProvider.otherwise('/');

    $httpProvider.interceptors.push('HttpErrorInterceptor');

  };

  angular.module('app', ['ui.router', 'characters', 'planets'])
    .config(['$urlRouterProvider', '$httpProvider', appConfig]);
}())
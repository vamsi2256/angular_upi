'use strict';

angular.
  module('upiApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<login-component></login-component>'
        }).
        when('/register', {
          template: '<register-component></register-component>'
        }).
        when('/dashboard',{
          template:'<dashboard-component></dashboard-component>'
        }).
        when('/amount/:obj',{
          template:'<amount-component></amount-component>'
        }).
        otherwise('/');
    }
  ]);
'use strict';

angular.
  module('upiApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<login-component></login-component>'
        }),
        otherwise('/');
    }
  ]);
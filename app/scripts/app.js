'use strict';

/**
 * @ngdoc overview
 * @name postItsApp
 * @description
 * # postItsApp
 *
 * Main module of the application.
 */
angular
  .module('postItsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/whiteboard', {
        templateUrl: 'views/whiteboard.html',
        controller: 'WhiteboardCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
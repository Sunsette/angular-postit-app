'use strict';

/**
 * @ngdoc service
 * @name postItsApp.postitInfo
 * @description
 * # postitInfo
 * Factory in the postItsApp.
 */
angular.module('postItsApp')
  .factory('postitInfo', function ($rootScope, $http, $timeout) {
    // Service logic
    // ...
    // Public API here

    var currentWhiteboard = '';

    return {
      getAllWhiteboards: function () {
        var promise = $http.get('http://localhost:4000/whiteboards');
        return promise;
      },
      addWhiteboard: function (name) {
        $http.post('http://localhost:4000/whiteboards', {
          name: name
        });
        console.log('new whiteboard added');

        $timeout(function () {
          $rootScope.$broadcast('newWhiteboard', 'new');
        }, 1000);
      },
      setCurrentWhiteboard: function (name) {
        currentWhiteboard = name;
      },
      getAllPostits: function () {

        var promise = $http.get('http://localhost:4000/' + currentWhiteboard);

        return promise;
      },
      addPostit: function (title, info, color) {

        $http.post('http://localhost:4000/' + currentWhiteboard, {
          title: title,
          info: info,
          color: color
        }).success(function () {
          $rootScope.$broadcast('dataUpdate', 'updated');
        });

      },
      deletePostit: function (id) {

        $http.delete('http://localhost:4000/' + currentWhiteboard + '/' + id).success(function () {
          $rootScope.$broadcast('dataUpdate', 'updated');
        });

      },
      updatePostit: function (id, title, info, color) {

        $http.put('http://localhost:4000/' + currentWhiteboard + '/' + id, {
          id: id,
          title: title,
          info: info,
          color: color
        }).success(function () {
          $rootScope.$broadcast('dataUpdate', 'updated');
        });

      }
    };
  });
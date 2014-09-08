'use strict';

/**
 * @ngdoc function
 * @name postItsApp.controller:WhiteboardCtrl
 * @description
 * # WhiteboardCtrl
 * Controller of the postItsApp
 */
angular.module('postItsApp')
	.controller('WhiteboardCtrl', function ($scope, $location, postitInfo) {

		function getAllPostits() {
			postitInfo.getAllPostits().success(function (postits) {
				$scope.severalPosts = postits;
				console.log(postits);
			});
		}

		getAllPostits();

		$scope.colors = ['blue', 'pink', 'yellow', 'green'];

		$scope.$on('dataUpdate', getAllPostits);

	});
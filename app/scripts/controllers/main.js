'use strict';

/**
 * @ngdoc function
 * @name postItsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the postItsApp
 */
angular.module('postItsApp')
	.controller('MainCtrl', function ($scope, $location, postitInfo) {


		var getAllWhiteboards = function () {
			postitInfo.getAllWhiteboards().success(function (boards) {
				$scope.allBoards = boards;
				console.log(boards);
			});
		};

		getAllWhiteboards();

		$scope.$on('newWhiteboard', getAllWhiteboards);


	});
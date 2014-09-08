'use strict';

/**
 * @ngdoc directive
 * @name postItsApp.directive:piAllBoards
 * @description
 * # piAllBoards
 */
angular.module('postItsApp')
	.directive('piAllBoards', function () {
		return {
			scope: {
				whiteboards: '='
			},
			template: '<div class="boards-background">' +
				'<div ng-click="selectWhiteboard(board.name)" class="one-board" ng-repeat="board in whiteboards">' +
				'<h1>{{board.name}}</h1>' +
				'</div>' +
				'</div>',
			restrict: 'E',
			controller: function ($scope, $location, postitInfo) {
				$scope.selectWhiteboard = function (name) {
					postitInfo.setCurrentWhiteboard(name);
					$location.path('/whiteboard');

				};
			}
		};
	});
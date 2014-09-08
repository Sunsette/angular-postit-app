'use strict';

/**
 * @ngdoc directive
 * @name postItsApp.directive:piPostit
 * @description
 * # piPostit
 */
angular.module('postItsApp')
	.directive('piPostit', function (postitInfo) {
		return {
			scope: {
				currentPostit: '='
			},
			template: '<div>' +
				'<input ng-model="currentPostit.title" class="title" ng-blur="updatePostit()"/>' +
				'<textarea ng-model="currentPostit.info" class="info" ng-blur="updatePostit()"/>' +
				'<span ng-click="deletePostit(currentPostit.id)" class="delete-button"> <span class="glyphicon glyphicon-trash"></span></span>' +
				'</div>',
			restrict: 'E',
			controller: function ($scope, $location, postitInfo) {

				$scope.deletePostit = function (id) {
					postitInfo.deletePostit(id);
				};

				$scope.updatePostit = function () {
					if ($scope.title === undefined) {
						$scope.title = $scope.currentPostit.title;
					}

					if ($scope.info === undefined) {
						$scope.info = $scope.currentPostit.info;
					}

					postitInfo.updatePostit($scope.currentPostit.id, $scope.title, $scope.info, $scope.currentPostit.color);

				};


			}

		};
	});
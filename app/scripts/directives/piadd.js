'use strict';

/**
 * @ngdoc directive
 * @name postItsApp.directive:piAdd
 * @description
 * # piAdd
 */
angular.module('postItsApp')
	.directive('piAdd', function () {
		return {
			template: '<div><div class="modal fade" id="postitModal">' +
				'<div class="modal-dialog">' +
				'<div class="modal-content postit-modal" ng-class="myColor">' +
				' <div class="modal-header">' +
				'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
				'<input ng-model="title" class="title" placeholder="Title"/>' +
				'</div>' +
				'<div class="modal-body">' +
				'<textarea ng-model="info" class="info" placeholder="Information"/>' +
				'</div>' +
				' <div class="modal-footer">' +
				' <span ng-click="addNewPostIt()" class="add-button">Save</span>' +
				' <select ng-model="myColor" ng-options="color for color in colors">' +
				'<option value="">-- choose a color --</option>' +
				'</select>' +
				' </div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>',
			restrict: 'E',
			controller: function ($scope, $location, postitInfo) {

				$scope.addNewPostIt = function () {

					console.log('new post has been created');
					if ($scope.myColor === undefined) {
						$scope.myColor = 'yellow';
					}
					postitInfo.addPostit($scope.title, $scope.info, $scope.myColor);

					$('#postitModal').modal('hide');
				};

			}
		};
	});
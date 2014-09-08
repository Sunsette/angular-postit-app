'use strict';

/**
 * @ngdoc directive
 * @name postItsApp.directive:piAddBoard
 * @description
 * # piAddBoard
 */
angular.module('postItsApp')
	.directive('piAddBoard', function () {
		return {
			template: '<div>' +
				'<div class="modal fade" id="boardModal">' +
				'<div class="modal-dialog">' +
				'<div class="modal-content add-board">' +
				'<div class="modal-header">' +
				'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
				'<input ng-model="name" class="title" placeholder="Name"/>' +
				'</div>' +
				'<div class="modal-footer">' +
				'<span ng-click="addWhiteboard()" class="add-button">Save</span>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>',
			restrict: 'E',
			controller: function ($scope, $rootScope, $location, postitInfo) {
				$scope.addWhiteboard = function () {
					postitInfo.addWhiteboard($scope.name);
					$('#boardModal').modal('hide');
				};
			}
		};
	});
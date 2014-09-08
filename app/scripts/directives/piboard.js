'use strict';

/**
 * @ngdoc directive
 * @name postItsApp.directive:piBoard
 * @description
 * # piBoard
 */
angular.module('postItsApp')
	.directive('piBoard', function () {
		return {
			scope: {
				postits: '='
			},
			template: '<div ng-repeat="postit in postits" class="postit" ng-class="postit.color">' +
				'<pi-postit current-postit="postit"></pi-postit>' +
				'</div>',
			restrict: 'E'
		};
	});
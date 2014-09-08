'use strict';

describe('Controller: WhiteboardCtrl', function () {

  // load the controller's module
  beforeEach(module('postItsApp'));

  var WhiteboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhiteboardCtrl = $controller('WhiteboardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Directive: piAdd', function () {

  // load the directive's module
  beforeEach(module('postItsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pi-add></pi-add>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the piAdd directive');
  }));
});

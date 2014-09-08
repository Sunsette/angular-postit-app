'use strict';

describe('Filter: onlyPostits', function () {

  // load the filter's module
  beforeEach(module('postItsApp'));

  // initialize a new instance of the filter before each test
  var onlyPostits;
  beforeEach(inject(function ($filter) {
    onlyPostits = $filter('onlyPostits');
  }));

  it('should return the input prefixed with "onlyPostits filter:"', function () {
    var text = 'angularjs';
    expect(onlyPostits(text)).toBe('onlyPostits filter: ' + text);
  });

});

'use strict';

describe('Service: postitInfo', function () {

  // load the service's module
  beforeEach(module('postItsApp'));

  // instantiate service
  var postitInfo;
  beforeEach(inject(function (_postitInfo_) {
    postitInfo = _postitInfo_;
  }));

  it('should do something', function () {
    expect(!!postitInfo).toBe(true);
  });

});

'use strict';

describe('Controller: BookmarksAddCtrl', function () {

  // load the controller's module
  beforeEach(module('viewApp'));

  var BookmarksAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookmarksAddCtrl = $controller('BookmarksAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookmarksAddCtrl.awesomeThings.length).toBe(3);
  });
});

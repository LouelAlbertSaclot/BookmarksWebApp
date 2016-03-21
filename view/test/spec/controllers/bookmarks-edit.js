'use strict';

describe('Controller: BookmarksEditCtrl', function () {

  // load the controller's module
  beforeEach(module('viewApp'));

  var BookmarksEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookmarksEditCtrl = $controller('BookmarksEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookmarksEditCtrl.awesomeThings.length).toBe(3);
  });
});

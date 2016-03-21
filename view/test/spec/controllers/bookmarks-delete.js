'use strict';

describe('Controller: BookmarksDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('viewApp'));

  var BookmarksDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookmarksDeleteCtrl = $controller('BookmarksDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookmarksDeleteCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: BookmarksViewCtrl', function () {

  // load the controller's module
  beforeEach(module('viewApp'));

  var BookmarksViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookmarksViewCtrl = $controller('BookmarksViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookmarksViewCtrl.awesomeThings.length).toBe(3);
  });
});

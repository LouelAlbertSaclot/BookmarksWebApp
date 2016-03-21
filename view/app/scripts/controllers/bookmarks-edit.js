'use strict';

/**
 * @ngdoc function
 * @name viewApp.controller:BookmarksEditCtrl
 * @description
 * # BookmarksEditCtrl
 * Controller of the viewApp
 */
angular.module('viewApp')
  .controller('BookmarksEditCtrl', function ($scope, $routeParams, Bookmark, $location) {
    $scope.editBookmark = true;
    $scope.bookmark = {};
    Bookmark.one($routeParams.id).get().then(function(bookmark) {
      $scope.bookmark = bookmark;
      $scope.save = function() {
        $scope.bookmark.save().then(function() {
          $location.path('/bookmarks/' + $routeParams.id);
        });
      };
    });
  });

'use strict';

/**
 * @ngdoc function
 * @name viewApp.controller:BookmarksDeleteCtrl
 * @description
 * # BookmarksDeleteCtrl
 * Controller of the viewApp
 */
angular.module('viewApp')
  .controller('BookmarksDeleteCtrl', function ($scope, $routeParams, Bookmark, $location) {
    $scope.bookmark = Bookmark.one($routeParams.id).get().$object;
    $scope.delete = function() {
      $scope.bookmark.remove().then(function() {
        $location.path('/bookmarks');
      });
    };
    this.back = function() {
      $location.path('/bookmarks/' + $routeParams.id);
    };
  });

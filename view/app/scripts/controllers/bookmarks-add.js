'use strict';

/**
 * @ngdoc function
 * @name viewApp.controller:BookmarksAddCtrl
 * @description
 * # BookmarksAddCtrl
 * Controller of the viewApp
 */
angular.module('viewApp')
  .controller('BookmarksAddCtrl', function ($scope, Bookmark, $location) {
    $scope.bookmark = {};
    console.log($scope.bookmark);
    $scope.save = function() {
      console.log("CRAP");
      Bookmark.post($scope.bookmark).then(function() {
        $location.path('/bookmarks');
      });
    };
  });

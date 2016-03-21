'use strict';

/**
 * @ngdoc function
 * @name viewApp.controller:BookmarksViewCtrl
 * @description
 * # BookmarksViewCtrl
 * Controller of the viewApp
 */
angular.module('viewApp')
  .controller('BookmarksViewCtrl', function ($scope, $routeParams, Bookmark) {
    $scope.viewBookmark = true;
    $scope.bookmark =  Bookmark.one($routeParams.id).get().$object;
  });

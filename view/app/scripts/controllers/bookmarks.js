'use strict';

/**
 * @ngdoc function
 * @name viewApp.controller:BookmarksCtrl
 * @description
 * # BookmarksCtrl
 * Controller of the viewApp
 */
angular.module('viewApp')
  .controller('BookmarksCtrl', function (Bookmark) {
    this.bookmarks = Bookmark.getList().$object;
    console.log(this.bookmarks);
  });

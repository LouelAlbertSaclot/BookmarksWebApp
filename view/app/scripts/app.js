'use strict';

/**
 * @ngdoc overview
 * @name viewApp
 * @description
 * # viewApp
 *
 * Main module of the application.
 */
angular
  .module('viewApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/bookmarks', {
        templateUrl: 'views/bookmarks.html',
        controller: 'BookmarksCtrl',
        controllerAs: 'bookmarks'
      })
      .when('/create/bookmark', {
        templateUrl: 'views/bookmarks-add.html',
        controller: 'BookmarksAddCtrl',
        controllerAs: 'bookmarksAdd'
      })
      .when('/bookmarks/:id', {
        templateUrl: 'views/bookmarks-view.html',
        controller: 'BookmarksViewCtrl',
        controllerAs: 'bookmarksView'
      })
      .when('/bookmarks/:id/delete', {
        templateUrl: 'views/bookmarks-delete.html',
        controller: 'BookmarksDeleteCtrl',
        controllerAs: 'bookmarksDelete'
      })
      .when('/bookmarks/:id/edit', {
        templateUrl: 'views/bookmarks-edit.html',
        controller: 'BookmarksEditCtrl',
        controllerAs: 'bookmarksEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('BookmarkRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Bookmark', function(BookmarkRestangular) {
    return BookmarkRestangular.service('bookmark');
  })
  .directive('embedded', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/embedded.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });

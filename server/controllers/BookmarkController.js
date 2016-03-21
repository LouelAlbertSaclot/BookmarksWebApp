//var restful = require('node-restful');

var Resource = require('resourcejs');
module.exports = function(app, route) {

  // Setup the controller for REST;
  Resource(app, '', route, app.models.bookmark).rest();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};

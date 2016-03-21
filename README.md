#My Simple M.E.A.N WebApp - MyBookmarks

As part of learning the MEAN (MongoDB, ExpressJS, AngularJS, NodeJS) Stack, I had tried to create a very simple webapp using the steps from the tutorial shown below.

TODO:
=============================================================================
* Need to improve UI with proper use of CSS
* More Robust page and validation is needed

Sources:
=============================================================================
http://travistidwell.com/blog/2015/01/20/how-to-build-a-mean-web-application/

Some Modules Used:
=============================================================================
npm install --save express
npm install --save mongoose
npm install --save node-restful
npm install --save method-override
npm install --save body-parser
npm install --save resourcejs
npm install --save lodash

bower install --save restangular

yo angular:route bookmarks-add --uri=create/bookmark
yo angular:route bookmarks-view --uri=bookmark/:id
yo angular:route bookmarks-delete --uri=bookmark/:id/delete
yo angular:route bookmarks-edit --uri=bookmark/:id/edit

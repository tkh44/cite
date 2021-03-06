// Routes
// *********************
// 
// This table routes urls to controllers/actions.
//
// If the URL is not specified here, the default route for a URL is:  /:controller/:action/:id
// where :controller, :action, and the :id request parameter are derived from the url
//
// If :action is not specified, Sails will redirect to the appropriate action 
// based on the HTTP verb: (using REST/Backbone conventions)
//
//      GET:    /:controller/read/:id
//      POST:   /:controller/create
//      PUT:    /:controller/update/:id
//      DELETE: /:controller/destroy/:id
//
// If the requested controller/action doesn't exist:
//   - if a view exists ( /views/:controller/:action.ejs ), Sails will render that view
//   - if no view exists, but a model exists, Sails will automatically generate a 
//       JSON API for the model which matches :controller.
//   - if no view OR model exists, Sails will respond with a 404.
//
module.exports.routes = {
    
    // To route the home page to the "index" action of the "home" controller:
    '/' : {
        controller  : 'main',
        action: 'index'
    },
    '/signup': {
        controller: 'main',
        action: 'signup'
    },
    '/login': {
        controller: 'main',
        action: 'login'
    },

    // Standard RESTful routing
    // (if index is not defined, findAll will be used)
    'get /user': {
        controller  : 'user',
        action      : 'index'
    },
    'get /user/:id': {
        controller  : 'user',
        action      : 'find'
    },
    'post /user': {
        controller  : 'user',
        action      : 'create'
    },
    'put /user/:id': {
        controller  : 'user',
        action      : 'update'
    },
    'delete /user/:id': {
        controller  : 'user',
        action      : 'destroy'
    },
    
    // Standard RESTful routing
    // (if index is not defined, findAll will be used)
    'get /cite': {
        controller  : 'cite',
        action      : 'index'
    },
    'get /cite/:id': {
        controller  : 'cite',
        action      : 'find'
    },
    'post /cite': {
        controller  : 'cite',
        action      : 'create'
    },
    'put /cite/:id': {
        controller  : 'cite',
        action      : 'update'
    },
    'delete /cite/:id': {
        controller  : 'cite',
        action      : 'destroy'
    }
};

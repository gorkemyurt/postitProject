
require.config({
  paths: {
    'jquery': 'lib/jquery',
    'backbone': 'lib/backbone',
    'text': 'lib/text',
    'jsx' : 'lib/jsx',
    'JSXTransformer' : 'lib/JSXTransformer',
    'react' : 'lib/react',
    'underscore': 'lib/underscore',
    'bootstrap' : 'lib/bootstrap',
    'marionette' : 'lib/backbone.marionette',
    'localStorage' : 'lib/backbone.localStorage',
    'less' : 'lib/less',
    'socketio': '../socket.io/socket.io',
    'moment' : 'lib/moment.min',
    'zepto' : 'lib/zepto',
    'deferred' : 'lib/deferred1',
    'jquery-ui' : 'lib/jquery-ui',

//backbone app
    "MyApp" : "app",
//backbone models and collections
    "Notes" : "collections/notes",
    "Note"  : "models/note",
//backbone views
    "TodoListItem" : "views/TodoListItemView",
    "TodoList" : "views/TodoListView",
    "BadListHeader" : "views/BadListHeaderView",
    "GoodListHeader" : "views/GoodListHeaderView",
//foundation
    "foundation": "foundation/foundation",
    "foundation.alerts": "foundation/foundation.alerts",
    "foundation.clearing": "foundation/foundation.clearing",
    "foundation.cookie": "foundation/foundation.cookie",
    "foundation.dropdown": "foundation/foundation.dropdown",
    "foundation.forms": "foundation/foundation.forms",
    "foundation.joyride": "foundation/foundation.joyride",
    "foundation.magellan": "foundation/foundation.magellan",
    "foundation.orbit": "foundation/foundation.orbit",
    "foundation.placeholder": "foundation/foundation.placeholder",
    "foundation.topbar": "foundation/foundation.topbar",
    "foundation.reveal": "foundation/foundation.reveal",
    "foundation.section": "foundation/foundation.section",
    "foundation.tooltips": "foundation/foundation.tooltips",
    "foundation.topbar": "foundation/foundation.topbar"


  },
  shim: {
    "zepto": {
          exports: '$'
    },
    'deferred':{
        deps: ["zepto"],
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ["underscore", "zepto"],
      exports: 'Backbone'
    },
    'bootstrap' : {
        deps: ["zepto"]
    },
    'marionette' : {
      deps : ["backbone", "underscore", "zepto"],
      exports: 'Marionette'
    },
    "foundation": {
            deps: ["zepto"]
    },
    'socketio': {
      exports: 'io'
    },
    },
});

require(

  [ "jquery",
    "underscore",
    "backbone",
    "less",
    "marionette",
    "jsx!MyApp",
    "socketio",
    "deferred",

  ],
  function($ , _, Backbone, Marionette, MyApp, socketio) {



  });



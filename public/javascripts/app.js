/** @jsx React.DOM */
define([
  'jquery',
	'marionette',
  'react',
  'Notes',
  'jsx!TodoList',
  'jquery-ui'
	], function ($, Marionette, React, Notes,TodoList) {
    'use strict'
    // set up the app instance
    var MyApp = new Backbone.Marionette.Application()

    MyApp.addRegions({
    });

    MyApp.addInitializer(function(){

       var todos = new Notes([{text : "dishes "}, {text : "read"}]);


       React.renderComponent(<TodoList todos={todos} />, document.getElementById('main'));
       // React.renderComponent(<TodoList todos={todos} />, document.getElementById('bad-container'));


    });

    MyApp.start();
    return MyApp;
});
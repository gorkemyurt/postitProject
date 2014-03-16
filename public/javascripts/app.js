/** @jsx React.DOM */
define([
  'zepto',
	'marionette',
  'react',
  'Notes',
  'jsx!TodoList'

	], function ($, Marionette, React, Notes,TodoList) {
    'use strict'
    // set up the app instance
    var MyApp = new Backbone.Marionette.Application()

    MyApp.addRegions({
    });

    MyApp.addInitializer(function(){

       var todos = new Notes([{text : "dishes "}, {text : "read"}]);


       React.renderComponent(<TodoList todos={todos} />, document.getElementById('good-container'));
    });

    MyApp.start();
    return MyApp;
});
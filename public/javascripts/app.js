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

        // var BackboneMixin = {
        //   _backboneForceUpdate: function() {
        //       this.forceUpdate();
        //   },
        //   componentDidMount: function() {
        //     // Whenever there may be a change in the Backbone data, trigger a reconcile.
        //     this.getBackboneModels().map(function(model) {
        //       model.on('add change remove', this._backboneForceUpdate, this);
        //     }.bind(this));
        //   },
        //   componentWillUnmount: function() {
        //     // Ensure that we clean up any dangling references when the component is destroyed.
        //     this.getBackboneModels().map(function(model) {
        //       model.off('add change remove', this._backboneForceUpdate, this);
        //     }.bind(this));
        //   }
        // };

       var todos = new Notes([{text : "dishes "}, {text : "read"}]);


       React.renderComponent(<TodoList todos={todos} />, document.body);
    });

    MyApp.start();
    return MyApp;
});
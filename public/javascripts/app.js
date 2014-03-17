/** @jsx React.DOM */
define([
  'jquery',
	'marionette',
  'react',
  'Notes',
  'jsx!TodoList',
  'jsx!GoodListHeader',
  'jsx!BadListHeader',
  'jquery-ui'
	], function ($, Marionette, React, Notes, TodoList, GoodListHeader, BadListHeader) {
    'use strict'
    // set up the app instance
    var MyApp = new Backbone.Marionette.Application()

    MyApp.addRegions({
    });

    MyApp.addInitializer(function(){

       var todos = new Notes([{text : "dishes ", type:"good"}, {text : "read", type : "bad"}]);


       React.renderComponent(
                          <div className="row">
                            <div className="columns large-12">
                              <GoodListHeader todos={todos}/>
                              <BadListHeader todos={todos}/>
                              <div id="main" className="columns large-12">
                                <TodoList todos={todos} />
                              </div>
                            </div>
                          </div>, document.body);
       // React.renderComponent(<TodoList todos={todos} />, document.getElementById('bad-container'));


    });

    MyApp.start();
    return MyApp;
});
/** @jsx React.DOM */

define([
  'zepto',
  'underscore',
  'backbone',
  'marionette',
  'react',
  'jsx!TodoListItem',
  'backboneMixin',
  'socketio',
], function ($, _, Backbone, Marionette, React, TodoListItem, BackboneMixin, io) {
  'use strict';

  var TodoList = React.createClass({
    mixins: [BackboneMixin],


    getBackboneModels: function() {
        return [this.props.todos];
    },
    render: function () {
      var goodNotes = this.props.todos.map(function (model) {
        if(model.get("type") == "good"){
            return <TodoListItem model={model} />;
        }
      });
      var badNotes = this.props.todos.map(function (model){
        if(model.get("type") == "bad"){
          return <TodoListItem model={model} />;
        }
      })
        return (
          <div className="notes-container">
            <div className="good-notes">
              {goodNotes}
            </div>
            <div className="bad-notes">
              {badNotes}
            </div>
         </div>
      )
    }
});
  return TodoList;
});



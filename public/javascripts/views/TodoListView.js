/** @jsx React.DOM */

define([
	'zepto',
	'underscore',
	'backbone',
	'marionette',
	'react',
    'jsx!TodoListItem',
    'backboneMixin'
], function ($, _, Backbone, Marionette, React, TodoListItem, BackboneMixin) {
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

                            <div className="notes-container row">
                                <div className="good-notes columns large-6">
                                    {goodNotes}
                                </div>
                                <div className="bad-notes columns large-6">
                                    {badNotes}
                                </div>
                           </div>

                        )
            }
    });

	return TodoList;
});



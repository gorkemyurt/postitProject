/** @jsx React.DOM */

define([
	'zepto',
	'underscore',
	'backbone',
	'marionette',
	'react',
    'jsx!TodoListItem'
], function ($, _, Backbone, Marionette, React, TodoListItem) {
	'use strict';

    var TodoList = React.createClass({
            render: function () {
                var notes = this.props.todos.map(function (model) {
                    return <TodoListItem model={model} />;
                });

                return <div>{notes}</div>;
            }
    });

	return TodoList;
});



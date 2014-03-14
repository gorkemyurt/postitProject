/** @jsx React.DOM */

define([
	'zepto',
	'underscore',
	'backbone',
	'marionette',
	'react'
], function ($, _, Backbone, Marionette, React) {
	'use strict';
	var TodoListItem = React.createClass({
        render: function () {
            return <li>{this.props.model.get("text")}</li>;
        }
    });

	return TodoListItem;

});




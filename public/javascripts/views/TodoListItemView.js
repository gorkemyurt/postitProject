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
		handleDragEnter : function (){
			$(this.refs.div.getDOMNode()).addClass("drag");
		},
		handleDragExit : function (){
			$(this.refs.div.getDOMNode()).removeClass("drag");
		},
        render: function () {
            return (
            	<div ref="div" className="post-it" onMouseDown={this.handleDragEnter} onMouseUp={this.handleDragExit} onMouseLeave={this.handleDragExit}>
            		<span>{this.props.model.get("text")}</span>
        		</div>
        	);
        }

    });

	return TodoListItem;

});




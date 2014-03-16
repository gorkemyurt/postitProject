/** @jsx React.DOM */

define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'react',
	'jquery-ui'
], function ($, _, Backbone, Marionette, React) {
	'use strict';
	var TodoListItem = React.createClass({

		componentDidMount : function () {
			$(this.refs.div.getDOMNode()).draggable({ containment: $(".main")});
		},
		handleDragEnter : function (){
			$(this.refs.div.getDOMNode()).addClass("drag");
		},
		handleDragExit : function (){
			console.log("hello");
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




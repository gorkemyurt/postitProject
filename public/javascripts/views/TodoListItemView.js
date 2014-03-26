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
			$(this.refs.div.getDOMNode()).removeClass("drag");
		},
		handleEdit : function (){
			console.log($(this.refs.div.getDOMNode()).find(".post-it-textarea"));
			var originalText  = $(this.refs.div.getDOMNode()).find(".post-it-text");
			originalText.hide();
			var textarea = $(this.refs.div.getDOMNode()).find(".post-it-textarea");
			textarea.show();
			textarea.focus();
			textarea.val(this.props.model.get("text"));
			var that = this;
			textarea.focusout(function () {
				originalText.text(textarea.val());
				originalText.show();
				textarea.hide();
				that.props.model.set("text" , textarea.val());
			});
		},

        render: function () {
            return (
            	<div ref="div" className="post-it" onDoubleClick={this.handleEdit} onMouseDown={this.handleDragEnter} onMouseUp={this.handleDragExit} onMouseLeave={this.handleDragExit}>
            		<span className="post-it-text">{this.props.model.get("text")}</span>
            		<textarea className="post-it-textarea"></textarea>
        		</div>
        	);
        }

    });

	return TodoListItem;

});




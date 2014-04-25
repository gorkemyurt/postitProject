/** @jsx React.DOM */

define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'react',
  'jquery-ui',
  'socketio'
], function ($, _, Backbone, Marionette, React, jui, io) {
  'use strict';
  var TodoListItem = React.createClass({

    componentDidMount : function () {
      var that = this;
      var socket = io.connect();
      $(this.refs.div.getDOMNode()).draggable({
        start: function (event){
          //drag started
        },
        drag: function (event, ui){
          that.props.model.set('position', ui.position );
          socket.emit('position', { position : ui.position, id : that.props.model.cid});
        }
      });

      socket.on('position' + that.props.model.cid, function (data){
          $(that.refs.div.getDOMNode()).css({left: data.left})
          $(that.refs.div.getDOMNode()).css({top: data.top})

      });

    },

    handleDragEnter : function () {
      $(this.refs.div.getDOMNode()).addClass("drag");
    },

    handleDragExit : function () {
      $(this.refs.div.getDOMNode()).removeClass("drag");
    },

    handleEdit : function () {
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




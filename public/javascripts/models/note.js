define([
  "zepto",
  "marionette",
  "socketio"
  ], function ($, Marionette, io) {
    'use strict'

    var Note = Backbone.Model.extend({

      defaults: {
        title: '',
        owner: 'gorkem',
        type: 'smile',
        position: { top: 0, left: 0 }
      },

      initialize : function() {
        var that = this;
        this.bind("change:position", this.onPositionChanged)
        var socket = io.connect();
        socket.on('position', function (data){
          console.log(data);
          console.log(that);
        });
      },

      onPositionChanged : function (){
      }

    });

    return Note;
});
define([
  'zepto',
	"marionette"
	], function ($, Marionette) {
    'use strict'

    var Note = Backbone.Model.extend({

      defaults: {
        title : '',
        owner : 'gorkem',
        type : 'smile'
      }



    });

    return Note;
});
define([
  'zepto',
  'underscore',
  'backbone',
  'marionette',
  'Note'
], function ($, _, Backbone, Marionette, Note) {
  'use strict';

  var Notes = Backbone.Collection.extend({

    model : Note

  });

  return Notes;
});
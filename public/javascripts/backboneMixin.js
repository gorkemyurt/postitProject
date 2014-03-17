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
    var BackboneMixin = {
        _backboneForceUpdate: function() {
          this.forceUpdate();
        },
        componentDidMount: function() {
        // Whenever there may be a change in the Backbone data, trigger a reconcile.
        this.getBackboneModels().map(function(model) {
          model.on('add change remove', this._backboneForceUpdate, this);
        }.bind(this));
        },
        componentWillUnmount: function() {
        // Ensure that we clean up any dangling references when the component is destroyed.
        this.getBackboneModels().map(function(model) {
          model.off('add change remove', this._backboneForceUpdate, this);
        }.bind(this));
        }
    };

    return BackboneMixin;
});



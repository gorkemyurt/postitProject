/** @jsx React.DOM */

define([
	'zepto',
	'underscore',
	'backbone',
	'marionette',
	'react',
    'jsx!TodoListItem',
    'backboneMixin'
], function ($, _, Backbone, Marionette, React, TodoListItem,BackboneMixin ) {
	'use strict';
    // var BackboneMixin = {
    //     _backboneForceUpdate: function() {
    //       this.forceUpdate();
    //     },
    //     componentDidMount: function() {
    //     // Whenever there may be a change in the Backbone data, trigger a reconcile.
    //         this.getBackboneModels().map(function(model) {
    //           console.log(model);
    //           model.on('add change remove', this._backboneForceUpdate, this);
    //         }.bind(this));
    //     },
    //     componentWillUnmount: function() {
    //     // Ensure that we clean up any dangling references when the component is destroyed.
    //         this.getBackboneModels().map(function(model) {
    //           model.off('add change remove', this._backboneForceUpdate, this);
    //         }.bind(this));
    //     }
    // };
    var GoodListHeader = React.createClass({
            mixins: [BackboneMixin],
            getBackboneModels: function() {
                console.log(this.props.todos);
                return [this.props.todos];
            },
            handleClick : function (){
                console.log("hellow");
                this.props.todos.add({text:"fdsafsa" , type: "good"})
            },
            render: function () {
                return (
                        <div className="columns small-12 large-6 post-container">
                            <h1 className="center">Good :)
                                <span className="green" onClick={this.handleClick}>  +</span>
                            </h1>
                            <div id="good-container" className="post-container border-right"></div>
                        </div>

                        )
            }
    });

	return GoodListHeader;
});

/** @jsx React.DOM */

define([
	'zepto',
	'underscore',
	'backbone',
	'marionette',
	'react',
    'jsx!TodoListItem',
    'backboneMixin'
], function ($, _, Backbone, Marionette, React, TodoListItem, BackboneMixin) {
	'use strict';

    var BadListHeader = React.createClass({
            mixins: [BackboneMixin],
            getBackboneModels: function() {
                return [this.props.todos];
            },
            handleClick : function (){
                console.log("hellow");
                this.props.todos.add({text:"fdsafsa" , type: "bad"})
            },
            render: function () {
                return (

                        <div className="columns small-12 large-6 post-container">
                            <h1 className="center">Bad :(<span className="red" onClick={this.handleClick}>    +</span></h1>
                            <div id="bad-container" className="post-container border-left"></div>
                        </div>

                        )
            }
    });

	return BadListHeader;
});

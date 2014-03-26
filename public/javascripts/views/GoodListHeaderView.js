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

    var GoodListHeader = React.createClass({
            mixins: [BackboneMixin],
            getBackboneModels: function() {
                console.log(this.props.todos);
                return [this.props.todos];
            },
            handleClick : function (){
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

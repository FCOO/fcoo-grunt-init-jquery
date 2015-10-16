/****************************************************************************
	{%= name %}.js, {%= description %}

	(c) {%= year %}, FCOO

	https://github.com/FCOO/{%= name %}
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";
	
	//Create fcoo-namespace
	window.fcoo = window.fcoo || {};

	//If fcoo.namespace() is defined create a name-space
	var ns = window.fcoo.namespace ? window.fcoo.namespace(''/*Enter the fcoo-namespace here*/) : window.fcoo; 
	//or var ns = window;

	var plugin_count = 1000;

	function {%= class_name %}( $elem, options, plugin_count) {
		this.plugin_count = plugin_count;
		this.options = $.extend({
			//Default options
		}, options || {} );


		//If {%= class_name %} is a extention of class "ParentClass" include the next line 
		//window.ParentClass.call(this, input, options, plugin_count );

	
	}
  
  // expose access to the constructor
  ns.{%= class_name %} = {%= class_name %};


	//{%= jquery_class_name %} as jQuery prototype
	$.fn.{%= jquery_class_name %} = function (options) {
		return this.each(function() {
			if (!$.data(this, "{%= jquery_class_name %}"))
				$.data(this, "{%= jquery_class_name %}", new window.{%= class_name %}(this, options, plugin_count++));
		});
	};


	//Extend the prototype
	ns.{%= class_name %}.prototype = {

		//myMethod
		myMethod: function( /*arg1, arg2*/ ){
		},
		


	};

	//If {%= class_name %} is a extention of class "ParentClass" include the next line 
	//window.{%= class_name %}.prototype = $.extend( {}, window.ParentClass.prototype, window.{%= class_name %}.prototype );


	/******************************************
	Initialize/ready 
	*******************************************/
	$(function() { //"$( function() { ... });" is short for "$(document).ready( function(){...});"

	
	}); //End of initialize/ready
	//******************************************



}(jQuery, this, document));
/****************************************************************************
	test.js, 

	(c) 2015, FCOO

	https://github.com/FCOO/test
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";


	var plugin_count = 1000;

	function Test( $elem, options, plugin_count) {
		this.plugin_count = plugin_count;
		this.options = $.extend({
			//Default options
		}, options || {} );


		//If Test is a extention of class "ParentClass" include the next line 
		//window.ParentClass.call(this, input, options, plugin_count );

	
	}
  
  // expose access to the constructor
  window.Test = Test;


	//test as jQuery prototype
	$.fn.test = function (options) {
		return this.each(function() {
			if (!$.data(this, "test"))
				$.data(this, "test", new window.Test(this, options, plugin_count++));
		});
	};


	//Extend the prototype
	window.Test.prototype = {

		//myMethod
		myMethod: function( arg1, arg2 ){
		},
		


	};

	//If Test is a extention of class "ParentClass" include the next line 
	//window.Test.prototype = $.extend( {}, window.ParentClass.prototype, window.Test.prototype );


	/******************************************
	Initialize/ready 
	*******************************************/
	$(function() { //"$( function() { ... });" is short for "$(document).ready( function(){...});"

	
	}); //End of initialize/ready
	//******************************************



}(jQuery, this, document));
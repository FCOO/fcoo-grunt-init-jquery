/****************************************************************************
	{%= name %}.js, {%= description %}

	(c) {%= year %}, FCOO

	https://github.com/FCOO/{%= name %}
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";

	function {%= class_name %}( options ) {

		this.myMethod = function myMethod(options){
		};

	}
  
  // expose access to the constructor
  window.{%= class_name %} = {%= class_name %};

}(jQuery, this, document));
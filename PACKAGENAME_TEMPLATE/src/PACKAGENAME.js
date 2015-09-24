/****************************************************************************
	PACKAGENAME, Description from README.md

	(c) 2015, Niels Holt

	https://github.com/NielsHolt/PACKAGENAME
	https://github.com/NielsHolt

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";

	function MyClass( options ) {

		this.myMethod = function myMethod(options){
		};

	}
  
  // expose access to the constructor
  window.MyClass = MyClass;

}(jQuery, this, document));
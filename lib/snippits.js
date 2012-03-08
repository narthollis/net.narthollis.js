"use strict";

/**
 * @file
 * 
 * This file contains various code snippets from arround the internet
 * designed to fill in the gaps either with cross-compadibility or
 * just plain old gaps in javascript
 *
 * I will try and annotate snippets with their orignal authors
 */

/**
 * @author Nicholas Steicke <nicholas.steicke@narthollis.net>
 * @website https://narthollis.net/
 */
(function() {
	if (typeof(Element.prototype.addEventListener) != "undefined") return;
	
	Element.prototype.addEventListener = function(type, expression, bubbling) {
		return this.attachEvent('on' + type, expression);
	};
})();

/**
 * TODO: Check this
 * @author
 * @website http://dbj.org/dbj/?p=286
 */
function isF ( f ) {
	try {
		return /^\s*\bfunction\b/.test(f) ;
	} catch (x) {
		return false ;
	}
}

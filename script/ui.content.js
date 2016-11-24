(function (global, factory, undefined) {

	global.Panel.Content = factory;

})('undefined' === typeof (window) ? this : window,
function (options) {

	'use strict';

	var that = Wrapper.call(this, Panel.defaultOptions.content, options.content);

	var contDiv = document.createElement('div');

	that.append(contDiv);

	return that;
});
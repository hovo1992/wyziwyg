(function (global, factory, undefined) {

	global.Panel = factory;

	global.Panel.defaultOptions = {
		panel: {
			tagName: 'panel'
		}
	};

	global.Panel.prototype = global.Wrapper.prototype;

})('undefined' === typeof (window) ? this : window,
function (options) {

	'use strict';

	var that = Wrapper.call(this, Panel.defaultOptions.panel, options.panel);

	that.appendTo(options.container);

	return that;
});
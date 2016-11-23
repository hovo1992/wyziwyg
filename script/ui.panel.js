(function (global, factory, undefined) {

	global.Panel = factory;

	global.Panel.defaultOptions = {
		panel: {
			tagName: 'panel'
		}
	};

	global.Panel.prototype = Object.create(global.Wrapper.prototype);
	global.Panel.prototype.constructor = global.Panel;

})('undefined' === typeof (window) ? this : window,
function (options) {

	'use strict';

	var that = Wrapper.call(this, Panel.defaultOptions.panel, options.panel);

	that.css({ 'background': 'green' });

	that.appendTo(options.container);

	return that;
});
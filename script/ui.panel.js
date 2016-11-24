(function (global, factory, undefined) {

	global.Panel = factory;

	global.Panel.defaultOptions = {
		panel: {
			tagName: 'panel'
		},
		content: {
			tagName: 'content'
		}
	};

	global.Panel.prototype = Object.create(global.Wrapper.prototype);
	global.Panel.prototype.constructor = global.Panel;

})('undefined' === typeof (window) ? this : window,
function (options) {

	'use strict';

	var that = Wrapper.call(this, Panel.defaultOptions.panel, options.panel),
		content = Object.create(Panel.Content.prototype);

	that.css({ 'background': 'green' });

	Object.defineProperties(that, {
		content: {
			value: Panel.Content.call(content, options),
			enumerable: true
		}
	});

	that
		.append(that.content)
		.appendTo(options.container);

	return that;
});
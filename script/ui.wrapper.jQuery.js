(function (global, factory, undefined) {

	global.Wrapper = factory;

})('undefined' === typeof (window) ? this : window,
function (defaultOptions, options) {

	'use strict';

	options = $.extend(defaultOptions, options);

	var that = this;

	that.$element = $(`<${options.tagName}>`);

	that.append = (...elements) => {
		elements.filter((element) => that.$element.append(element.$element || element));

		return that;
	};

	that.appendTo = (element) => {
		that.$element.appendTo(element.$element || element);

		return that;
	};

	that.attr = (json) => {
		that.$element.attr(json);

		return that;
	};

	that.css = (json) => {
		that.$element.css(json);

		return that;
	};

	return that;
});
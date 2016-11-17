(function (global, factory, undefined) {

	global.Wrapper = factory;

})('undefined' === typeof (window) ? this : window,
function (defaultOptions, options) {

	'use strict';

	options = $.extend(defaultOptions, options);

	var that = this;

	that.$element = $(`<${options.tagName}>`);

	that.setOptions = (json) => {
		if (undefined == json.buttonbar) {
			that.$element.attr('class', Panel.Buttonbar.EKeys[json.direction]);
			that.panel.$element.attr('class', json.direction + 'Buttonbar');
		} else {
			that.$element.attr('class', json.buttonbar.direction + 'Buttonbar');
			that.buttonbar.$element.attr('class', Panel.Buttonbar.EKeys[json.buttonbar.direction]);
		}

		return that;
	};

	that.append = (...elements) => {
		elements.filter((element) => that.$element.append(element.$element || element));

		return that;
	};

	that.appendTo = (element) => {
		that.$element.appendTo(element.$element || $(element));
		return that;
	};

	that.attr = (json) => {

		that.$element.attr(json);

		return that;
	};

	that.css = (json) => {
		that.$element.css('background', 'red');

		return that;
	};

	return that;
});
(function (global, factory, undefined) {

	//global.Wrapper.thirdParty = global.ELibraryNames.Prototype;
	global.Wrapper = factory;

})('undefined' === typeof (window) ? this : window,
function (defaultOptions, options) {

	'use strict';

	options = Object.extend(defaultOptions, options);

	var that = this;

	that.$element = document.createElement(options.tagName);

	that.append = (...elements) => ((elements.filter((element) => (that.$element || that).insert(element.$element || element))), that);

	that.appendTo = (element) => ($$(element)[0].insert(that.$element), that);

	that.attr = (json) => ($(that.$element).writeAttribute(json), that);

	that.css = (json) => {
		that.$element.setStyle({ background: 'red' });
		return that;
	};

	return that;
});
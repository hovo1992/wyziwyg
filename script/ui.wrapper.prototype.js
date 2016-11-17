(function (global, factory, undefined) {

	//global.Wrapper.thirdParty = global.ELibraryNames.Prototype;
	global.Wrapper = factory;

})('undefined' === typeof (window) ? this : window,
function (defaultOptions, options) {

	'use strict';

	options = Object.extend(defaultOptions, options);

	var that = this;

	that.$element = document.createElement(options.tagName);

	that.append = (...elements) => 	(elements.filter((element) => (element.$element || element).insert(that.$element)), that);

	//insert

	that.appendTo = (element) => {
		//element.insert(that.$element);
		$$(element)[0].insert(that.$element);

		return that;
	}; //this.insert

	that.attr = (json) => {
		$(that.$element).writeAttribute(json);

		return that;
	}; //writeAttribute

	that.css = (json) => {
		that.$element.setStyle({ background: 'red' });
		return that;
	}; //setStyle

	return that;
});
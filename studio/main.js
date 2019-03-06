/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ChromeProperties = __webpack_require__(1);
	
	var _ChromeProperties2 = _interopRequireDefault(_ChromeProperties);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _ChromeEditor = __webpack_require__(5);
	
	var _ChromeEditor2 = _interopRequireDefault(_ChromeEditor);
	
	var _constants = __webpack_require__(4);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _ChromeTitle = __webpack_require__(6);
	
	var _ChromeTitle2 = _interopRequireDefault(_ChromeTitle);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addPropertiesComponent('chrome pdf', _ChromeProperties2.default, function (entity) {
	  return entity.__entitySet === 'templates' && entity.recipe === 'chrome-pdf';
	});
	
	_jsreportStudio2.default.addApiSpec({
	  template: {
	    chrome: {
	      scale: 1,
	      displayHeaderFooter: false,
	      printBackground: false,
	      landscape: false,
	      pageRanges: '...',
	      format: '...',
	      width: '...',
	      height: '...',
	      marginTop: '...',
	      marginRight: '...',
	      marginBottom: '...',
	      marginLeft: '...',
	      mediaType: 'print|screen'
	    }
	  }
	});
	
	_jsreportStudio2.default.addEditorComponent(Constants.CHROME_TAB_EDITOR, _ChromeEditor2.default);
	_jsreportStudio2.default.addTabTitleComponent(Constants.CHROME_TAB_TITLE, _ChromeTitle2.default);
	_jsreportStudio2.default.entityTreeIconResolvers.push(function (entity) {
	  return entity.__entitySet === 'templates' && entity.recipe === 'chrome-pdf' ? 'fa-file-pdf-o' : null;
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _constants = __webpack_require__(4);
	
	var Constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties(props) {
	    _classCallCheck(this, Properties);
	
	    var _this = _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).call(this, props));
	
	    _this.applyDefaultsToEntity = _this.applyDefaultsToEntity.bind(_this);
	    _this.changeChrome = _this.changeChrome.bind(_this);
	    return _this;
	  }
	
	  _createClass(Properties, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.applyDefaultsToEntity(this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // when component changes because another template is created
	      if (this.props.entity._id !== nextProps.entity._id) {
	        this.applyDefaultsToEntity(nextProps);
	      }
	    }
	  }, {
	    key: 'inform',
	    value: function inform() {
	      if (_jsreportStudio2.default.getSettingValueByKey('chrome-header-informed', false) === true) {
	        return;
	      }
	
	      _jsreportStudio2.default.setSetting('chrome-header-informed', true);
	
	      _jsreportStudio2.default.openModal(function () {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'Here you can define chrome native headers/footers. Make sure "display header/footer" is selected and use margin to prepare the space for the header.',
	          _react2.default.createElement('br', null),
	          'Please note chrome currently prints headers with smaller font size and you need to style text explicitly to workaround it.',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'b',
	            null,
	            'The chrome native implementation is also very limited and we recommend to use jsreport',
	            _react2.default.createElement(
	              'a',
	              { href: 'https://jsreport.net/learn/pdf-utils', target: '_blank' },
	              ' pdf utils extension'
	            ),
	            ' in more complex use cases.'
	          )
	        );
	      });
	    }
	  }, {
	    key: 'openHeaderFooter',
	    value: function openHeaderFooter(type) {
	      this.inform();
	
	      _jsreportStudio2.default.openTab({
	        key: this.props.entity._id + 'chrome' + type,
	        _id: this.props.entity._id,
	        headerOrFooter: type,
	        editorComponentKey: Constants.CHROME_TAB_EDITOR,
	        titleComponentKey: Constants.CHROME_TAB_TITLE
	      });
	    }
	  }, {
	    key: 'applyDefaultsToEntity',
	    value: function applyDefaultsToEntity(props) {
	      var entity = props.entity;
	
	      var entityNeedsDefault = false;
	
	      if (entity.__isNew && (entity.chrome == null || entity.chrome.printBackground == null)) {
	        entityNeedsDefault = true;
	      }
	
	      if (entityNeedsDefault) {
	        this.changeChrome(props, {
	          printBackground: true
	        });
	      }
	    }
	  }, {
	    key: 'changeChrome',
	    value: function changeChrome(props, change) {
	      var entity = props.entity,
	          onChange = props.onChange;
	
	      var chrome = entity.chrome || {};
	
	      onChange(_extends({}, entity, {
	        chrome: _extends({}, chrome, change)
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var entity = this.props.entity;
	
	      var chrome = entity.chrome || {};
	      var changeChrome = this.changeChrome;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'scale'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '1', value: chrome.scale || '',
	            onChange: function onChange(v) {
	              var scaleValue = v.target.value;
	
	              if (scaleValue.trim() === '') {
	                scaleValue = null;
	              }
	
	              changeChrome(_this2.props, { scale: scaleValue });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'print background'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: chrome.printBackground === true,
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { printBackground: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'landscape'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: chrome.landscape === true,
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { landscape: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'pageRanges'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '1-5, 8, 11-13', value: chrome.pageRanges || '',
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { pageRanges: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'format'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: 'Letter', value: chrome.format || '',
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { format: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'width'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.width || '',
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { width: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'height'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.height || '',
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { height: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'margin top'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.marginTop || '',
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { marginTop: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'margin right'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.marginRight || '',
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { marginRight: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'margin bottom'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.marginBottom || '',
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { marginBottom: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'margin left'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.marginLeft || '',
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { marginLeft: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'display header/footer'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: chrome.displayHeaderFooter === true,
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { displayHeaderFooter: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'header'
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                return _this2.openHeaderFooter('header');
	              } },
	            'open in tab...'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'footer'
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                return _this2.openHeaderFooter('footer');
	              } },
	            'open in tab...'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'media type'
	          ),
	          _react2.default.createElement(
	            'select',
	            { value: chrome.mediaType || 'print', onChange: function onChange(v) {
	                return changeChrome(_this2.props, { mediaType: v.target.value });
	              } },
	            _react2.default.createElement(
	              'option',
	              { key: 'print', value: 'print' },
	              'print'
	            ),
	            _react2.default.createElement(
	              'option',
	              { key: 'screen', value: 'screen' },
	              'screen'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'wait for network iddle'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: chrome.waitForNetworkIddle === true,
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { waitForNetworkIddle: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            { title: 'window.JSREPORT_READY_TO_START=true;' },
	            'wait for printing trigger'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', title: 'window.JSREPORT_READY_TO_START=true;', checked: chrome.waitForJS === true,
	            onChange: function onChange(v) {
	              return changeChrome(_this2.props, { waitForJS: v.target.checked });
	            } })
	        )
	      );
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CHROME_TAB_TITLE = exports.CHROME_TAB_TITLE = 'CHROME_TAB_TITLE';
	var CHROME_TAB_EDITOR = exports.CHROME_TAB_EDITOR = 'CHROME_TAB_EDITOR';

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChromeEditor = function (_Component) {
	  _inherits(ChromeEditor, _Component);
	
	  function ChromeEditor() {
	    _classCallCheck(this, ChromeEditor);
	
	    return _possibleConstructorReturn(this, (ChromeEditor.__proto__ || Object.getPrototypeOf(ChromeEditor)).apply(this, arguments));
	  }
	
	  _createClass(ChromeEditor, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          entity = _props.entity,
	          _onUpdate = _props.onUpdate,
	          tab = _props.tab;
	
	
	      return _react2.default.createElement(_jsreportStudio.TextEditor, {
	        name: entity._id + '_chrome' + tab.headerOrFooter,
	        mode: 'handlebars',
	        value: entity.chrome ? entity.chrome[tab.headerOrFooter + 'Template'] : '',
	        onUpdate: function onUpdate(v) {
	          return _onUpdate(Object.assign({}, entity, { chrome: Object.assign({}, entity.chrome, _defineProperty({}, tab.headerOrFooter + 'Template', v)) }));
	        }
	      });
	    }
	  }]);
	
	  return ChromeEditor;
	}(_react.Component);
	
	exports.default = ChromeEditor;
	
	
	ChromeEditor.propTypes = {
	  entity: _react2.default.PropTypes.object.isRequired,
	  tab: _react2.default.PropTypes.object.isRequired,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'span',
	    null,
	    props.entity.name + ' ' + props.tab.headerOrFooter + (props.entity.__isDirty ? '*' : '')
	  );
	};

/***/ }
/******/ ]);
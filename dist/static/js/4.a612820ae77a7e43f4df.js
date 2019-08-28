(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar.0b221f2.jpg";

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5954443c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5954443c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5954443c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5954443c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/home/index.vue?vue&type=template&id=5954443c&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "home-page" }, [
    _c("img", { attrs: { src: _vm.poster, alt: "", srcset: "" } })
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/home/index.vue?vue&type=template&id=5954443c&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(6);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(26);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(27);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/qrcode/lib/browser.js
var browser = __webpack_require__(28);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./src/index.js






var src_Maker =
/*#__PURE__*/
function () {
  function Maker(options) {
    classCallCheck_default()(this, Maker);

    try {
      var dom = document.createElement('canvas');
      dom.width = options.width || 0;
      dom.height = options.height || 0;
      dom.style.position = 'fixed';
      dom.style.left = '15000px';
      dom.style.bottom = '-15000px';
      this.canvas = document.body.appendChild(dom);
    } catch (error) {
      console.error(error);
    }

    this.ctx = this.canvas.getContext('2d');

    if (options.backgroundColor) {
      this.putFillRect({
        background: options.backgroundColor,
        width: options.width,
        height: options.height
      });
    }
  }

  createClass_default()(Maker, [{
    key: "putFillRect",
    value: function putFillRect(_ref) {
      var _ref$background = _ref.background,
          background = _ref$background === void 0 ? '#fff' : _ref$background,
          _ref$width = _ref.width,
          width = _ref$width === void 0 ? 0 : _ref$width,
          _ref$height = _ref.height,
          height = _ref$height === void 0 ? 0 : _ref$height,
          _ref$x = _ref.x,
          x = _ref$x === void 0 ? 0 : _ref$x,
          _ref$y = _ref.y,
          y = _ref$y === void 0 ? 0 : _ref$y,
          _ref$rotate = _ref.rotate,
          rotate = _ref$rotate === void 0 ? 0 : _ref$rotate;
      this.ctx.save();
      this.ctx.fillStyle = background;

      if (rotate) {
        var centerX = x + width / 2;
        var centerY = y + height / 2; // 把图层坐标原点设置在中心点上

        this.ctx.translate(centerX, centerY); // 愉快地旋转

        this.ctx.rotate(rotate * Math.PI / 180); // 图层坐标原点回到坐标原点

        this.ctx.translate(-centerX, -centerY); // 将坐标原点转移到目的地

        this.ctx.translate(x, y); // 放毒

        this.ctx.rect(0, 0, width, height);
      } else {
        // 将坐标原点转移到目的地
        this.ctx.translate(x, y); // 放毒

        this.ctx.fillRect(0, 0, width, height); // 把坐标原点放回去
      }

      this.ctx.translate(-x, -y); // 回滚,让ctx对象回到图层上

      this.ctx.restore();
    }
  }, {
    key: "putText",
    value: function putText(_ref2) {
      var _ref2$text = _ref2.text,
          text = _ref2$text === void 0 ? '' : _ref2$text,
          _ref2$x = _ref2.x,
          x = _ref2$x === void 0 ? 0 : _ref2$x,
          _ref2$y = _ref2.y,
          y = _ref2$y === void 0 ? 0 : _ref2$y,
          _ref2$fontSize = _ref2.fontSize,
          fontSize = _ref2$fontSize === void 0 ? 12 : _ref2$fontSize,
          _ref2$rotate = _ref2.rotate,
          rotate = _ref2$rotate === void 0 ? 0 : _ref2$rotate,
          _ref2$textBaseline = _ref2.textBaseline,
          textBaseline = _ref2$textBaseline === void 0 ? 'middle' : _ref2$textBaseline,
          _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? '#000' : _ref2$color,
          _ref2$fontColor = _ref2.fontColor,
          fontColor = _ref2$fontColor === void 0 ? color : _ref2$fontColor,
          _ref2$align = _ref2.align,
          align = _ref2$align === void 0 ? 'left' : _ref2$align,
          _ref2$fontWeight = _ref2.fontWeight,
          fontWeight = _ref2$fontWeight === void 0 ? 'normal' : _ref2$fontWeight,
          _ref2$fontFamily = _ref2.fontFamily,
          fontFamily = _ref2$fontFamily === void 0 ? 'sans-serif' : _ref2$fontFamily;
      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(rotate * Math.PI / 180 || 0);
      this.ctx.font = "".concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
      this.ctx.textAlign = align;
      this.ctx.textBaseline = textBaseline;
      this.ctx.fillStyle = fontColor || '#000';
      this.ctx.fillText(text, 0, fontSize / 2 + 2);
      this.ctx.translate(-x, -y);
      this.ctx.font = "".concat(12, "px sans-serif");
      this.ctx.fillStyle = '#000';
      this.ctx.restore();
      return Promise.resolve();
    }
  }, {
    key: "putImg",
    value: function () {
      var _putImg = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref3) {
        var _ref3$img, img, _ref3$x, x, _ref3$y, y, _ref3$width, width, _ref3$height, height, _ref3$rotate, rotate, imgDom, w, h, centerX, centerY;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref3$img = _ref3.img, img = _ref3$img === void 0 ? '' : _ref3$img, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y, _ref3$width = _ref3.width, width = _ref3$width === void 0 ? 0 : _ref3$width, _ref3$height = _ref3.height, height = _ref3$height === void 0 ? 0 : _ref3$height, _ref3$rotate = _ref3.rotate, rotate = _ref3$rotate === void 0 ? 0 : _ref3$rotate;
                // 搞事之前,先保存
                this.ctx.save();
                imgDom = null;
                w = width;
                h = height;

                if (img) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new Error('请传入图片路径或者dom对象')));

              case 7:
                if (!(typeof img === 'string')) {
                  _context.next = 13;
                  break;
                }

                _context.next = 10;
                return this.loadImg(img);

              case 10:
                imgDom = _context.sent;
                _context.next = 14;
                break;

              case 13:
                imgDom = img;

              case 14:
                this.ctx.save();

                if (rotate) {
                  centerX = x + w / 2;
                  centerY = y + h / 2; // 把图层坐标原点设置在中心点上

                  this.ctx.translate(centerX, centerY); // 愉快地旋转

                  this.ctx.rotate(rotate * Math.PI / 180); // 图层坐标原点回到坐标原点

                  this.ctx.translate(-centerX, -centerY); // 将坐标原点转移到目的地

                  this.ctx.translate(x, y); // 放毒

                  this.ctx.drawImage(imgDom, 0, 0, w, h);
                } else {
                  // 将坐标原点转移到目的地
                  this.ctx.translate(x, y); // 放毒

                  this.ctx.drawImage(imgDom, 0, 0, w, h); // 把坐标原点放回去
                }

                this.ctx.translate(-x, -y); // 回滚,让ctx对象回到图层上

                this.ctx.restore(); // 下一步

                return _context.abrupt("return", Promise.resolve());

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function putImg(_x) {
        return _putImg.apply(this, arguments);
      }

      return putImg;
    }() // 放置圆形图片

  }, {
    key: "putCircularImg",
    value: function () {
      var _putCircularImg = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(_ref4) {
        var _ref4$img, img, _ref4$x, x, _ref4$y, y, _ref4$width, width, _ref4$height, height, _ref4$rotate, rotate, imgDom, w, h, centerX, centerY, round, _round;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref4$img = _ref4.img, img = _ref4$img === void 0 ? '' : _ref4$img, _ref4$x = _ref4.x, x = _ref4$x === void 0 ? 0 : _ref4$x, _ref4$y = _ref4.y, y = _ref4$y === void 0 ? 0 : _ref4$y, _ref4$width = _ref4.width, width = _ref4$width === void 0 ? 0 : _ref4$width, _ref4$height = _ref4.height, height = _ref4$height === void 0 ? 0 : _ref4$height, _ref4$rotate = _ref4.rotate, rotate = _ref4$rotate === void 0 ? 0 : _ref4$rotate;
                // 搞事之前,先保存
                this.ctx.save();
                imgDom = null;
                w = width;
                h = height;

                if (img) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", Promise.reject(new Error('请传入图片路径或者dom对象')));

              case 7:
                if (!(typeof img === 'string')) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 10;
                return this.loadImg(img);

              case 10:
                imgDom = _context2.sent;
                _context2.next = 14;
                break;

              case 13:
                imgDom = img;

              case 14:
                this.ctx.save();

                if (rotate) {
                  centerX = x + w / 2;
                  centerY = y + h / 2; // 把图层坐标原点设置在中心点上

                  this.ctx.translate(centerX, centerY); // 愉快地旋转

                  this.ctx.rotate(rotate * Math.PI / 180); // 图层坐标原点回到坐标原点

                  this.ctx.translate(-centerX, -centerY); // 将坐标原点转移到目的地

                  this.ctx.translate(x, y);
                  this.ctx.beginPath();
                  round = w > h ? h / 2 : w / 2;
                  this.ctx.arc(round, round, round, 0, 2 * Math.PI);
                  this.ctx.clip(); // 放毒

                  this.ctx.drawImage(imgDom, 0, 0, w, h);
                } else {
                  // 将坐标原点转移到目的地
                  this.ctx.translate(x, y);
                  this.ctx.beginPath();
                  _round = w > h ? h / 2 : w / 2;
                  this.ctx.arc(_round, _round, _round, 0, 2 * Math.PI, false);
                  this.ctx.stroke();
                  this.ctx.clip(); // 剪切图片
                  // 放毒

                  this.ctx.drawImage(imgDom, 0, 0, w, h);
                }

                this.ctx.translate(-x, -y); // 回滚,让this.ctx对象回到图层上

                this.ctx.restore(); // 下一步

                return _context2.abrupt("return", Promise.resolve());

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function putCircularImg(_x2) {
        return _putCircularImg.apply(this, arguments);
      }

      return putCircularImg;
    }()
  }, {
    key: "putQrcode",
    value: function () {
      var _putQrcode = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(_ref5) {
        var _ref5$text, text, _ref5$width, width, _ref5$height, height, _ref5$margin, margin, _ref5$errorCorrection, errorCorrectionLevel, _ref5$x, x, _ref5$y, y, _ref5$rotate, rotate, _ref5$logo, logo, _ref5$logoWidth, logoWidth, _ref5$logoHeight, logoHeight, qrcode;

        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref5$text = _ref5.text, text = _ref5$text === void 0 ? '' : _ref5$text, _ref5$width = _ref5.width, width = _ref5$width === void 0 ? 200 : _ref5$width, _ref5$height = _ref5.height, height = _ref5$height === void 0 ? width : _ref5$height, _ref5$margin = _ref5.margin, margin = _ref5$margin === void 0 ? 0 : _ref5$margin, _ref5$errorCorrection = _ref5.errorCorrectionLevel, errorCorrectionLevel = _ref5$errorCorrection === void 0 ? 'H' : _ref5$errorCorrection, _ref5$x = _ref5.x, x = _ref5$x === void 0 ? 0 : _ref5$x, _ref5$y = _ref5.y, y = _ref5$y === void 0 ? 0 : _ref5$y, _ref5$rotate = _ref5.rotate, rotate = _ref5$rotate === void 0 ? 0 : _ref5$rotate, _ref5$logo = _ref5.logo, logo = _ref5$logo === void 0 ? '' : _ref5$logo, _ref5$logoWidth = _ref5.logoWidth, logoWidth = _ref5$logoWidth === void 0 ? width / 3 : _ref5$logoWidth, _ref5$logoHeight = _ref5.logoHeight, logoHeight = _ref5$logoHeight === void 0 ? logoWidth : _ref5$logoHeight;

                if (text) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new Error('请输入文案')));

              case 3:
                _context3.next = 5;
                return browser_default.a.toDataURL(text, {
                  margin: margin,
                  errorCorrectionLevel: errorCorrectionLevel,
                  width: width
                });

              case 5:
                qrcode = _context3.sent;
                _context3.next = 8;
                return this.putImg({
                  img: qrcode,
                  width: width,
                  height: height,
                  x: x,
                  y: y,
                  rotate: rotate
                });

              case 8:
                if (!logo) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 11;
                return this.putImg({
                  img: logo,
                  width: logoWidth,
                  height: logoHeight,
                  x: x + (width - logoWidth) / 2,
                  y: y + (height - logoHeight) / 2,
                  rotate: rotate
                });

              case 11:
                return _context3.abrupt("return", Promise.resolve());

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function putQrcode(_x3) {
        return _putQrcode.apply(this, arguments);
      }

      return putQrcode;
    }()
    /**
     * 获取最终图片
     *
     * @returns base64
     * @memberof Maker
     */

  }, {
    key: "canvasToDataUrl",
    value: function canvasToDataUrl() {
      var _this = this;

      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'image/jpeg';
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
      return new Promise(function (resolve) {
        resolve(_this.canvas.toDataURL(type, value));
      });
    }
    /**
     *将路径的图片读取为dom
    *
    * @param {*} url
    * @returns
    * @memberof Maker
    */

  }, {
    key: "loadImg",
    value: function loadImg(url) {
      return new Promise(function (resolve, reject) {
        var img = new Image();

        img.onload = function () {
          resolve(img);
        };

        img.onerror = function () {
          reject(new Error('图片下载失败'));
        };

        img.src = url;
      });
    }
  }]);

  return Maker;
}();

/* harmony default export */ var src = (src_Maker);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/views/home/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//

/* harmony default export */ var homevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      poster: ''
    };
  },
  methods: {},
  created: function () {
    var _created = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var maker;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              maker = new src({
                width: 370,
                height: 500,
                backgroundColor: '#fff'
              });
              _context.next = 3;
              return maker.putText({
                text: '23333',
                x: 100,
                y: 100,
                rotate: 45
              });

            case 3:
              _context.next = 5;
              return maker.putText({
                text: '23333',
                x: 200,
                y: 120,
                rotate: 90,
                fontSize: 30,
                color: '#00ff00'
              });

            case 5:
              _context.next = 7;
              return maker.putCircularImg({
                img: __webpack_require__(20),
                x: 10,
                y: 10,
                width: 100,
                height: 100,
                rotate: 90
              });

            case 7:
              _context.next = 9;
              return maker.putImg({
                img: __webpack_require__(20),
                x: 110,
                y: 10,
                width: 100,
                height: 100,
                rotate: 90
              });

            case 9:
              _context.next = 11;
              return maker.putQrcode({
                text: 'http://www.baidu.com',
                x: 10,
                y: 200,
                logo: __webpack_require__(20),
                width: 200,
                height: 200
              });

            case 11:
              _context.next = 13;
              return maker.canvasToDataUrl();

            case 13:
              this.poster = _context.sent;

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }()
});
// CONCATENATED MODULE: ./src/views/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/home/index.vue?vue&type=style&index=0&id=5954443c&lang=scss&scoped=true&
var homevue_type_style_index_0_id_5954443c_lang_scss_scoped_true_ = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./src/views/home/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5954443c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/home/index.vue"
/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
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
  /**
   * 放一个矩形
   *
   * @param {*} { background = '#fff', width = 0, height = 0, x = 0, y = 0, rotate = 0 }
   * @returns
   * @memberof Maker
   */


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
      return Promise.resolve();
    }
    /**
     * 放一条线
     *
     * @param {*} { width = 1, lineWidth = width, color = '#000', start = { x: 0, y: 0 }, end = null }
     * @returns
     * @memberof Maker
     */

  }, {
    key: "putLine",
    value: function putLine(_ref2) {
      var _ref2$width = _ref2.width,
          width = _ref2$width === void 0 ? 1 : _ref2$width,
          _ref2$lineWidth = _ref2.lineWidth,
          lineWidth = _ref2$lineWidth === void 0 ? width : _ref2$lineWidth,
          _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? '#000' : _ref2$color,
          _ref2$start = _ref2.start,
          start = _ref2$start === void 0 ? {
        x: 0,
        y: 0
      } : _ref2$start,
          _ref2$end = _ref2.end,
          end = _ref2$end === void 0 ? null : _ref2$end;
      if (!end) return Promise.reject(new Error('请设置终点'));
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.lineWidth = lineWidth;
      this.ctx.strokeStyle = color; // 红色路径

      this.ctx.moveTo(start.x, start.y);
      this.ctx.lineTo(end.x, end.y);
      this.ctx.stroke();
      this.ctx.restore();
    }
    /**
     * 放一个多边形
     *
     * @param {*} { background = '', borderWidth = 0, borderColor = '', paths = [] }
     * @returns
     * @memberof Maker
     */

  }, {
    key: "putPolygon",
    value: function putPolygon(_ref3) {
      var _ref3$background = _ref3.background,
          background = _ref3$background === void 0 ? '' : _ref3$background,
          _ref3$borderWidth = _ref3.borderWidth,
          borderWidth = _ref3$borderWidth === void 0 ? 0 : _ref3$borderWidth,
          _ref3$borderColor = _ref3.borderColor,
          borderColor = _ref3$borderColor === void 0 ? '' : _ref3$borderColor,
          _ref3$paths = _ref3.paths,
          paths = _ref3$paths === void 0 ? [] : _ref3$paths;
      this.ctx.save();
      this.ctx.beginPath();
      borderWidth && (this.ctx.lineWidth = borderWidth);
      borderColor && (this.ctx.strokeStyle = borderColor);
      if (paths.length <= 2) return Promise.reject(new Error('请设置至少3个端点'));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = paths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var path = _step.value;
          this.ctx.lineTo(path.x, path.y);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.ctx.closePath();

      if (background) {
        this.ctx.fillStyle = background;
        this.ctx.fill();
      }

      borderColor && this.ctx.stroke();
      this.ctx.restore();
      return Promise.resolve();
    }
    /**
    * 放文字
    *
    * @param {*} { text = '', x = 0, y = 0, fontSize = 12, rotate = 0, textBaseline = 'middle', color = '#000', fontColor = color, align = 'left', fontWeight = 'normal', fontFamily = 'sans-serif' }
    * @returns
    * @memberof Maker
    */

  }, {
    key: "putText",
    value: function putText(_ref4) {
      var _ref4$text = _ref4.text,
          text = _ref4$text === void 0 ? '' : _ref4$text,
          _ref4$x = _ref4.x,
          x = _ref4$x === void 0 ? 0 : _ref4$x,
          _ref4$y = _ref4.y,
          y = _ref4$y === void 0 ? 0 : _ref4$y,
          _ref4$fontSize = _ref4.fontSize,
          fontSize = _ref4$fontSize === void 0 ? 12 : _ref4$fontSize,
          _ref4$rotate = _ref4.rotate,
          rotate = _ref4$rotate === void 0 ? 0 : _ref4$rotate,
          _ref4$textBaseline = _ref4.textBaseline,
          textBaseline = _ref4$textBaseline === void 0 ? 'middle' : _ref4$textBaseline,
          _ref4$color = _ref4.color,
          color = _ref4$color === void 0 ? '#000' : _ref4$color,
          _ref4$fontColor = _ref4.fontColor,
          fontColor = _ref4$fontColor === void 0 ? color : _ref4$fontColor,
          _ref4$align = _ref4.align,
          align = _ref4$align === void 0 ? 'left' : _ref4$align,
          _ref4$fontWeight = _ref4.fontWeight,
          fontWeight = _ref4$fontWeight === void 0 ? 'normal' : _ref4$fontWeight,
          _ref4$fontFamily = _ref4.fontFamily,
          fontFamily = _ref4$fontFamily === void 0 ? 'sans-serif' : _ref4$fontFamily;
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
    /**
     * 放文段, 可换行
     *
     * @param {*} { text = '', x = 0, y = 0, fontSize = 12, textBaseline = 'middle', color = '#000', width = 0, fontColor = color, align = 'left', fontWeight = 'normal', fontFamily = 'sans-serif' }
     * @memberof Maker
     */

  }, {
    key: "putParagraph",
    value: function () {
      var _putParagraph = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref5) {
        var _ref5$text, text, _ref5$x, x, _ref5$y, y, _ref5$fontSize, fontSize, _ref5$textBaseline, textBaseline, _ref5$lineHeight, lineHeight, _ref5$color, color, _ref5$width, width, _ref5$fontColor, fontColor, _ref5$align, align, _ref5$fontWeight, fontWeight, _ref5$fontFamily, fontFamily, tempStr, line, i;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref5$text = _ref5.text, text = _ref5$text === void 0 ? '' : _ref5$text, _ref5$x = _ref5.x, x = _ref5$x === void 0 ? 0 : _ref5$x, _ref5$y = _ref5.y, y = _ref5$y === void 0 ? 0 : _ref5$y, _ref5$fontSize = _ref5.fontSize, fontSize = _ref5$fontSize === void 0 ? 12 : _ref5$fontSize, _ref5$textBaseline = _ref5.textBaseline, textBaseline = _ref5$textBaseline === void 0 ? 'middle' : _ref5$textBaseline, _ref5$lineHeight = _ref5.lineHeight, lineHeight = _ref5$lineHeight === void 0 ? 1.2 : _ref5$lineHeight, _ref5$color = _ref5.color, color = _ref5$color === void 0 ? '#000' : _ref5$color, _ref5$width = _ref5.width, width = _ref5$width === void 0 ? 200 : _ref5$width, _ref5$fontColor = _ref5.fontColor, fontColor = _ref5$fontColor === void 0 ? color : _ref5$fontColor, _ref5$align = _ref5.align, align = _ref5$align === void 0 ? 'left' : _ref5$align, _ref5$fontWeight = _ref5.fontWeight, fontWeight = _ref5$fontWeight === void 0 ? 'normal' : _ref5$fontWeight, _ref5$fontFamily = _ref5.fontFamily, fontFamily = _ref5$fontFamily === void 0 ? 'sans-serif' : _ref5$fontFamily;

                if (text) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", Promise.reject(new Error('请输入文段')));

              case 3:
                text = text.replace(/↵/g, '|');
                text = text.replace(/\n/g, '|');
                text += '|';
                tempStr = '';
                this.ctx.font = "".concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
                line = 0;
                i = 0;

              case 10:
                if (!(i < text.length)) {
                  _context.next = 22;
                  break;
                }

                if (!(text[i] !== '|' && this.ctx.measureText(tempStr).width <= width)) {
                  _context.next = 15;
                  break;
                }

                tempStr += text[i] === '|' ? '' : text[i];
                _context.next = 19;
                break;

              case 15:
                _context.next = 17;
                return this.putText({
                  text: tempStr,
                  x: x,
                  y: y + (fontSize * lineHeight + 4) * line,
                  fontSize: fontSize,
                  textBaseline: textBaseline,
                  color: color,
                  fontColor: fontColor,
                  align: align,
                  fontFamily: fontFamily,
                  fontWeight: fontWeight
                });

              case 17:
                line++;
                tempStr = text[i] === '|' ? '' : text[i];

              case 19:
                i++;
                _context.next = 10;
                break;

              case 22:
                return _context.abrupt("return", Promise.resolve());

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function putParagraph(_x) {
        return _putParagraph.apply(this, arguments);
      }

      return putParagraph;
    }()
    /**
     * 放图片
     *
     * @param {*} { img = '', x = 0, y = 0, width = 0, height = 0, rotate = 0 }
     * @returns
     * @memberof Maker
     */

  }, {
    key: "putImg",
    value: function () {
      var _putImg = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(_ref6) {
        var _ref6$img, img, _ref6$x, x, _ref6$y, y, _ref6$width, width, _ref6$height, height, _ref6$rotate, rotate, imgDom, w, h, centerX, centerY;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref6$img = _ref6.img, img = _ref6$img === void 0 ? '' : _ref6$img, _ref6$x = _ref6.x, x = _ref6$x === void 0 ? 0 : _ref6$x, _ref6$y = _ref6.y, y = _ref6$y === void 0 ? 0 : _ref6$y, _ref6$width = _ref6.width, width = _ref6$width === void 0 ? 0 : _ref6$width, _ref6$height = _ref6.height, height = _ref6$height === void 0 ? 0 : _ref6$height, _ref6$rotate = _ref6.rotate, rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate;
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

                  this.ctx.translate(x, y); // 放毒

                  this.ctx.drawImage(imgDom, 0, 0, w, h);
                } else {
                  // 将坐标原点转移到目的地
                  this.ctx.translate(x, y); // 放毒

                  this.ctx.drawImage(imgDom, 0, 0, w, h); // 把坐标原点放回去
                }

                this.ctx.translate(-x, -y); // 回滚,让ctx对象回到图层上

                this.ctx.restore(); // 下一步

                return _context2.abrupt("return", Promise.resolve());

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function putImg(_x2) {
        return _putImg.apply(this, arguments);
      }

      return putImg;
    }() // 放置圆形图片

    /**
     * 放圆形图片
     *
     * @param {*} { img = '', x = 0, y = 0, width = 0, height = 0, rotate = 0 }
     * @returns
     * @memberof Maker
     */

  }, {
    key: "putCircularImg",
    value: function () {
      var _putCircularImg = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(_ref7) {
        var _ref7$img, img, _ref7$x, x, _ref7$y, y, _ref7$width, width, _ref7$height, height, _ref7$rotate, rotate, imgDom, w, h, centerX, centerY, round, _round;

        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref7$img = _ref7.img, img = _ref7$img === void 0 ? '' : _ref7$img, _ref7$x = _ref7.x, x = _ref7$x === void 0 ? 0 : _ref7$x, _ref7$y = _ref7.y, y = _ref7$y === void 0 ? 0 : _ref7$y, _ref7$width = _ref7.width, width = _ref7$width === void 0 ? 0 : _ref7$width, _ref7$height = _ref7.height, height = _ref7$height === void 0 ? 0 : _ref7$height, _ref7$rotate = _ref7.rotate, rotate = _ref7$rotate === void 0 ? 0 : _ref7$rotate;
                // 搞事之前,先保存
                this.ctx.save();
                imgDom = null;
                w = width;
                h = height;

                if (img) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", Promise.reject(new Error('请传入图片路径或者dom对象')));

              case 7:
                if (!(typeof img === 'string')) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 10;
                return this.loadImg(img);

              case 10:
                imgDom = _context3.sent;
                _context3.next = 14;
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

                return _context3.abrupt("return", Promise.resolve());

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function putCircularImg(_x3) {
        return _putCircularImg.apply(this, arguments);
      }

      return putCircularImg;
    }()
    /**
     * 放二维码
     *
     * @param {*} { text = '', width = 200, height = width, margin = 0, errorCorrectionLevel = 'H', x = 0, y = 0, rotate = 0, logo = '', logoWidth = width / 3, logoHeight = logoWidth }
     * @returns
     * @memberof Maker
     */

  }, {
    key: "putQrcode",
    value: function () {
      var _putQrcode = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(_ref8) {
        var _ref8$text, text, _ref8$width, width, _ref8$height, height, _ref8$margin, margin, _ref8$errorCorrection, errorCorrectionLevel, _ref8$x, x, _ref8$y, y, _ref8$rotate, rotate, _ref8$logo, logo, _ref8$logoWidth, logoWidth, _ref8$logoHeight, logoHeight, qrcode;

        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref8$text = _ref8.text, text = _ref8$text === void 0 ? '' : _ref8$text, _ref8$width = _ref8.width, width = _ref8$width === void 0 ? 200 : _ref8$width, _ref8$height = _ref8.height, height = _ref8$height === void 0 ? width : _ref8$height, _ref8$margin = _ref8.margin, margin = _ref8$margin === void 0 ? 0 : _ref8$margin, _ref8$errorCorrection = _ref8.errorCorrectionLevel, errorCorrectionLevel = _ref8$errorCorrection === void 0 ? 'H' : _ref8$errorCorrection, _ref8$x = _ref8.x, x = _ref8$x === void 0 ? 0 : _ref8$x, _ref8$y = _ref8.y, y = _ref8$y === void 0 ? 0 : _ref8$y, _ref8$rotate = _ref8.rotate, rotate = _ref8$rotate === void 0 ? 0 : _ref8$rotate, _ref8$logo = _ref8.logo, logo = _ref8$logo === void 0 ? '' : _ref8$logo, _ref8$logoWidth = _ref8.logoWidth, logoWidth = _ref8$logoWidth === void 0 ? width / 3 : _ref8$logoWidth, _ref8$logoHeight = _ref8.logoHeight, logoHeight = _ref8$logoHeight === void 0 ? logoWidth : _ref8$logoHeight;

                if (text) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", Promise.reject(new Error('请输入文案')));

              case 3:
                _context4.next = 5;
                return browser_default.a.toDataURL(text, {
                  margin: margin,
                  errorCorrectionLevel: errorCorrectionLevel,
                  width: width
                });

              case 5:
                qrcode = _context4.sent;
                _context4.next = 8;
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
                  _context4.next = 11;
                  break;
                }

                _context4.next = 11;
                return this.putImg({
                  img: logo,
                  width: logoWidth,
                  height: logoHeight,
                  x: x + (width - logoWidth) / 2,
                  y: y + (height - logoHeight) / 2,
                  rotate: rotate
                });

              case 11:
                return _context4.abrupt("return", Promise.resolve());

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function putQrcode(_x4) {
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
  }, {
    key: "getContext",
    value: function getContext() {
      return this.ctx;
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      return this.canvas;
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
                width: 750,
                height: 1000,
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
              return maker.putParagraph({
                text: '君不见，黄河之水天上来，奔流到海不复回。↵君不见，高堂明镜悲白发，朝如青丝暮成雪。↵人生得意须尽欢，莫使金樽空对月。↵天生我材必有用，千金散尽还复来。↵烹羊宰牛且为乐，会须一饮三百杯。↵岑夫子，丹丘生，将进酒，杯莫停。↵与君歌一曲，请君为我倾耳听。↵钟鼓馔玉不足贵，但愿长醉不愿醒。↵古来圣贤皆寂寞，惟有饮者留其名。↵陈王昔时宴平乐，斗酒十千恣欢谑。↵主人何为言少钱，径须沽取对君酌。↵五花马，千金裘，↵呼儿将出换美酒，与尔同销万古愁。',
                x: 220,
                y: 100,
                width: 250,
                fontSize: 14
              });

            case 7:
              _context.next = 9;
              return maker.putCircularImg({
                img: __webpack_require__(20),
                x: 10,
                y: 10,
                width: 100,
                height: 100,
                rotate: 90
              });

            case 9:
              _context.next = 11;
              return maker.putImg({
                img: __webpack_require__(20),
                x: 110,
                y: 10,
                width: 100,
                height: 100,
                rotate: 90
              });

            case 11:
              _context.next = 13;
              return maker.putQrcode({
                text: 'http://www.baidu.com',
                x: 10,
                y: 200,
                logo: __webpack_require__(20),
                width: 200,
                height: 200
              });

            case 13:
              _context.next = 15;
              return maker.putPolygon({
                background: 'rgba(123,123,123, 0.6)',
                borderWidth: 2,
                borderColor: '#000000',
                paths: [{
                  x: 200,
                  y: 100
                }, {
                  x: 130,
                  y: 200
                }, {
                  x: 140,
                  y: 300
                }, {
                  x: 190,
                  y: 300
                }]
              });

            case 15:
              _context.next = 17;
              return maker.putLine({
                width: 5,
                color: 'red',
                start: {
                  x: 200,
                  y: 100
                },
                end: {
                  x: 190,
                  y: 200
                }
              });

            case 17:
              _context.next = 19;
              return maker.canvasToDataUrl();

            case 19:
              this.poster = _context.sent;

            case 20:
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
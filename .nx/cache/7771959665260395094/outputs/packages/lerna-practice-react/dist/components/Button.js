"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Button = function Button(_ref) {
  var props = _ref.props;
  return /*#__PURE__*/_react["default"].createElement("button", _extends({}, props, {
    style: {
      background: "red",
      color: 'white'
    }
  }), props.children);
};
var _default = exports["default"] = Button;
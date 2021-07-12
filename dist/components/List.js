"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "card-title px-4 mt-4"
  }, props.category), /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-group"
  }, props.products.map((product, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item mx-4",
      key: index
    }, product.id, " ", product.product, " ", product.brand, " ", product.model && product.model, " - Precio: ", product.price, "\u20AC");
  })));
}

var _default = List;
exports.default = _default;
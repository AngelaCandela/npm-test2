"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Agenda;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Agenda(_ref) {
  let {
    contacts,
    setContacts
  } = _ref;

  const removeContact = (event, phone) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.phone !== phone));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "my-4"
  }, "Agenda - Contacts List"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, contacts.map((contact, index) => {
    return /*#__PURE__*/_react.default.createElement("ul", {
      key: contact.phone,
      className: "col-6 list-group mb-4"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item active"
    }, "Contacto ", index), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, contact.name), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, contact.lastName), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, contact.address, ", ", contact.province, ", ", contact.postcode), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, contact.phone), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-warning",
      onClick: event => removeContact(event, contact.phone)
    }, "Eliminar")));
  })));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Table() {
  class Book {
    constructor(title, author, sales, price) {
      this.title = title;
      this.author = author;
      this.sales = sales;
      this.price = price;
    }

  }

  const book1 = new Book("The Selfish Gene", "Richard Dawkins", 740120, 12);
  const book2 = new Book("The God Delusion", "Richard Dawkins", 610120, 15);
  const book3 = new Book("La nueva mente del emperador", "Roger Penrose", 120000, 7);
  const book4 = new Book("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 910120, 16);
  const book5 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 740120, 22);
  const book6 = new Book("On the Road", "Jack Kerouac", 610120, 14);
  const book7 = new Book("The Catcher in the Rye", "JD Salinger", 120000, 19);
  const book8 = new Book("1984", "George Orwell", 910120, 21);
  const book9 = new Book("Cien años de soledad", "Gabriel García Márquez", 740120, 11);
  const book10 = new Book("Pride and Prejudice", "Jane Austen", 610120, 10);
  const books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "card-title mx-4 mt-4"
  }, "Table"), /*#__PURE__*/_react.default.createElement("table", {
    className: "table table-striped table-hover mx-auto w-75"
  }, /*#__PURE__*/_react.default.createElement("thead", {
    className: "thead-dark"
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Title"), /*#__PURE__*/_react.default.createElement("th", null, "Author"), /*#__PURE__*/_react.default.createElement("th", null, "Sales"), /*#__PURE__*/_react.default.createElement("th", null, "Price"))), /*#__PURE__*/_react.default.createElement("tbody", null, books.map((book, index) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("td", null, book.title), /*#__PURE__*/_react.default.createElement("td", null, book.author), /*#__PURE__*/_react.default.createElement("td", null, book.sales), /*#__PURE__*/_react.default.createElement("td", null, book.price));
  }))));
}

var _default = Table;
exports.default = _default;
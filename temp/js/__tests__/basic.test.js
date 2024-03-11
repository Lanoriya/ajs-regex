"use strict";

var _Validator = _interopRequireDefault(require("../Validator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('Check name', function () {
  test('name checker', function () {
    expect(new _Validator["default"]("www2-32W2_3ww").validateUsername()).toEqual(true);
  });
  test('name checker case', function () {
    expect(new _Validator["default"]("www2-32W2_3ww2").validateUsername()).toEqual(false);
  });
  test('name checker case2', function () {
    expect(new _Validator["default"]("2www2-32W2_3ww").validateUsername()).toEqual(false);
  });
  test('name checker case3', function () {
    expect(new _Validator["default"]("www2-32W2_3ww-").validateUsername()).toEqual(false);
  });
  test('name checker case4', function () {
    expect(new _Validator["default"]("www@2-32W2_3ww").validateUsername()).toEqual(false);
  });
});
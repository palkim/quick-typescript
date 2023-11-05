"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directions3 = exports.Directions2 = exports.Directions1 = exports.pid = exports.employees = exports.employee = exports.xs = exports.isRegisteredAll = exports.names = exports.ids = exports.x = exports.isRegistered = exports.name = exports.id = void 0;
// Basic Types
let id = 5;
exports.id = id;
let name = 'Petek';
exports.name = name;
let isRegistered = true;
exports.isRegistered = isRegistered;
let x = 'Hello World'; // Can put anything after putting string to x
exports.x = x;
exports.x = x = 5;
// Arrays
let ids = [1, 3, 5, 7, 9];
exports.ids = ids;
let names = ['Petek', 'Deniz', 'Damla'];
exports.names = names;
let isRegisteredAll = [true, true, true];
exports.isRegisteredAll = isRegisteredAll;
let xs = [true, false, 1, 'Deneme', 'Test', 5];
exports.xs = xs;
// Tuples -> If you want variable typed arrays but in an order
let employee = [1, 'Petek', true];
exports.employee = employee;
// Tuple List -> You can create array of Tuples
let employees = [
    [1, 'Petek', true],
    [2, 'Deniz', false],
    [3, 'Damla', false]
];
exports.employees = employees;
// Union of types for a variables -> productID can come as string or number
let pid = 5;
exports.pid = pid;
exports.pid = pid = '22';
// Enums
var Directions1;
(function (Directions1) {
    Directions1["Up"] = "Up";
    Directions1["Down"] = "Down";
    Directions1["Left"] = "Left";
    Directions1["Right"] = "Right";
})(Directions1 || (exports.Directions1 = Directions1 = {}));
var Directions2;
(function (Directions2) {
    Directions2[Directions2["Up"] = 1] = "Up";
    Directions2[Directions2["Down"] = 2] = "Down";
    Directions2[Directions2["Left"] = 3] = "Left";
    Directions2[Directions2["Right"] = 4] = "Right"; //4
})(Directions2 || (exports.Directions2 = Directions2 = {}));
var Directions3;
(function (Directions3) {
    Directions3[Directions3["Up"] = 0] = "Up";
    Directions3[Directions3["Down"] = 1] = "Down";
    Directions3[Directions3["Left"] = 2] = "Left";
    Directions3[Directions3["Right"] = 3] = "Right"; //3
})(Directions3 || (exports.Directions3 = Directions3 = {}));

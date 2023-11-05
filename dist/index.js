"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strArray = exports.numArray = exports.worker = exports.brad = exports.subtract = exports.add = exports.user3 = exports.log = exports.addNum = exports.customerID2 = exports.customerID1 = exports.user2 = exports.user1 = exports.Directions3 = exports.Directions2 = exports.Directions1 = exports.pid = exports.employees = exports.employee = exports.xs = exports.isRegisteredAll = exports.names = exports.ids = exports.x = exports.isRegistered = exports.name = exports.id = void 0;
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
// Union Types: Union of types for a variables -> productID can come as string or number
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
// Objects
const user1 = {
    id: 1,
    name: 'Petek'
};
exports.user1 = user1;
const user2 = {
    id: 1,
    name: 'Petek'
};
exports.user2 = user2;
// Type Assertion
// Check out in which cases type assertion might be useful yourself.
let cid = 'test';
let customerID1 = cid;
exports.customerID1 = customerID1;
let customerID2 = cid;
exports.customerID2 = customerID2;
// Functions
function addNum(x, y) {
    return x + y;
}
exports.addNum = addNum;
// Void
function log(message) {
    console.log(message);
}
exports.log = log;
const user3 = {
    id: 1,
    name: 'Petek'
};
exports.user3 = user3;
const add = (x, y) => x + y;
exports.add = add;
const subtract = (x, y) => x - y;
exports.subtract = subtract;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now register`;
    }
}
const brad = new Person(1, 'Brad Traversy');
exports.brad = brad;
// SubClasses
class Worker extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const worker = new Worker(1, 'Shawn', 'Developer');
exports.worker = worker;
console.log(worker.register());
// Generics -> reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
exports.numArray = numArray;
let strArray = getArray(['Petek', 'Ankara', 'Özgür']);
exports.strArray = strArray;

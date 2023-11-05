// Basic Types
let id:number = 5
let name: string = 'Petek'
let isRegistered: boolean = true
let x:any = 'Hello World' // Can put anything after putting string to x

x = 5

// Arrays
let ids: number[] = [1, 3, 5, 7, 9]
let names: string[] = ['Petek', 'Deniz', 'Damla']
let isRegisteredAll: boolean[] = [true, true, true]
let xs: any[] = [true, false, 1, 'Deneme', 'Test', 5] 

// Tuples -> If you want variable typed arrays but in an order
let employee: [number, string, boolean] = [1, 'Petek', true]

// Tuple List -> You can create array of Tuples
let employees: [number, string, boolean][] = [
    [1, 'Petek', true],
    [2, 'Deniz', false],
    [3, 'Damla', false]
]

// Union Types: Union of types for a variables -> productID can come as string or number
let pid: number | string = 5

pid = '22'

// Enums
enum Directions1 {
    Up = 'Up', 
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

enum Directions2 {
    Up = 1, 
    Down, //2
    Left, //3
    Right //4
}

enum Directions3 {
    Up,   //0
    Down, //1
    Left, //2
    Right //3
}

// Objects

const user1: {
    id: number
    name: string
} = {
    id: 1,
    name: 'Petek'
}

type User = {
    id: number
    name: string
}

const user2: User = {
    id: 1,
    name: 'Petek'
}

// Intersection Types: Combines multiple types in one

type Employee = {
    name: string,
    startDate: Date
};

type Manager = Employee & {
    teamSize: number
}

// Type Assertion
// Check out in which cases type assertion might be useful yourself.

let cid: any = 'test'
let customerID1 = cid as number

let customerID2 = <number>cid

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

// Void
function log(message: number | string): void {
    console.log(message);
}

// Interfaces

interface UserInterface { // Cannot be used instead of primitive types like `type`
    // Cannot do type Point = number | string with interface
    // Can be used with objects best
    readonly id: number // cannot assign to id because readonly
    name: string
    age?: number // Optional Parameter, not give an error if not included in Object
}

const user3: UserInterface = {
    id: 1,
    name: 'Petek'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y:number): number => x + y
const subtract: MathFunc = (x: number, y:number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now register`
    }
}

const brad = new Person(1, 'Brad Traversy')

// SubClasses
class Worker extends Person { 
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const worker = new Worker(1, 'Shawn', 'Developer')

console.log(worker.register());

// Generics -> reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Petek', 'Ankara', 'Özgür'])

// strArray.push(1) //Throws error
 
export {
    id, name, isRegistered, x,
    ids, names, isRegisteredAll, xs,
    employee, employees,
    pid,
    Directions1, Directions2, Directions3,
    user1, user2,
    Manager,
    customerID1, customerID2,
    addNum, log,
    user3,
    add, subtract,
    brad, worker,
    numArray, strArray
}

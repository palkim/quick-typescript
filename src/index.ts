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

// Union of types for a variables -> productID can come as string or number
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
 
export {
    id, name, isRegistered, x,
    ids, names, isRegisteredAll, xs,
    employee, employees,
    pid,
    Directions1, Directions2, Directions3
}

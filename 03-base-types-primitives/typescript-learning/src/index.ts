// A primitive(or base) is a basic value that isn't an object.

let name: string = "Indresh";
let age: number = 30;
let isLoggedIn: boolean = true;

// string

let firstName: string = "Sneha";
let message: string = 'Hello';
let greeting: string = `Welcome!`;

firstName.toUpperCase()

// number

let count: number = 10;
let price: number = 999.99;
let temperature: number = -5;
let score: number = 95.5;

// boolean

let isAdmin: boolean = true;
let hasPermission: boolean = false;

// string and String => "string" represents the primitive type value & "String" is a javascript wrapper object.

let name1: String = new String("Monu");

// null and undefined

let result: null = null;
let value: undefined = undefined;
/*
let username: string | null = getSavedUser(); // might return null

username?.toUpperCase()
*/

// undefined

const users = ["A", "B"];
const user: string | undefined = users.find(name => name === "C");

// bigint

const hugeNumber: bigint = 9007199254740993n;

// symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
//console.log(id1 === id2); // false


//... The Special Types: any, unknown, void, never

// any -> Allows a value to be of any type without type checking.

let someValue: any = "hello";
someValue.toUpperCase();
someValue.notARealMethod();
someValue.foo.bar.baz;


// unknown -> Allows a value to be any type, but requires type checking before use.

let dynamicValue: unknown = "Hello World";
// dynamicValue.calculateTotal();
// dynamicValue.foo.bar;

if (typeof dynamicValue === "string") {
    console.log(dynamicValue.toUpperCase());
}

// void -> Indicates that a function does not return a value.

function logMessage(message: string): void {
    console.log(message);
}

// never -> Indicates that a function never returns normally.

function keepAlive(): never {
    while (true) {
        console.log("Heartbeat...");
    }
}

function throwError(message: string): never {
    throw new Error(message);
}

type Shape = "square" | "circle";

function getArea(shape: Shape) {
    switch (shape) {
        case "square":
            return 100;
        case "circle":
            return 314;
        default:
            // TypeScript knows 'shape' can only be square or circle.
            // Therefore, at this point, 'shape' is typed as 'never'.
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

//typescript easy to read ,write and maintain
//typescript has extra features
//define a type
// browser can't run typeScript.
//TypeScript compile to javaScript after then browser run.
// .ts ans .tsx extensions is used for TypeScript files that include JSX syntax
// .ts extension is used for regular TypeScript files that do not contain JSX.



// let helloWorld1: string = "Hello, world!";
// console.log(helloWorld1);
// helloWorld1 = 42;

// const user = {
//     name: "Mitesh",
//     id: 0
// }
// console.log("user", user)

// interface User {
//     name: string;
//     age: number;
//     email: string;
// }


//typescript are STATIC TYPING
// let user: User = {
//     name: "John Doe",
//     age: 30,
//     email: "john@example.com"
// };
// console.log(user);

// let fname: string = "mitesh"
// fname = 105 // wrong 105 is string dataType. but javaScript in right
// fname = "jayyogi" //right
// fname = true // wrong true is boolean dataType. but javaScript in right

// console.log(fname)



// interface User {
//     name: string;
//     id: number;
// }

// const user1: User = {
//     name: "Mitesh",
//     // userName: "Mitesh", // wrong because userName does not exist in the user.
//     id: 0,
// }
// console.log(user1)


//write a sum two number
//@ts-ignore
// function sum(a: number, b: number): number {
//a dataType number and b dataType number and function dataType number
// return a + b
// }
// console.log(sum(5, 10))
// console.log(sum(5, "mitesh"))  // wrong


//Boolean true or false
// let myNameMitesh: boolean = true;
// myNameMitesh = true  //right
// myNameMitesh = "yes" // wrong
// console.log(myNameMitesh)

// function isEven(a: number): boolean {
//     return a + 2 === 0;
// }
// console.log(isEven)


//void data type
function noop() {
    return 5;
}
console.log(noop)
//void represents the return value of functions which don't return a value.


//BigInt Type
// Js we can't read the whole numbers beyond like 2 raise to power 54
// const maxNuber = Number.MAX_SAFE_INTEGER
// let maxNumber: bigint = 9007199254740992 + 9007199254740992
// console.log(maxNumber)


// ANY and UNKOWN Type
let myAnyNumber: any = 5; //right becuse type any
myAnyNumber = true
console.log(myAnyNumber)
// working with Dynamic Data : like user inputs,network responses or JSON objects(API data)


let num1: number
num1 = 2 ** 53 - 1
console.log(num1)
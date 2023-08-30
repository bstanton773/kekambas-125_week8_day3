/*
To run TypeScript code it first must be compile with the TypeScript compiler - tsc
we can run tsc and a ts file name and it will convert that file to a js file
if se set the rootDir of our project to a folder of TS files running tsc 
will compile all the files into JS files.

To run these files on node we can simply run node FILENAME.js

To Start up our project:
npm init
npm install typescript
tsc --init

Then edit the config files


tsconfig.json Settings:

Setup the location of the inputted TS files
    "rootDir": "./src",
Setup the location for the outputed js files
    "outDir": "./dist"

    
package.json Settings: The name needs to be lowercased with not spaces
To run the TS on node:
add
"start": "tsc && node ./dist/index.js",
to the "scripts" section

Note this will run any code executed in index.ts but not other .ts files.
*/

function addNums(num1:number, num2:number):number{
    return num1 + num2
}

console.log(addNums(10, 20))


/*
Note: What is and isn't included by default and in strict mode
can change from release to release
this document was written with 4.9.5
*/


/*
By default strict mode is enabled.
https://www.typescriptlang.org/tsconfig#strict

Strict mode is recommended and sets many type checking rules
*/

/*
==========================================================
|                                                        |
|                   TS CONFIG SETTINGS                   |
|                                                        |
==========================================================
*/

/*
noImplicitAny 
default: true
Recommended: true

When enabled, the compiler will warn you about variables that are inferred with the any type.
You’ll then have to explicitly annotate them with any if you have a reason to do so.

To allow this behavior which is generally not recommended set this value to fasle
*/
// function showFile(file){
//     console.log(file)
// }

// function showFile2(file:any){
//     console.log(file)
// }


/*
noImplicitReturns
Default: false
recommended: true
When enabled, the compiler will check all code paths in a function to ensure they return a value.
*/

// function getAge(age:number){
//     if (age>10){
//         return age
//     }
//     //return undefined is implicit here
// }    

/*
noUnusedLocals
Default: false
Recommended:true
When enabled, the compiler will report unused local variables.
*/
// function doSomething(){
//     let unused;
// }

/*
noUnusedParameters
Default: false
Recommended:true
When enabled, the compiler will report unused parameters.
*/

// function unUsedParam(param1:Event, param2:string){
//     console.log(param2)
// }
/*
Sometime you want to ignore the parameter without turning off this compiler option
the _ represents a placeholder for an unused parameter, this is a convention that is built
in to TypeScript
*/
// function unUsedParam2(_:Event, param2:string){
//     console.log(param2)
// }


/*
strictNullChecks
Default: false
Recommended: true

When enabled, null and undefined will not be acceptable values for variables 
unless you explicitly declare them as nullable. 
So, you’ll get an error if you set a variable to null or undefined. 
*/

// function makeLowerCase(s:string){
//     return s.toLowerCase()
// }

// makeLowerCase(null)

/*
allowUnreachableCode
Default: true
Recommended: true
When set the false, reports error about unreachable code. 
*/

// function sipylus(fruits:string[]){
//     for(let fruit of fruits){
//         fruit=fruit.toLowerCase()
//         break
//         return fruit
//     }
// }

/*
noImplicitOverride
Default: false
Recommended: true

When enabled, then compiler will warn us 
if we try to override a method without using the override keyword. 
*/

// class Parent{
//     action(){
//         console.log("Parent action")
//     }
// }

// class Child extends Parent{
//     action(){
//         console.log("Child Action")
//     }
// }


// class Child2 extends Parent{
//     override action(){
//         console.log("Child Action")
//     }
// }


/* 
allowJS 
Default: false
Recommended: Depends
When enabled this will allow us to import JavaScript code in our TypeScript
*/

// import {squareFootage} from './area';
// let myArea=squareFootage(4.,5)
// console.log(myArea)

/*
checkJs
Default: false
Recommended: Depends
When enabled TS will try to type check our JS code
*/
// import {squareFootage} from './area';
// let myArea2=squareFootage()
// console.log(myArea2) //NaN

/*
Note No Error Without checkJS
with checkJS compile time error
can Avoid this error by adding //ts-nocheck to the top of our file

Js implicitly passes undefined when parameters are not defined.  
To TS our JS parameters are of any type, so this passes the type check
*/

/*
    Using JS DOC to Type a JS file see area-js-doc

    with allowJs and checkJs enabled using the JS Doc
*/


// import {squareFootageJD} from './area-js-doc';
// // squareFootageJD();
// squareFootageJD(2,3);


/*

These methods work great, when you can edit the JS you are trying to use.

But what if we can't or don't want to change the underlying JS

create the area.d.ts file now

*/

//We now get error right away
// import {squareFootage} from './area';
// let myArea3=squareFootage("A","B")
// console.log(myArea3)


/*
Using Third Party JS Libraries
and the
Definitely Typed Library

lets run npm install uuid
This package generates universally unique identifiers

*/

// Note the error Could not find a declaration file for module 'uuid'
// To Fix this error the Definitely Typed Library contains
// types for the common JS Libraries (Note: not all libraries)
// to beable to use its types we can run 
// npm install @types/uuid
// Now the error has gone away

// import { v4 as uuidv4 } from "uuid";

// let uuid= uuidv4()
// console.log(uuid)

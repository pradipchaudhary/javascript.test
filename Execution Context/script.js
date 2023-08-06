console.log("Execution Context");
/*
*
     // There are three types of Execution Context in JS.

    1. The Global Execution Context (GEC): This is the primary or base Execution Context. It is the highest level of abstraction for an execution context in JS. It has two main functions: (1) Create a global object, and (2) Attach the this value to the global object

    2. The Function Execution Context (FEC): An execution context is created for every function invocation. It is not created when the function is declared, only when called or invoked.   When a function is called, it is executed through the execution stack (which we’ll discuss below).

    3. The eval() Execution Context: Due to the malicious nature of eval(), it is rarely used in JS so we won’t discuss it. However, an execution context is created whenever it is used.

*
*/

console.log(window == this);
this.color = "green";

console.log(window.color);
console.log(this.innerHeight);
console.log(this.innerWidth);

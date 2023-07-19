// Destructuring Array :-
const numbers = [1, 2, 3];
console.log(numbers);
// destructuring
const [number1, number2, number3] = numbers;
// separate variables
console.log(number1);
console.log(number2);
console.log(number3);

// Destructuring Nesting array
const myNumbers = [1, 2, [3, 4, 5], 6];
console.log(myNumbers);

const [num1, num2, [num3, num4, num5], num6] = myNumbers;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

// Destructuring Object

// Destructuring Nesting Object

// Default Value
console.warn("Default value: ");
const [n1, n2, n3, n4 = 4] = numbers;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);

// Alternate Name

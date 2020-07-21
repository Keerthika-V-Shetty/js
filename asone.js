/*Write a program which does the following things:
1. Takes a positive number from the user.
2. Makes an array of numbers till the number given by user
3. Use higher order function to filter the odd numbers
4. Generate an array of the cubes of the filtered numbers*/

let num = prompt("Enter a positive number", 0);
let arr = [];

for (let i = 1; i <= num; i++) {
  console.log(arr.push(i));
}
let oddnum = arr.filter((el) => el % 2 != 0);

let cubenum = arr.filter((el) => el % 2 != 0).map((el) => Math.pow(el, 3));

console.log(oddnum);
console.log(cubenum);

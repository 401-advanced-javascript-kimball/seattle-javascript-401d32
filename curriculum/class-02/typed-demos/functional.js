'use strict';

const numbers = [1, 2, 3];

// non-functional approach
const squares = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    arr[x] = arr[x] * arr[x];
  }

  return arr;
}

// Uses spread syntax: this places the contents of an iterable, into something new.
const squareFunctional = (arr) => {
  const newArray = [];
  for (let x = 0; x < arr.length; x++) {
    newArray[x] = arr[x] * arr[x];
  }

  return newArray;
}

console.log(numbers);
console.log(squareFunctional(numbers));
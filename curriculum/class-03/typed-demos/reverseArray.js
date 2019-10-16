'use strict';

let testArr = ['a', 'b', 'c'];

function reverseArray(arr) {

  let pointerFront;
  let pointerBack;

  for (let i = arr.length - 1; i >= (arr.length - 1) / 2; i--) {
      pointerBack = arr[i];
      pointerFront = arr[arr.length - 1 - i];
      arr[i] = pointerFront;
      arr[arr.length - 1 - i] = pointerBack;
  }

  console.log(arr);
  return arr;
}

reverseArray(testArr);

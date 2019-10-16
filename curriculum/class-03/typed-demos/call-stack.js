'use strict';

const second = () => {
  setTimeout(() =>   console.log('second!!')
, 1000)
}

const third = () => {

  console.log('third!');
}

const main = () => {
  console.log('first');
  second();
  third();
}

main();

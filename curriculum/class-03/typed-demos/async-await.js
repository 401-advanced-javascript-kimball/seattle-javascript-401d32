'use strict';


// We want to allow no blocking async functionality similar to promises

let request = (url) => {
  if (url) {
    return JSON.stringify({data: "Jacob"});
  }
  const error = new Error();
  throw error;
}

async function getData(url) {
  try {
    let result = await request(url);
    console.log(result);
  } catch(e) {
    console.warn('woops', e);
  }
}
// console.log(getData('www.google.com'));
getData(false);



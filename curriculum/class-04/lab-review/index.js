'use strict';

const filePath = process.argv[2];

const useCallback = require('./lib/file-edit-callback');
const usePromise = require('./lib/file-edit-promise');
const useAwait = require('./lib/file-edit-await');

// useCallback.read(filePath, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     data.lastName = "Changed from a callback";
//     useCallback.write(filePath, data, (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         useCallback.read(filePath, (err, newData) => {
//           console.log(newData);
//         })
//       }
//     })
//   }
// });

// usePromise.read(filePath)
//   .then(data => {
//     data.lastName = 'here is my promise name';
//     return data;
//   })
//   .then(obj => usePromise.write(filePath, obj))
//   .then(() => usePromise.read(filePath).then(content => { console.log(content); }))
//   .catch(e => {
//     throw e;
//   });

async function callUseAwait() {
  const contents = await useAwait.read(filePath);
  contents.lastName = 'Changed with await';
  await useAwait.write(filePath, contents);;
  const newContents = await useAwait.read(filePath);
  return newContents;
}

// callUseAwait().then((fileData) => console.log(fileData));

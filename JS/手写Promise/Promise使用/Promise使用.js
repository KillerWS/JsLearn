const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 100);
});

setTimeout(() => {
  console.log(promise)
}, 1000);

// promise.then(
//   value => {
//     console.log('Fulfilled:', value);
//   },
//   reason => {
//     console.log('Rejected:', reason);
//   }
// );
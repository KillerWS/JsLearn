const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 5000);
});

setTimeout(() => {
  console.log(promise)
}, 5000);

promise.then(
  value => {
    console.log('Fulfilled:', value);
  },
  reason => {
    console.log('Rejected:', reason);
  }
);
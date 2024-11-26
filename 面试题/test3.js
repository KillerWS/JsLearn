const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

function myPromiseRace(promises){
    if (!Array.isArray(promises)) {
        return reject(new TypeError('Promise.race requires an array'));
      }
    return new Promise((resolve, reject)=>{
        promises.forEach((promise, index) => {
            if (!(promise instanceof Promise)) {
                promise = Promise.resolve(promise);
              }
              promise.then(resolve, reject);
              // promise.then(resolve, reject)
        });
    })
    
}

myPromiseRace([promise1, promise2, promise3])
    .then((values) => {
      console.log(values); // 输出：[3, 42, 'foo']
    })
    .catch((reason) => {
      console.error(reason);
    });
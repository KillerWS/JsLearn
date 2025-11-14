
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve('fosso'), 3000);
  });
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve('24'), 100);
  });;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve('foo'), 100);
});

const fastPromise = new Promise(resolve => setTimeout(() => resolve('快'), 100));
const slowPromise = new Promise(resolve => setTimeout(() => resolve('慢'), 500));
// Promise.race 的实现
Promise.myPromiseRace = function(promises) {
    return new Promise((resolve, reject) => {
        // 参数校验
        if (!Array.isArray(promises)) {
            return reject(new TypeError('Promise.race requires an array as argument'));
        }

        // 如果数组为空，将永远等待（符合原生行为）
        if (promises.length === 0) {
            return;
        }

        promises.forEach(promise => {
            // 用 Promise.resolve 包装，确保处理的是 Promise
            Promise.resolve(promise)
                .then(value => {
                    // 第一个解决的 Promise 会触发 resolve
                    resolve(value);
                })
                .catch(error => {
                    // 第一个拒绝的 Promise 会触发 reject
                    reject(error);
                });
        });
    });
};


Promise.myPromiseRace([promise1, promise2, promise3])
.then(values=>{
    console.log(values); // 输出：[3, 42, "foo"]
}).catch(error=>{
    console.log(error);
})

// ❌ 错误：立即调用
setTimeout((function() {
    console.log('我立即执行了！');
    return function() {
        console.log('这个函数1秒后执行');
    };
})(), 1000);
// 会立即输出 "我立即执行了！"，1秒后输出 "这个函数1秒后执行"
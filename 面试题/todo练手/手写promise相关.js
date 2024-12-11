function myRace(promises){
    return new Promise((resolve, reject)=>{
        for(const p of promises){

        }
    })
}

function myPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        // 如果 promises 不是可迭代对象，直接抛出错误
        if (!Array.isArray(promises) && !(typeof promises[Symbol.iterator] === 'function')) {
            return reject(new TypeError('Argument must be iterable'));
        }

        for (const p of promises) {
            // 将每个 promise 包装成 Promise 实例（兼容普通值）
            Promise.resolve(p).then(resolve, reject);
        }
    });
}

const p1 = new Promise((resolve) => setTimeout(() => resolve('p1 resolved'), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve('p2 resolved'), 500));
const p3 = new Promise((_, reject) => setTimeout(() => reject('p3 rejected'), 200));

myPromiseRace([p1, p2, p3])
    .then((value) => console.log('Race resolved with:', value))
    .catch((err) => console.error('Race rejected with:', err));


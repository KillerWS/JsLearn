function runPromisesInSeries(promises) {
    return promises.reduce((accumulator, currentPromise) => {
        return accumulator.then(currentPromise);
    }, Promise.resolve());
}

// 示例：
// 定义一组返回 Promise 的函数
const promiseFunctions = [
    () => new Promise(resolve => setTimeout(() => resolve('Promise 1 Done'), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve('Promise 2 Done'), 500)),
    () => new Promise(resolve => setTimeout(() => resolve('Promise 3 Done'), 800)),
];

// 执行 Promise 串行任务
runPromisesInSeries(promiseFunctions.map(promise => () => promise()))
    .then(() => {
        console.log('All promises completed in sequence.');
    })
    .catch(err => {
        console.error('Error occurred:', err);
    });

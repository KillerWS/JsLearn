// 手写一个简单的 Promise.all
function simplePromiseAll(promises) {
    return new Promise((resolve, reject) => {
      // 用于存储所有 resolved 的结果
      const results = [];
      // 已经 resolved 的 Promise 数量
      let resolvedCount = 0;
  
      // 遍历每一个 Promise
      promises.forEach((promise, index) => {
        // 确保输入的是 Promise，如果不是则将其包装成一个 resolved 的 Promise
        Promise.resolve(promise).then(
          (value) => {
            // 将成功的结果存入 results 数组中
            results[index] = value;
            // resolved 的数量加一
            resolvedCount++;
  
            // 当所有的 Promise 都已 resolved 时，解析新的 Promise
            if (resolvedCount === promises.length) {
              resolve(results);
            }
          },
          (reason) => {
            // 如果有任何一个 Promise 被 rejected，则立即拒绝新的 Promise
            reject(reason);
          }
        );
      });
  
      // 如果输入的 promises 数组为空，则立即解析新的 Promise
      if (promises.length === 0) {
        resolve([]);
      }
    });
  }
  
  // 示例用法
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  
  simplePromiseAll([promise1, promise2, promise3])
    .then((values) => {
      console.log(values); // 输出：[3, 42, 'foo']
    })
    .catch((reason) => {
      console.error(reason);
    });
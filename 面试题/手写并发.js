class RequestPool {
    constructor(maxConcurrency) {
        this.maxConcurrency = maxConcurrency;
        this.queue = [];
        this.activeRequests = 0;
    }

    // 添加请求到队列
    addRequest(requestFn) {
        const promise = new Promise((resolve, reject) => {
            const executeRequest = () => {
                try {
                    this.activeRequests++;
                    requestFn()
                        .then(result => {
                            this.activeRequests--;
                            // 解除任务完成后的下一个任务的阻塞
                            if (this.queue.length > 0) {
                                this.queue.shift()();
                            }
                            resolve(result);
                        })
                        .catch(error => {
                            this.activeRequests--;
                            if (this.queue.length > 0) {
                                this.queue.shift()();
                            }
                            reject(error);
                        });
                } catch (error) {
                    this.activeRequests--;
                    if (this.queue.length > 0) {
                        this.queue.shift()();
                    }
                    reject(error);
                }
            };

            // 如果还有剩余的并发空间，立即执行请求
            if (this.activeRequests < this.maxConcurrency) {
                executeRequest();
            } else {
                // 否则，将请求放入队列等待
                // 这里要放executeRequest 而不是直接放requestFn
                this.queue.push(executeRequest);
            }
        });

        return promise;
    }
}

// 使用例子
async function fetchSomething(url) {
    // 这里应该使用fetch API或者axios等实际的方法来发送HTTP请求
    console.log(`Fetching ${url}`);
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000)); // 模拟网络延迟
    console.log(`${url} fetched`);
    return url;
}

const requestPool = new RequestPool(3);

(async () => {
    let urls = ['url1', 'url2', 'url3', 'url4', 'url5'];

    // 将所有的请求加入到请求池中
    let promises = urls.map(url => requestPool.addRequest(() => fetchSomething(url)));

    // 等待所有请求完成
    // await Promise.all(promises);
    console.log('All requests finished.');
})();
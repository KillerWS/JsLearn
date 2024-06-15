// 1,Promise原始链式调用
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("请求结果：", 1);
        resolve(1);
    }, 1000)
}).then(data => {
    console.log("第一次对结果处理: ",data);
    return new Promise((resolve, reject) => {
        resolve(data * 2);
    });
}).then(data => {
    console.log("第二次对结果处理: ", data);
    return new Promise((resolve, reject) => {
        resolve(data * 3);
    });
}).then(data => {
    console.log("第三次对结果处理: ", data);
    data *= 4;
    console.log("Promise的链式调用结束,最终结果：", data);
}).catch(err => {
    console.log("链式调用中某个环节出现错误！！", err);
})

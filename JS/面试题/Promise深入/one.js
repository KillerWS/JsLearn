// 3个对象都返回了成功fullfilled的Promise对象
let p1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('这是Promise P1')
        resolve('第1个异步进程')
    },1000)
})
let p2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('这是Promise P2')
        resolve('第2个异步进程')
    },1000)
})
let p3=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('这是Promise P3')
        resolve('第3个异步进程')
    },1000)
})


//基本的链式调用
Promise.resolve().then(res => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('11111111111成功' )
            resolve('第一个异步进程')
        },2000)
    })
    // 只有当第一个then返回了promise对象才会接着调用下一个的then方法
}
// 注释掉reject的回调
// , fail=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('11111111111失败' )
//             resolve('第一个异步进程失败')
//         },2000)
//     })}
).then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('22222222222成功' )
            resolve('第2个异步进程')
        },2000)
    })
})

//使用forEach遍历Promise数组进行链式调用




// .then(success=>{
//     console.log('成功：', success)
// }, fail=>{
//     console.log('失败：', fail)
// })
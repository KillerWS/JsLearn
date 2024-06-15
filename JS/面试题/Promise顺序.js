let a = function() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('11111111111',)
            resolve('第一个异步进程')
        },3000)
    })
} 
let b = function(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('2222222222' )
            resolve('第二个异步进程')
        },2000)
    })
}
let c = function(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('3333333333333')
            resolve('第三个异步进程')
        },1000)
    })
}

let d = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('44444444444')
        resolve('第四个异步进程')
    },1000)
})

let e = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('55555555555')
        resolve('第五个异步进程')
    },1000)
})

let f = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('666666666666')
        resolve('第六个异步进程')
    },1000)
})

let promiseArr = [a, b, c]
let promiseArr2=[d,e,f]

function fun(arr){
    let res=Promise.resolve();
    arr.forEach(element => {
        res=res.then(element)
    });
}

fun(promiseArr)

// promiseArr.reduce((prev, cur)=>{
//     return prev.then(() => {
//             return cur().then(res => {
//                 console.log( res)
//             })
//     })
// }, Promise.resolve())
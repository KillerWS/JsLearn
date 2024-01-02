
//宏任务setTimeout
setTimeout(()=>{
    console.log(4)
}, 0)

//Promise.then则是具有代表性的微任务
new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
})

console.log(2)

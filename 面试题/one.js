
async function async1(){
    console.log("async1 start")
    await async2();
    console.log("async1 end")

}
async function async2(){
    console.log("async2")
}

setTimeout(()=>{
    console.log("setTimeout")
},0)



const promise1 = new Promise((resolve, reject) => {
    console.log('promise1')
  })
  promise1.then(() => {
    console.log(3);
  });
  console.log('1', promise1);
  
  const fn = () => (new Promise((resolve, reject) => {
    console.log(2);
    resolve('success')
  }))
  fn().then(res => {
    console.log(res)
  })

  async1();
  console.log('start')
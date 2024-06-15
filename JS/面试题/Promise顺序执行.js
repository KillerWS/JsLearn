const sleep = () => {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        console.log('sleep')
        resolve()
      }, 1000)
    })
  }
   
   
  const promiseList = [
    sleep,
    sleep,
    sleep
  ]

  async function forOfPromise() {
    console.log('for of start', new Date())
    async function forOfLoop() {
      for (const promiseInstance of promiseList) {
        await promiseInstance()
      }
    }
    await forOfLoop()
    console.log('for of end',  Date.now())
  }
  forOfPromise()
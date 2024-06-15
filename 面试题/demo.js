const addRemote = async (a, b) => new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000);
});
const minusRemote = async (a, b) => new Promise((resolve) => {
    setTimeout(() => resolve(a - b), 1000);
});
const muRemote = async (a, b) => new Promise((resolve) => {
    setTimeout(() => resolve(a * b), 1000);
});
const tsRemote = async (a, b) => new Promise((resolve) => {
    if(b !== 0){
        setTimeout(() => reject("分子不能为0"), 1000);
    }else{
        setTimeout(() => resolve(a / b), 1000);
    }
    
});


// 请实现本地的add方法（add参数不定长），调用addRemote，最优实现输入数字的加法
const add = async (...args) => {
    let res;
    // 你的实现
    // for(const item in arguments){
       
    // }
    //  //解构出不定长的多个函数参数
    // //使用reduce 进行累加？
    // const args = arguments
    // args.reduce(()=>{
    // })

    var acc1, acc2;
    acc2 = arguments[arguments.length-1];
    for(let i=0;i< arguments.length-1; i++){
        acc1 +=arguments[i]
        //callback(this[i], i, this);
    }


    addRemote().then(result=>{
        result = res;
    }).catch(error => {
        console.log(error);
      });
    
    return res;
};


const main = async () => {
    console.log(await add(2, 3)); // 5
    console.log(await add(2, 3, 4)); // 9
}
  
main();
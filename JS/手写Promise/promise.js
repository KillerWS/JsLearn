function Promise(executor){
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callbacks = []; //object对象类型的

    //保存实例对象的this值
    const self = this;

    //resolve函数
    function resolve(data){
        // 限定只能执行一次
        if(self.PromiseState !== 'pending') return;
        //console.log(this) //this是指向window的
        //1. 修改对象状态(promiseState)
        self.PromiseState = 'fullfilled';
        //2. 设置对象结果值(promiseResult)
        self.PromiseResult = data;

        //调用成功的回调函数

        self.callbacks.forEach(item => {
            item.onResolved(data)
        })
        
    }

    //写成箭头函数可以解决this指向window的问题
    // const resolve =(data) =>{
    //     this.PromiseState = 'fullfilled';
    //     this.PromiseResult = data;
    // }

    //reject函数
    function reject(data){
        if(self.PromiseState !== 'pending') return;
        //1. 修改对象状态(promiseState)
        self.PromiseState = 'rejected';
        //2. 设置对象结果值(promiseResult)
        self.PromiseResult = data;

        self.callbacks.forEach(item => {
            item.onRejected(data)
        })
    }

    try {
        //执行器函数在内部是同步调用的
        executor(resolve,reject);
    } catch (e) {
        //修改 promise对象状态为失败
        reject(e);
    }
    

}

//添加then方法
Promise.prototype.then = function(onResolved, onRejected){
    const self = this;
    return new Promise((resolve, reject)=>{

    //调用回调函数,这里的this指向 p
    if(this.PromiseState === 'fullfilled'){

        try {

        let result = onResolved(this.PromiseResult);

        if(result instanceof Promise){
            //如果是Promise类型的对象
            result.then(v=>{
                resolve(v);
            },r=>{
                reject(r);
            });
        }else{
            //结果的对象状态为成功
            resolve(result);
        }

        } catch (error) {
            reject(error)
        }

    }

    if(this.PromiseState === 'rejected'){
        onRejected(this.PromiseResult);
    }

    //判断pending,异步任务收PromiseState没有变化所以then无法执行
    if(this.PromiseState === 'pending'){
        //保存回调函数
        this.callbacks.push({
            //onResolved: onResolved,
            onResolved:function(){
                //执行回调函数
                let result = onResolved(self.PromiseResult)

                if(result instanceof Promise){
                    result.then(v=>{
                        resolve(v);
                    },r=>{
                        reject(r);
                    });
                }else{
                    resolve();
                }
                
            }, 

            //onRejected: onRejected
            onRejected: function(){
                onRejected(self.PromiseResult)
            }
        })
        
        
    }

})

}


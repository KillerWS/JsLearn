function Promise(executor){
    this.PromiseState = 'pending'
    this.PromiseResult = null;
    this.callbacks = [];
    self= this;

    function resolve(data){
        console.log(data)
        self.PromiseState = 'fullfilled';//resolved
        self.PromiseResult = data;

        self.callbacks.forEach(item => {
            item.onResolved(data)
        });
    }
    function reject(data){
        self.PromiseState = 'rejected';
        self.PromiseResult = data;

        self.callbacks.for
    }



    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

Promise.prototype.then = function(onResolved, onRejected){


}
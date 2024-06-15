function Promise(executor){
    this.PromiseState = 'pending'
    this.PromiseResult = null;
    this.callbacks = [];
    self= this;

    function resolve(data){
        
        if(self.PromiseState !== 'pending') return;
        
        self.PromiseState = 'fullfilled';//resolved
        self.PromiseResult = data;

        if(self.callbacks.onResolved){
            self.callbacks.onResolved(data);
        }
        
        self.callbacks.forEach(item => {
            item.onResolved(data)
        });
    }
    function reject(data){

        if(self.PromiseState !== 'pending') return;

        self.PromiseState = 'rejected';
        self.PromiseResult = data;

        self.callbacks.forEach(item => {
            item.onRejected(data)
        });
        
    }



    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

Promise.prototype.then = function(onResolved, onRejected){
    
    if(this.PromiseState === 'fullfilled'){
        onResolved(this.PromiseResult);
    }

    if(this.PromiseState === 'rejected'){
        onRejected(this.PromiseResult);
    }

    if(this.PromiseResult === 'pending'){
        this.callbacks.push({
            onResolved:onResolved,
            onRejected:onRejected
        }) 
    }

}
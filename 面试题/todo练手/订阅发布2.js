class EventEmitter{
    constructor(){
        this.events = {}
    }
    on(event, fn){
        if(this.events[event]){
            this.events[event].push(fn);
        }else{
            this.events[event] = [fn];
        }
    }

    off(name, fn){
        let tasks = this.events[name];
        if(tasks){
            // 寻找索引
            const index = tasks.findIndexOf(item => item === fn || item.callback === fn);
            if(index >=0 ) tasks.splice(index, 1);
        }
    }

    emit(event, once = false, ...args){
        if(!this.events[event]) return;
        //这里创建副本， 如果不创建副本， 会导致事件无法触发
        // 因为事件的回调函数是存储在数组中的， 如果直接使用this.events[event]， 那么会导致数组中的元素被修改， 从而导致事件无法触发
        let tasks = this.events[event].slice();
        for(let fn of tasks){
            fn(...args);
        }
        //处理 once 的逻辑
        if(once){
            delete this.events[event];
        }
    }

}


// 测试
let eventBug = new EventEmitter();
let fn1 = function(name, age){
    console.log(`fn1:${name}, ${age} fn1`);
}

let fn2 = function(name, age){
    console.log(`fn2:${name}, ${age} fn2`);
}

eventBug.on('event1', fn1);
eventBug.on('event1', fn2);
eventBug.emit('event1', false, '布兰卡', 18);
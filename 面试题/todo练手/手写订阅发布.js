class EventEmitter{
    constructor(){
        this.events = {};
        //其实就是把events[key] 这个数组所有的事件都遍历一遍
    }

    subscribe(event, callback){
        if(!this.events[event]){
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    publish(event, value){
        if(!this.events[event]) return; //如果没订阅这个事件， 直接返回
        this.events[event].forEach(callback => {
            callback(value);
        });
    }

}
// 创建发布订阅
const eventEmitter = new EventEmitter();

// 订阅一个事件
const callback = (data) => {
    console.log(`Received: ${data}`);
  };
  eventEmitter.subscribe('event1', callback);
  // 订阅第二个事件
const callback2 = (data) => {
    console.log(`Received event2: ${data}`);
  };
  eventEmitter.subscribe('event2', callback2);
// 发布事件
eventEmitter.publish('event2', 'Hello Worldxx'); // 输出: Received: Hello World

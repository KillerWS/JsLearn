class PubSub {
    constructor() {
      this.events = {}; // 用于存储事件和订阅者列表
    }
  
    // 订阅事件
    subscribe(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }
    
    subscribe(event, callback){
        if(!this.events[event]){
            this.events[event] = [];
        }   
        this.events[event].push(callback); 
    }

    // 发布事件
    publish(event, ...args) {
      if (!this.events[event]) return; // 如果没有订阅者，直接返回
      this.events[event].forEach(callback => callback(...args)); // 依次执行订阅者回调
    }
  
    // 取消订阅
    unsubscribe(event, callback) {
      if (!this.events[event]) return; // 如果事件没有订阅者，直接返回
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
}


// 创建发布订阅实例
const pubsub = new PubSub();

// 订阅一个事件
const callback = (data) => {
  console.log(`Received: ${data}`);
};
const callback2 = (data) => {
    console.log(`Received2: ${data}`);
  };
  pubsub.subscribe('event1', callback);
  pubsub.subscribe('event1', callback);

// 发布事件
pubsub.publish('event1', 'Hello Worldxx'); // 输出: Received: Hello World

// 取消订阅
pubsub.unsubscribe('event1', callback);

// 再次发布事件（订阅已取消，不会有输出）
pubsub.publish('event1', 'Hello Again');

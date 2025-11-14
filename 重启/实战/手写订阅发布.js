
class EventEmitter{
    constructor(){
        this.events = {};
    }

    // 订阅事件
    on(event, fn){
        if(!this.events[event]) this.events[event] = [];
        this.events[event].push(fn);
        return this;  // 支持链式调用
    }

    // 取消订阅
    off(event, fn){
        if(!this.events[event]) return this;
        // 问题：filter 不会修改原数组，必须赋值回去！
        this.events[event] = this.events[event].filter(e => e !== fn);
        //return this;  // 支持链式调用
    }
    
    // 只订阅一次
    once(event, fn){
        const wrapper = (...args) => {
            fn(...args);              // 先执行原函数
            this.off(event, wrapper); // 再取消订阅
        }
        this.on(event, wrapper);      // 订阅包装函数
        return this;  // 支持链式调用
    }

    // 触发事件
    emit(event, ...args){
        if(!this.events[event]) return this;
        // 使用 slice 复制数组，防止在执行过程中数组被修改
        let tasks = this.events[event].slice();
        tasks.forEach(fn => {
            fn(...args);
        });
        return this;  // 支持链式调用
    }
}


// ==================== 测试代码 ====================

console.log('========== 测试1: on 方法 - 订阅事件 ==========\n');

let eventBus = new EventEmitter();

let fn1 = function(name, age){
    console.log(`  ✓ fn1 收到: ${name}, ${age}岁`);
}

let fn2 = function(name, age){
    console.log(`  ✓ fn2 收到: ${name}, ${age}岁`);
}

let fn3 = function(msg){
    console.log(`  ✓ fn3 收到消息: ${msg}`);
}

// 测试：同一事件绑定多个回调
eventBus.on('user:login', fn1);
eventBus.on('user:login', fn2);
console.log('已订阅 user:login 事件（fn1, fn2）');
console.log('触发事件：');
eventBus.emit('user:login', '张三', 25);

console.log('\n========== 测试2: emit 方法 - 触发事件并传参 ==========\n');

eventBus.on('message', fn3);
console.log('触发 message 事件，传入参数：');
eventBus.emit('message', 'Hello World!');

console.log('\n========== 测试3: off 方法 - 取消订阅 ==========\n');

console.log('取消订阅 user:login 的 fn1');
eventBus.off('user:login', fn1);
console.log('再次触发 user:login（fn1 应该不会执行）：');
eventBus.emit('user:login', '李四', 30);

console.log('\n========== 测试4: once 方法 - 只执行一次 ==========\n');

let fn4 = function(count){
    console.log(`  ✓ fn4 执行了，count=${count}`);
}

eventBus.once('click', fn4);
console.log('订阅 click 事件（once）');
console.log('\n第1次触发 click：');
eventBus.emit('click', 1);
console.log('第2次触发 click（fn4 不应该执行）：');
eventBus.emit('click', 2);
console.log('第3次触发 click（fn4 不应该执行）：');
eventBus.emit('click', 3);

console.log('\n========== 测试5: 不同事件互不影响 ==========\n');

let orderFn = () => console.log('  ✓ 订单创建成功');
let payFn = () => console.log('  ✓ 支付成功');

eventBus.on('order:create', orderFn);
eventBus.on('order:pay', payFn);

console.log('触发 order:create：');
eventBus.emit('order:create');
console.log('\n触发 order:pay：');
eventBus.emit('order:pay');

console.log('\n========== 测试6: 传递多个参数 ==========\n');

let multiFn = function(a, b, c, d){
    console.log(`  ✓ 收到参数: a=${a}, b=${b}, c=${c}, d=${d}`);
}

eventBus.on('multi', multiFn);
console.log('触发事件并传递4个参数：');
eventBus.emit('multi', 100, 'hello', true, {name: '对象'});

console.log('\n========== 测试7: 边界情况 - 触发不存在的事件 ==========\n');

console.log('触发未订阅的事件 notExist（不应该报错）：');
eventBus.emit('notExist', 'test');
console.log('  ✓ 没有报错');

console.log('\n========== 测试8: off 移除不存在的监听器 ==========\n');

let fakeFn = () => console.log('fake');
console.log('尝试移除不存在的监听器（不应该报错）：');
eventBus.off('user:login', fakeFn);
console.log('  ✓ 没有报错');

console.log('\n========== 测试9: 链式调用 ==========\n');

let eventBus2 = new EventEmitter();
eventBus2
    .on('test', () => console.log('  ✓ 监听器1'))
    .on('test', () => console.log('  ✓ 监听器2'))
    .on('test', () => console.log('  ✓ 监听器3'));
    
console.log('触发 test 事件（3个监听器）：');
eventBus2.emit('test');

console.log('\n========== 测试10: once 与 on 混合使用 ==========\n');

let eventBus3 = new EventEmitter();
eventBus3.on('mix', () => console.log('  ✓ on: 每次都执行'));
eventBus3.once('mix', () => console.log('  ✓ once: 只执行一次'));

console.log('第1次触发：');
eventBus3.emit('mix');
console.log('\n第2次触发（once 的不应该执行）：');
eventBus3.emit('mix');

console.log('\n========== 所有测试完成！ ==========');
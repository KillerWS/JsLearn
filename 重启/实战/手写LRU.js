class LRUCache{
    constructor(capacity){
        this.capacity = capacity;  // 修复：应该赋值参数，不是自己
        this.cache = new Map();    // JS的Map可以保证插入顺序    
    }

    //one
    // get(key){
    //     if(!this.cache.has(key)){
    //         return -1;
    //     }

    //     //访问元素移动到Map的末尾
    //     const value = this.cache.get(key);
    //     this.cache.delete(key);
    //     this.cache.set(key, value);

    //     return value
    // }

    // put(key, value) {
    //     if (this.cache.has(key)) {
    //         // 如果键已存在，先删除再重新插入（更新到最新位置）
    //         this.cache.delete(key);
    //     } else if (this.cache.size >= this.capacity) {
    //         // 如果容量已满，删除最久未使用的元素（Map 的第一个元素）
    //         const oldestKey = this.cache.keys().next().value;
    //         this.cache.delete(oldestKey);
    //     }
        
    //     // 插入新元素到最新位置
    //     this.cache.set(key, value);
    // }

    //  // 可选：查看缓存内容
    //  entries() {
    //     return Array.from(this.cache.entries());
    // }

    //two
    get(key){
        if(this.cache.has(key)){
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value
        }else if(this.cache.size >= this.capacity) {
            // 如果容量已满，删除最久未使用的元素（Map 的第一个元素)
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }

        this.cache.set(key, value);
    }

    put(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }else{

        }
        
        
        this.cache.set(key, value);

    }
       entries() {
        return Array.from(this.cache.entries());
    }


}

// 测试代码
function testLRU() {

    let m =new Map();
    m.set(1,"x")
    m.set(2,"s")
    m.set(3,"xa")
    m.set(4,"xd")
    console.log(m.keys().next().value)
    
    console.log('=== LRU Cache 测试 ===');
    
    const lru = new LRUCache(3);
    
    // 测试基本功能
    lru.put(1, 'A');
    lru.put(2, 'B');
    lru.put(3, 'C');
    console.log('初始缓存:', lru.entries()); // [[3,'C'], [2,'B'], [1,'A']]
    
    // 测试访问更新顺序
    console.log('get(1):', lru.get(1)); // 'A'
    console.log('访问后缓存:', lru.entries()); // [[1,'A'], [3,'C'], [2,'B']]
    
    // 测试超出容量淘汰
    lru.put(4, 'D');
    console.log('添加D后缓存:', lru.entries()); // [[4,'D'], [1,'A'], [3,'C']]
    console.log('get(2):', lru.get(2)); // -1 (已被淘汰)
    
    // 测试更新已存在键
    lru.put(1, 'A+');
    console.log('更新A后缓存:', lru.entries()); // [[1,'A+'], [4,'D'], [3,'C']]
    console.log('get(1):', lru.get(1)); // 'A+'
}

// 运行测试
testLRU();
// class Reactive {
//     constructor(name='chris', age=18){
//         this.proxy = 
//         this.name=name;
//         this.age = age;
//     }

//     _observe(obj){
//         const callback = this.callback;

//         return  new Proxy(obj, {
//             get(target, key, receiver){
//                 const value = Reflect.get(target, key)
//                 return value;
//             },
//         })

//     }

    
    
    
// }

// Object.defineProperty;
//Proxy

// Proxy 可以理解为一层"拦截器"
// 基本语法：
// const proxy = new Proxy(target, handler) 
// target 是被代理的原始对象, handler是一个处理器对象， 里边写了各种"拦截"的函数


const obj = {name:"chris", age:12}

// 想在值变了的时候加一个回调onChange

class Reactive{
    constructor(obj, onChange){
        this.obj = obj;
        this.onChange = onChange || function(){};
        this.cache = new WeakMap();
        return this._reactiveDeep(obj, this);
    }
    
    
   
    _reactiveDeep(obj, self){
        if(typeof obj !== 'object' || obj === null) return obj; 

        const p = new Proxy(obj, {
            set(target, key,value, receiver){
                const hadKeyBefore =Reflect.has(target, key)
                const oldVal = Reflect.get(target,key, receiver)
                const ok = Reflect.set(target, key, value, receiver);
                if(ok){
                    if(!hadKeyBefore){
                        self.onChange(key, value, undefined); // 新增
                        console.log("新增")
                    }else if(oldVal !== value){
                        self.onChange(key, value, oldVal);    // 更新
                        console.log("更新")
                    }else if(oldVal === value){
                        console.log("值一样， 不触发 onChange")
                    }
                }

                return ok; //因为set 其实最终要返回一个布尔值
            },
            get(target, key, receiver){
                const res = Reflect.get(target, key, receiver); //查询 
                console.log("查询")
                return  res;
            },
            deleteProperty(target, key){
                const had = Reflect.has(target, key);
                const oldVal = target[key];
                const ok = Reflect.deleteProperty(target, key);
                if(ok && had){
                    self.onChange(key, undefined, oldVal); //删除 （确保在有值， 并且删除成功时才触发监听事件）
                    console.log("删除")
                }
                return ok;
            }

        })

        return p;
    }
    // return new Proxy(obj, {
    //     get(target, key, receiver){
    //         console.log('[get] 读取了属性：', key);
    //         console.log('[target] 读取了属性：', target);
    //         console.log('[receiver] 读取了属性：', receiver);
    //         return Reflect.get(target, key, receiver);
    //     },
    
    //     set(target, key, value, receiver){
    //         //属性不同的时候才会触发
    //         const oldVal = Reflect.get(target, key, receiver);
    //         const changed = oldVal !== value;
    //         if(changed){
    //             console.log('[set] 设置了新属性：', key, value, "旧的=>", key, oldVal);
    //         }
    //         const ok = Reflect.set(target, key, value, receiver);
    //         if(ok && changed){
    //             //在set 设置成功并且 是新的值（changed为true）才返回
    //             onchange(key, value, oldVal)
    //         }
    //         return ok;
    //         // if(target[key] !== value){
    //         //  console.log('[set] 设置了新属性：', key, value, "旧的=>", key, oldVal);
    //         // }
    //         //return Reflect.set(target, key, value, receiver)
    //     },
        
    //     deleteProperty(target, key){
    //         const hadKey = Reflect.has(target, key);
    //         const oldVal = target[key];
    //         const ok = Reflect.deleteProperty(target, key);
    //         if(ok && hadKey){
    //             onchange(key, undefined, oldVal)
    //         }
            
    //         return ok;
    //     }

    // })
}
    

// let a = new Reactive ("ss", 11);
// let p=new myProxy();
let r = new Reactive(obj, 
    (key, value, oldVal)=>{
    console.log('[onchange] 改变了新属性：', key, value, "旧的=>", key, oldVal);
})
// myProxy.age = 13; 
// console.log(myProxy.name)
r.age=122;
r.age1=122;
delete r.age
// console.log(r)


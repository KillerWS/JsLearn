// 有一个栈stack， 
class myStack{
    constructor(){
       this.list = null 
    }

    push(){
    }

    pop(){
    }

}

let stack1 = new myStack()
// 用栈实现队列， 先进先出的效果, 不能用数组方法

//使得 push的obj 始终处在栈顶

//
let demo = [1,2,3,4,5]


const len = stack1.size();

let stack2 = new myStack()
const myQueue = {
    "enter": function(obj){
        // 从

    },
    "leave": function(obj){
        if(stack1.size() === len){
            let firstObj ;
            for(let i=0;i<len;i++){
                stack2.push(stack1.pop());
                if(i === len-1){
                    firstObj = stack1.pop()
                }
            }
            return firstObj;
        }else{
            // 不是第一个栈底元素
            return stack2.pop();
        }
    }

}
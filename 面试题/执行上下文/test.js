var obj1 = {  a: 1}
var a  =-1;
var obj2 = {  
    a: 2,  
    //普通的
    foo1: function () {
      console.log(this)     
      console.log(this.a)  
    }, 
    //箭头的 
    foo2: ()=>{
      console.log(this)
    },
    foo3: function () {  
         setTimeout(function () {      
             console.log(this)      
             console.log(this.a)    
          }, 0)  
    },
    //嵌套函数的独立调用
    foo4: function () { 
      var that  = this;
      function foo4X(){
        console.log(that.a)   
        //this.a = 4;
      }
      foo4X()
      
},
    
}
// var a = 3
// obj2.foo1()
obj2.foo1()
// let arr = [1,2,3]
// console.log(typeof arr)
// var b = obj2.foo1;
// b();


// function a1(){
//   a1 = 1;
//   function a2(){
//     console.log(this)  
//   }
//   console.log(this)
//   //a2()
// }

// var tmp = new a1()
// tmp()
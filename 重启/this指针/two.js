// var name = "global";

// function Person(name) {
//   this.name = name;
//   this.say1 = function () {
//     console.log("say1:", this.name);
//   };
//   this.say2 = () => {
//     console.log("say2:", this.name);
//   };
// }

// Person.prototype.say3 = function () {
//   console.log("say3:", this.name);
// };

// const obj1 = new Person("obj1");

// obj1.say1();           // A
// obj1.say2();           // B
// obj1.say3();           // C

// const obj2 = { name: "obj2" };
// obj2.say1 = obj1.say1;
// obj2.say2 = obj1.say2;
// obj2.say3 = obj1.say3;

// obj2.say1();           // D
// obj2.say2();           // E
// obj2.say3();           // F

// const sayFn = obj1.say1;
// sayFn();               // G

// setTimeout(obj1.say2, 0); // H

// const obj3 = new Person("obj3");
// const temp = new obj3.say1(); // I


const xx = {
    name : "xx",
    greet : function () {
        console.log("say1:", this.name);
      },
      greetArrow : () => {
        console.log("say2:", this.name);
      },

}


xx.greet();
// xx.greetArrow();

let a= new xx();
a.greet()
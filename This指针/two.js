function greet(message, sign) {
    console.log(`${message}, ${this.name}${sign}`);
}

const person = { name: "Alice" };

//call 方法调用一个函数，
//其具体的第一个参数将作为该函数运行时的this，之后的参数将依次作为函数的参数传递。
// 使用 call 方法调用 greet，设定 this 的指向为 person，传递其他参数
greet.call(person, "Hello", "!");


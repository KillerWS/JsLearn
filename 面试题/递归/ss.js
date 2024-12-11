// function sum(x) {
//     const adder = (y) => sum(x + y);
//     adder.value = () => x;
//     return adder;
//   }

// function sum(x) {
//     function adder(y) {
//       return sum(x + y);
//     }
//     adder.value = function () {
//       return x;
//     };
//     return adder;
// }


function sum(x){
    function add(y){
        return sum(x+y);
    }
    add.value = function(){
        return x;
    }
    function print(){
        console.log("ss");
    }
    return add;

}

console.log(sum(1)(2)(3).value()); // 输出 6
console.log(sum(5)(10)(-3).value()); // 输出 12
let a  =sum(1)
a.print()

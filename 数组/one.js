const array = [1, 2, 3, 4, 5];


//for of 循环
for (const item of array) {
  if (item === 3) {
    break; // 跳出循环
  }
  console.log("for of循环：", item); // 处理数组元素
}

//foreach循环


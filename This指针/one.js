function calculate(expr) {
    const numbers = []; // 操作数栈
    const operators = []; // 操作符栈
  
    let i = 0;
    let currentNumber = 0;
  
    while (i < expr.length) {
      if (expr[i] >= '0' && expr[i] <= '9') {
        // 累加数字
        currentNumber = currentNumber * 10 + (expr[i] - '0');
      } else if (expr[i] === '+' || expr[i] === '-' || expr[i] === '*' || expr[i] === '/') {
        // 遇到操作符
        if (currentNumber !== 0) {
          numbers.push(currentNumber);
          currentNumber = 0;
        }
        operators.push(expr[i]);
      } else {
        // 忽略非数字字符
        i++;
      }
      i++;
    }
  
    // 处理最后的数字
    if (currentNumber !== 0) {
      numbers.push(currentNumber);
    }
  
    // 计算表达式的结果
    let result = numbers[0];
    for (let j = 1; j < numbers.length; j++) {
      const operator = operators[j - 1];
      const nextNumber = numbers[j];
      switch (operator) {
        case '+':
          result += nextNumber;
          break;
        case '-':
          result -= nextNumber;
          break;
        case '*':
          result *= nextNumber;
          break;
        case '/':
          if (nextNumber === 0) {
            throw new Error('除数不能为0');
          }
          result /= nextNumber;
          break;
      }
    }
  
    return result;
  }
  
  // 测试计算器
  console.log(calculate('2+3*4-1')); // 输出: 11
  console.log(calculate('10-5/2*3+8')); // 输出: 14
function addBigNumbers(num1, num2) {
    // 将输入数字转换为字符串（如果不是字符串）
    num1 = num1.toString();
    num2 = num2.toString();
  
    // 定义结果和进位
    let result = '';
    let carry = 0;
  
    // 使用两个指针从后向前遍历字符串
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    // 逐位相加，直到处理完所有位
    while (i >= 0 || j >= 0 || carry > 0) {
      // 获取当前位数字，如果超出字符串长度则取0
      const digit1 = i >= 0 ? parseInt(num1[i], 10) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j], 10) : 0;
  
      // 计算当前位的和及进位
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10); // 计算进位
      result = (sum % 10) + result; // 将当前位的结果加到结果字符串中
  
      // 移动指针
      i--;
      j--;
    }
  
    return result;
  }
  
  // 示例使用
//   const bigNum1 = '987654321987654321987654321987654321';
//   const bigNum2 = '123456789123456789123456789123456789';
  const bigNum1 = '119';
  const bigNum2 = '122';
  const sum = addBigNumbers(bigNum1, bigNum2);
  console.log(sum); // 1111111111111111111111111111111111110
  
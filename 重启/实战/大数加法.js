function addBigNumbers(num1, num2){
    // 将输入数字转换为字符串（如果不是字符串）
    num1 = num1.toString();
    num2 = num2.toString();

    // 定义结果和进位
    let result = '';
    let carry = 0; // carry 只能是0或者1， 因为是进位

    // 使用两个指针从后向前遍历字符串
    let i = num1.length - 1;
    let j = num2.length - 1;
    while(i>=0 || j >= 0 || carry > 0){
        const digit1 = i >=0 ? parseInt(num1[i]) : 0;
        const digit2 = j >=0 ? parseInt(num2[j]) : 0;

        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum/10); //计算进位
        result =  (sum % 10) + result ; //其实每次result 都不是正确结果， 进位的信息在carry中保存着
        i--;
        j--;
    }
    return result;
    // 逐位相加，直到处理完所有位
}


  // 示例使用
//   const bigNum1 = '987654321987654321987654321987654321';
//   const bigNum2 = '123456789123456789123456789123456789';
const bigNum1 = '119';
const bigNum2 = '122';
const sum = addBigNumbers(bigNum1, bigNum2);
console.log(sum); // 1111111111111111111111111111111111110
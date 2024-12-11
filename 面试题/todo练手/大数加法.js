function addBigNumbers(num1, num2){
    num1=num1.toString();//转化为字符串（如果不是的话）
    num2 = num2.toString();

     // 定义结果和进位
     let result = '';
     let carry = 0;

     let i= num1.length-1;
     let j = num2.length-1;
    while(i>=0 || j>=0 || carry>0){
        let dig1 = i>=0 ? parseInt(num1[i]) : 0;
        let dig2 = j>=0 ? parseInt(num2[j]) : 0;
        
        const sum = dig1 + dig2 +carry;

        carry = Math.floor(sum/10);
        i--;
        j--;
        result=sum%10 + result;
        console.log(result)
    }

    return result;

}


const bigNum1 = '179';
const bigNum2 = '124';
const sum = addBigNumbers(bigNum1, bigNum2);
console.log(sum); // 1111111111111111111111111111111111110

console.log(5%10)
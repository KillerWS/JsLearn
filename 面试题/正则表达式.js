var str = "google runoob taobgoogleao";
const regex = /g.*e/;
const isMatch = str.match(regex);
console.log(isMatch); // 输出：["google", index: 0, input: "google runoob taobao", groups: undefined]
var arr=[2,0,6,1,77,0,52,0,25,7]
var newArr=[]

for(var i=0;i<arr.length;i++){
    if(0!=arr[i]){
        newArr[newArr.length] = arr[i];

    }
}
console.log(newArr)
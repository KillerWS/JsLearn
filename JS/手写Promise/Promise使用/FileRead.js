
const fs=require('fs');
fs.readFile('./JS/手写Promise/Promise使用/短剑重铸之日.txt', (err, data)=>{
    if(err) throw err;

    console.log(data)
})
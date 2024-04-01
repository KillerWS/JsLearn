console.log("1")

setTimeout(()=>{
    Promise.resolve().then(()=>{
        console.log(2) 
    });
    console.log(3)
}, 0)

new Promise((reslove) =>{
    console.log(4)
    reslove();
}).then(()=> {
    console.log(5);
});

console.log(6)

//1 4 6 5 3 2 
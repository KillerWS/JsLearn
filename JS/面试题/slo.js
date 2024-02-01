


//红灯，3秒后绿灯，2s后黄灯, 1s后依次往复

const solve =async(data)=>{
    while(true){
        console.log("红灯")
        sleep(3000, '绿灯')
        sleep(2000,'黄灯')
        setInterval(()=>{
        }, 1000)
    }
}

function sleep(time,data){
    setInterval(()=>{
        console.log(data)
    }, time)
};

solve()
//红灯，3秒后绿灯，2s后黄灯, 1s后依次往复
// var p= new Promise(()=>{
//     console.log("红灯")

//     while(true){
        
//         let a = setInterval(()=>{
//             resolve('绿灯')
//         }, 3000)
//         let b = setInterval(()=>{
//             resolve('黄灯')
//         }, 2000)
        
//         setInterval(()=>{
            
//         }, 1000)
//     }
    
    
// })

// p.then((value)=>{
//     console.log(value)
//     //clearInterval()
// })

// function(){
//     setInterval

// }
    
// var pro=new Promise((re)=>{

// })

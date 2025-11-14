// let last  = performance.now();
// let frame= 0;
// let lastFpsUpdate = performance.now()

// // 每秒更新一次 FPS
// function loop(now){
//     frame++;
//     if(now - lastFpsUpdate >= 1000){
//         console.log(`FPS: ${frame}`);
//         frame = 0;
//     }

//     requestAnimationFrame(loop);
// }


// requestAnimationFrame(loop);

let last = performance.now();
let frame = 0;
let lastFpsUpdate = performance.now();

//注意这个now是浏览器自动传给回调函数loop的一个参数~
//类似于 loop(16.7) // 假设当前帧在第 16.7ms
function loop(now){
    frame++;
    if(now - lastFpsUpdate >= 1000){
        //输出
        frame = 0;
    }

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);


// let last = performance.now();

// let frame=0;
// let lastFpsUpdate = performance.now();


// function loop(now){
//     frame++;
//     if(now - lastFpsUpdate >= 1000){
//         console.log(frame);
//         frame = 0;
//     }
    
//     requestAnimationFrame(loop)

// }


// requestAnimationFrame(loop)
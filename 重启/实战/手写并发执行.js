/**
 * 并发任务控制函数（通用版）
 * @param {Array} tasks - 任务数组（可以是URL字符串或返回Promise的函数）
 * @param {Number} maxNum - 最大并发数
 * @returns {Promise} - 返回所有任务结果的Promise
 */
function concurrentTask1(tasks, maxNum = 2) {
    return new Promise((resolve, reject) => {
        if(tasks.length === 0) {
            resolve([]);
            return;
        }

        const results = [];    // 保存结果
        let index = 0;         // 下一个要执行的任务索引
        let count = 0;         // 已完成的任务数量

        async function sendRequest() {
            if(index === tasks.length) return;
            
            const resultIndex = index;  // 保存当前索引
            const task = tasks[index];  // 获取任务
            index++;                    // 索引前进
            
            try {
                let result;
                // 判断任务类型：如果是函数就执行，如果是字符串就用fetch
                if (typeof task === 'function') {
                    result = await task();
                } else if (typeof task === 'string') {
                    result = await fetch(task);
                } else {
                    throw new Error('任务类型错误，必须是字符串或函数');
                }
                results[resultIndex] = result;
            } catch (error) {
                results[resultIndex] = error;
            } finally {
                count++;
                if(count === tasks.length) {
                    console.log('所有任务完成！');
                    resolve(results);
                }
                sendRequest();
            }
        }

        // 启动初始的并发任务
        const times = Math.min(maxNum, tasks.length);
        for(let i = 0; i < times; i++){
            sendRequest();
        }
    })
}

function concurrentTask(tasks, maxNum = 2){
    return new Promise((resolve, reject)=>{
        if(tasks.length === 0 ){
            resolve([]);
            return;
        }

        const results = []; //保存结果
        let count = 0;
        let index = 0;

        async function sendRequest(){
            if(index === tasks.length) return;
            // if(index === tasks.length) return;
            let task = tasks[index] ; 
            index++;
            try {
                let result;
                if (typeof task === 'function') {
                    result = await task();
                } else if (typeof task === 'string') {
                    result = await fetch(task);
                } else {
                    throw new Error('任务类型错误，必须是字符串或函数');
                }
                results[index] = result;
                // results.push(result);
            } catch (error) {
                // results[index] = error;     
                results.push(error);           
            }finally{
                count++;
                if(count === tasks.length) {
                    console.log('所有任务完成！');
                    resolve(results);
                }
                sendRequest();
            }   

        }
        
        
        let times = Math.min(tasks.length, maxNum);
        for(let i=0;i<times;i++){
            sendRequest();
        }  
    })
}



// ==================== 测试用例 ====================

// 模拟异步任务函数
function createMockTask(id, delay, shouldFail = false) {
    return () => {
        console.log(`[${new Date().toLocaleTimeString()}] 任务${id} 开始执行`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldFail) {
                    console.log(`[${new Date().toLocaleTimeString()}] 任务${id} 失败 (耗时${delay}ms)`);
                    reject(new Error(`任务${id}执行失败`));
                } else {
                    console.log(`[${new Date().toLocaleTimeString()}] 任务${id} 完成 (耗时${delay}ms)`);
                    resolve({ id, delay, result: `任务${id}的结果` });
                }
            }, delay);
        });
    };
}

// ==================== 测试执行 ====================

// 测试1: 正常任务 - 并发数为2
console.log('========== 测试1：正常任务（最多同时2个）==========\n');
const mockTasks1 = [
    createMockTask(1, 1000),
    createMockTask(2, 500),
    createMockTask(3, 800),
    createMockTask(4, 600),
    createMockTask(5, 1200),
    createMockTask(6, 300),
];

concurrentTask(mockTasks1, 2).then(results => {
    console.log('\n✅ 测试1完成！');
    console.log('成功结果:', results.filter(r => !(r instanceof Error)).length);
    console.log('失败结果:', results.filter(r => r instanceof Error).length);
    console.log('预期：任务1和2先开始，其他任务依次启动\n');
}).catch(err => {
    console.error('❌ 出错了:', err);
});

// // 测试2: 包含失败的任务
// setTimeout(() => {
//     console.log('\n========== 测试2：包含失败的任务 ==========\n');
//     const mockTasks2 = [
//         createMockTask(1, 800),
//         createMockTask(2, 400, true), // 这个任务会失败
//         createMockTask(3, 600),
//         createMockTask(4, 300, true), // 这个任务会失败
//         createMockTask(5, 900),
//     ];

//     concurrentTask(mockTasks2, 3).then(results => {
//         console.log('\n✅ 测试2完成！');
//         console.log('成功:', results.filter(r => !(r instanceof Error)).length);
//         console.log('失败:', results.filter(r => r instanceof Error).length);
//         results.forEach((result, index) => {
//             if (result instanceof Error) {
//                 console.log(`任务${index + 1} 失败原因:`, result.message);
//             }
//         });
//     });
// }, 4000);

// // 测试3: 混合任务类型（函数和URL字符串）
// setTimeout(() => {
//     console.log('\n========== 测试3：边界情况（空数组）==========');
//     concurrentTask([], 2).then(results => {
//         console.log('✅ 空数组测试通过，结果:', results);
//     });
// }, 8000);

// // 测试4: 任务数少于并发数
// setTimeout(() => {
//     console.log('\n========== 测试4：任务数(2) < 并发数(5) ==========\n');
//     const smallTasks = [
//         createMockTask(1, 500),
//         createMockTask(2, 300),
//     ];
//     concurrentTask(smallTasks, 5).then(results => {
//         console.log('\n✅ 测试4完成！应该2个任务同时启动');
//         console.log('结果:', results);
//     });
// }, 10000);

// // 测试5: 快速任务测试
// setTimeout(() => {
//     console.log('\n========== 测试5：快速任务测试 ==========\n');
//     const fastTasks = [
//         createMockTask(1, 100),
//         createMockTask(2, 50),
//         createMockTask(3, 150),
//         createMockTask(4, 75),
//     ];
    
//     console.time('快速任务耗时');
//     concurrentTask(fastTasks, 2).then(results => {
//         console.timeEnd('快速任务耗时');
//         console.log('✅ 测试5完成！');
//     });
// }, 13000);
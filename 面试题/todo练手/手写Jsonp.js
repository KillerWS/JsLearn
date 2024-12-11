const express = require('express');
const app = express();

app.get('/api/jsonp', (req, res) => {
  const callback = req.query.callback; // 获取回调函数名
  const data = { message: 'This is JSONP response!' };
  res.send(`${callback}(${JSON.stringify(data)})`);
});

app.listen(3000, () => console.log('JSONP Server running on port 3000'));

<script>
    function handelResponse(data){
        console.log(data);
    }
    const script = document.createElement('script');
    script.src = 'http://localhost:3000/api/jsonp?callback=handleResponse';

</script>

const script = document.createElement('script');

script.src= 'xxx'
script.async = true;

// 
document.body.appendChild(script)

// 请求失败
script.onerror = () => {
    console.error('JSONP 请求失败');
    
    // 清理：移除全局回调函数和 script 标签
    document.body.removeChild(script);

  };

// 请求完成后移除 script 标签
script.onload = () => {
    document.body.removeChild(script);
  };

// ----------------------------
function jsonp(url, params, callbackName){
    return new Promise((resolve, reject)=>{
        //
        const uniqueCallbackName = callbackName || `jsonp_callback_${Date.now()}`;

        // 将回调函数挂载到全局对象
        window[uniqueCallbackName] = (data)=>{
            resolve(data);
            // 清理：移除全局回调函数和 script 标签
            delete window[uniqueCallbackName];
            document.body.removeChild(script);
        }

        //创建script标签
        const script = document.createElement('script');
        script.src = `${url}?${queryString}$callback=${uniqueCallbackName}`
        
        //错误处理
        script.onerror = () => {
            reject(new Error(`JSONP request to ${url} failed`));
            // 清理：移除全局回调函数和 script 标签
            delete window[uniqueCallbackName];
            document.body.removeChild(script);
          };
        
          document.body.appendChild(script);

    })
    


}

// 使用示例
jsonp('https://example.com/api', { key: 'value' }, 'myCallback')
  .then((data) => {
    console.log('成功获取数据:', data);
  })
  .catch((error) => {
    console.error('JSONP 请求失败:', error);
  })
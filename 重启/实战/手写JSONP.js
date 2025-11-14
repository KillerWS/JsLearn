


<script>
    function getData() {
      // 定义全局回调函数
      window.handleResponse = function(data) {
        console.log('收到数据：', data);
        alert('收到数据：' + JSON.stringify(data));
      };

      // 动态创建 script 标签
      const script = document.createElement('script');
      script.src = 'http://localhost:5000/jsonp?callback=handleResponse';
      document.body.appendChild(script);
    }
    
</script>
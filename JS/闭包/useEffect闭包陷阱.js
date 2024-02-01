import React from 'react'
function App() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const timer = setInterval(() => {
        console.log(count);
      }, 1000);
      return () => clearInterval(timer);
    }, []);
    
    const handleClick = () => {
      setCount(count + 1);
    };
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }

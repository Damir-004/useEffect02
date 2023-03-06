import React, { useState, useEffect } from 'react';
function  App(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [count, setCount] = useState(0);

  const mouseMoveHandler = event => {
    setX(event.clientX);
    setY(event.clientY);
  };
  useEffect(() => {
    console.log("componentDidMount");
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      console.log("componentDidUnmount");
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);


  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <p>X position: {x}</p>
      <p>Y position: {y}</p>
    </div>
  );
};
export default App;
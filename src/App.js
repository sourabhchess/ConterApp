import React, { useState } from "react";
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="Up" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <button className="Down" onClick={() => setCount(count - 1)}>
        Click Me 1
      </button>
    </div>
  );
}
export default Example;

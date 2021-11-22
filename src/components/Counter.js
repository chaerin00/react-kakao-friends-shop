import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <button className="prev" onClick={() => setCount(count - 1)}>
        &lt;
      </button>
      <p style={{ width: "50px", textAlign: "center" }} className="page">
        {count}
      </p>
      <button className="next" onClick={() => setCount(count + 1)}>
        &gt;
      </button>
    </div>
  );
};

export default Counter;

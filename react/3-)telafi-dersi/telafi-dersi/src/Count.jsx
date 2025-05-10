import { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="d-flex gap-3 align-items-center">
        <button onClick={() => setCount(count - 1)} className="btn btn-danger">
          -
        </button>

        <span className="fs-3">{count}</span>

        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          +
        </button>
      </div>
    </div>
  );
}

export default Count;

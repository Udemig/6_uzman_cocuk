import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  // Bileşenin ekrana gelmesi
  useEffect(() => {
    console.log(`Bileşen ekrana geldi`);
  }, []);

  // Bileşenin güncellenmesi
  useEffect(() => {
    console.log(`Bileşen güncellendi`);
  }, [count]);

  // Bileşenin ekrandan kaldırılması
  useEffect(() => {
    return console.log(`Bileşen ekrandan gitti`);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex align-items-center gap-4">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          className="btn btn-danger"
        >
          Azalt
        </button>

        <span className="fs-2 fw-bold">{count}</span>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="btn btn-success"
        >
          Arttır
        </button>
      </div>
    </div>
  );
}

export default Counter;

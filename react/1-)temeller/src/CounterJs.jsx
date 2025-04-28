function Counter() {
  let counter = 0;

  console.log("Sayaç:", counter);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex align-items-center gap-4">
        <button
          onClick={() => {
            counter--;
            console.log("Sayaç:", counter);
          }}
          className="btn btn-danger"
        >
          Azalt
        </button>

        <span className="fs-2 fw-bold">{counter}</span>

        <button
          onClick={() => {
            counter++;
            console.log("Sayaç:", counter);
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

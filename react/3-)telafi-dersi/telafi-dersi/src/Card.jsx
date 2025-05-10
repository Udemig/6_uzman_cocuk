import { useEffect, useState } from "react";
function Card({ title, description }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Bileşen ekrana geldi`);
  }, []);

  useEffect(() => {
    return console.log(`Bileşen ekrandan kaldırıldı`);
  }, []);

  useEffect(() => {
    console.log(`Bileşen güncellendi`);
  }, [count]);
  return (
    <div className="card w-50">
      <div className="card-top">
        <img className="w-100" src="https://picsum.photos/201" alt="" />
      </div>
      <div className="card-bottom p-2">
        <h1 className="mt-2">{title}</h1>
        <p>{description}</p>
        <button onClick={() => setCount(count + 1)}>Arttır</button>
      </div>
    </div>
  );
}

export default Card;

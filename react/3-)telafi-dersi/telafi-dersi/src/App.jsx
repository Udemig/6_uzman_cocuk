import Header from "./Header";
import Count from "./Count";
import Card from "./Card";
import { useState } from "react";

function App() {
  const cards = [
    { title: "Title-1", description: "Açıklama-1" },
    { title: "Title-2", description: "Açıklama-2" },
    { title: "Title-3", description: "Açıklama-3" },
  ];
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="App p-5">
      <Header />

      <Count />

      {/* 
      <Card title="Title-1" description="Açıklama-1" />
      <Card title="Title-2" description="Açıklama-2" />
      <Card title="Title-3" description="Açıklama-3" /> */}

      {/* {cards.map((card) => (
        <Card title={card.title} description={card.description} />
      ))} */}

      <button
        onClick={() => setIsShow(!isShow)}
        className="btn btn-secondary m-4"
      >
        Göster // Gizle
      </button>

      {isShow && <Card title="Title-4" description="Açıklama-4" />}
    </div>
  );
}

export default App;

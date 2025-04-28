// Bileşeni ekranda görmek için import et
import Header from "./Header";
import Counter from "./Counter";

import { useState } from "react";
function App() {
  const [isShow, setIsShow] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCounterShow, setIsCounterShow] = useState(false);

  return (
    <div className="p-4 mt-2">
      {/* Header Bileşeni */}
      <Header />
      <button
        onClick={() => setIsCounterShow(!isCounterShow)}
        className="btn btn-secondary text-nowrap mx-5"
      >
        Counter Göster // Gizle
      </button>
      {/* Counter Bileşeni */}
      {isCounterShow && <Counter />}

      {/* Koşullu Renderlama Örneği */}

      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="btn btn-secondary text-nowrap"
      >
        Göster // Gizle
      </button>

      {/* And Operatörü ile renderlama */}
      <div className="mt-5 d-flex gap-4">
        {isShow && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            rerum, labore, voluptas quod, ea facere quis perferendis repellendus
            eum expedita beatae error. Tenetur dolor corporis quae? Illum,
            molestiae! Delectus, tempore?
          </p>
        )}
      </div>

      {/* Ternary Operatör ile renderlama */}

      {isAdmin ? <p>Admin</p> : <p>Normal Kullanıcı</p>}

      {/* LifeCycle */}
    </div>
  );
}

export default App;

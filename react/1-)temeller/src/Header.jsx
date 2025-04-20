/*
* Bir react bileşeni nasıl oluşturulur ?

1.Bir javascript fonksiyonu oluşturulur.Bu fonksiyona verilecek isim büyük harfle başlamalıdır.Bu fonksiyonun ismi ise hangi bileşen oluşturulacaksa bununla ilintili olmalıdır.

2. Bu fonksiyon içerisinde return satırı eklenir.Bu return satırı içerisinde ise Html elemanları oluşturulur.Bu sayede bu bileşen çağırıldığı yerde içerisindeki html'i return eder.

3. Bu bileşeni dosya dışarısına çıkarmak için export edilmelidir.

* Bileşen kullanılacağı yerde import edilir.


*/
import "./Header.css";
import { toast } from "react-toastify";

function Header() {
  const loginFunction = () => {
    toast.success("Giriş işlemi başarılı");
  };
  const registerFunction = () => {
    toast.success("Kayıt işlemi başarılı");
  };

  return (
    <header>
      <h1>LOGO</h1>

      <nav>
        <li>
          <a href="#">Ana Sayfa</a>
        </li>
        <li>
          <a href="#">Hakkımızda</a>
        </li>
        <li>
          <a href="#">İletişim</a>
        </li>
        <li>
          <a href="#">Ürünler</a>
        </li>
      </nav>

      <div className="header-right">
        <button onClick={loginFunction} className="login">
          Giriş Yap
        </button>
        <button onClick={registerFunction} className="register">
          Kayıt Ol
        </button>
      </div>
    </header>
  );
}

// Bu bileşeni dosya dışarısına çıkarmak için export et
export default Header;

import { useState } from "react";
import getWeatherData from "./api";
const Weather = () => {
  // State oluştur
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState();
  const [temp, setTemp] = useState();
  const [feelTemp, setFeelTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();

  const handleSubmit = async (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Input'daki şehir adına eriş
    const cityName = e.target[0].value;

    // Şehir adına göre api isteği at
    const weatherData = await getWeatherData(cityName);

    console.log(weatherData);

    // Gelen veri içerisindeki değerleri state'lere aktar
    setName(weatherData.name);
    setTemp(weatherData.main.temp);
    setFeelTemp(weatherData.main.feels_like);
    setMaxTemp(weatherData.main.temp_max);
    setMinTemp(weatherData.main.temp_min);

    // Sonuçları göster

    setIsShow(true);

    // Input alanını temizle
    e.target.reset();
  };

  console.log(name);
  console.log(temp);
  console.log(feelTemp);
  console.log(maxTemp);
  console.log(minTemp);

  return (
    <div>
      {/*Title  */}
      <h1>Hava Durumu Uygulaması</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Şehir adı giriniz ..." />
        <div>
          <button>Ara</button>
        </div>
      </form>

      {/* Results */}
      {isShow && (
        <div className="results">
          <h3 className="city">{name} </h3>
          <div className="info">
            <p className="degree">Hava Sıcaklığı: {temp} ℃</p>
            <p className="feel-degree">
              <span>Hissedilen Sıcaklık:</span> {feelTemp} ℃
            </p>
            <p className="max-degree">
              <span>Max Sıcaklık:</span> {maxTemp} ℃
            </p>
            <p className="min-degree">
              <span>Min Sıcaklık:</span> {minTemp} ℃
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;

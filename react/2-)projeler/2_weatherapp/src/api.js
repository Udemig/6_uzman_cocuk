const getWeatherData = async (city) => {
  try {
    // Parametre verilen şehir adına göre api isteği at
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0462c30b337632cc213ba696f4c5ff91&units=metric`
    );
    // Gelen veriyi js nesnesine çevir
    const data = await response.json();

    // Api'dan gelen veriyi return et
    return data;
  } catch (error) {
    alert(`Hata: ${error}`);
  }
};

export default getWeatherData;

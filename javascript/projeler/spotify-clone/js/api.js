const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "a18611c9c9msh5bfa08f1405b7ebp1189dfjsn1a97338b2630",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

const getPopular = async () => {
  const url = "https://shazam.p.rapidapi.com/search?term=neffex";

  // Api'a istek at
  const response = await fetch(url, options);

  // Api'dan gelen veriyi js nesnesine çevir
  const data = await response.json();

  // Gelen veriyi uzun uzun yazmak yerine istenen formata dönüştür
  const formattedData = data.tracks.hits.map((item) => item.track);

  return formattedData;
};

export { getPopular };

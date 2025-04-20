const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "a18611c9c9msh5bfa08f1405b7ebp1189dfjsn1a97338b2630",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

// Popüler müzikleri api'dan alan fonksiyon
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

// Aratılan müziği api'dan alan fonksiyon
const searchMusic = async (query) => {
  // Aratılan kelime ile api'a istek at
  const response = await fetch(
    `https://shazam.p.rapidapi.com/search?term=${query}`,
    options
  );

  // Gelen veriyi js nesnesine çevir
  const data = await response.json();

  // Gelen veriyi uzun uzun yazmak yerine istenen formata dönüştür
  const formattedData = data.tracks.hits.map((i) => i.track);

  return formattedData;
};
export { getPopular, searchMusic };

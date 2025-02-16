// Arayüz Elemanları
const elements = {
  form: document.querySelector("form"),
  list: document.querySelector(".list"),
};

// Cart render eden fonksiyon

const renderCard = (songs) => {
  // List elemanının içeriğini sıfırla
  elements.list.innerHTML = "";

  // Şarkıları dön ve herbiri için bir html oluştur

  songs.forEach((song) => {
    // Bir Html oluştur
    const card = document.createElement("div");

    // Oluşturulan Html elemanına card classı ekle
    card.classList.add("card");

    // Bu card classına sahip elemanın içeriğini belirle
    card.innerHTML = ` 
    <figure>
                <img
                  src="${song.images.coverarthq}"
                  alt="card-img"
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
    </figure>
              <div class="card-info">
                <h4>${song.title} </h4>
                <h4>${song.subtitle}</h4>
              </div>`;

    // Oluşturulan card'ları Html listesine ekle
    elements.list.appendChild(card);
  });
};

const renderLoader = () => {
  elements.list.innerHTML = `
  
  <!-- From Uiverse.io by satyamchaudharydev --> 
    <div class="spinner">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

    </div> 
  `;
};

export { elements, renderCard, renderLoader };

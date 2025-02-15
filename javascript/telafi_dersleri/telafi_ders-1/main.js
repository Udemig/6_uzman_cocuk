// * Variables (Değişkenler)

var kursAdı = "Udemig Akademi";

document.write("Kurs Adı:", kursAdı, "<br/>");

var kursAdı = "Emaartech Akademi";

document.write("Kurs Adı:", kursAdı, "<br/>");

// let && const

let isim1 = "Yusuf";

document.write("İsim:", isim1, "<br/>");

// let isim = "Furkan"; isim önceden tanımlandığından bunu tekrardan tanımlamamıza izin vermez

document.write("İsim:", isim1, "<br/>");

const yaş = 23;

// const yaş = 30;  yaş önceden tanımlandığından bunu tekrardan tanımlamamıza izin vermez

document.write("Yaş:", yaş, "<br/>");

let şehir = "Malatya";

document.write("Şehir:", şehir, "<br/>");

şehir = "Ankara";

document.write("Şehir:", şehir, "<br/>");

const ülke = "Türkiye";

document.write("Ülke:", ülke, "<br/>");

// ülke = "Amerika"; const ile tanımlanan değişkenler sabittir değer güncellemesi yapılamaz.

// Javascript'in en güncel versiyonu olan es6 ile birlikte değişken tanımlarken var yerine let ve const kullanırız.Bunun sebebi var ile değişken tanımlarken program içerisinde güvenlik açıkları oluştururuz.Çünkü var ile değişken tanımlarken tanımlı değişkeni yeniden tanımlayabiliriz.Bu bizim için olumsuz bir durumdur.Bunun çözümü içinse let ve const kullanırız.

// let ve const arasındaki fark let ile tanımlanan bir değişkenin içeriğini güncelleyebiliriz.Ama const ile tanımlanan değişkenler sabittir ve içeriğini doğrudan güncellenemez.

let krediNotu = 80;
let kullanıcıAdı = "Furkan";

document.write(
  kullanıcıAdı,
  " isimli kişinin kredi notu: ",
  krediNotu,
  "<br/>"
);

document.write(
  `${kullanıcıAdı} isimli kişinin kredi notu: ${krediNotu} <br/>  `
);

// * Object Destructuring (Obje Dağıtma Yöntemi)

// Bir obje içerisindeki değerlere erişmek için her seferinde objeAdı.[key] şeklinde erişmek bizim için zahmetli olacağından obje içerisindeki değerlere obje dağıtma metodu ile erişebiliriz.

const kişi = {
  isim: "Yusuf",
  soyisim: "YAMAN",
  yaş: 23,
  eposta: "yusufyaman@gmail.com",
  telefon: "0532 123 45 67",
  adres: {
    ülke: "Türkiye",
    şehir: "Malatya",
    semt: "Battalgazi",
    postaKodu: 44102,
  },
};

const { isim, soyisim, eposta, telefon, adres } = kişi;

document.write(`Kişi adı: ${isim} <br/>`);
document.write(`Kişi soyad: ${soyisim} <br/>`);
document.write(`Kişi mail: ${eposta} <br/>`);

async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();

  console.log(data);
}

// getData();

let yazdır = () => {
  document.write(`Udemig akademiden selamlar. <br/>`);
};

yazdır();

let toplamaİşlemi = (sayı1, sayı2) => {
  let toplam = sayı1 + sayı2;

  document.write(`Toplam: ${toplam} <br/>`);
};

toplamaİşlemi(12, 34);
toplamaİşlemi(12, 89);

// let ortalamaHesapla = (s1, s2) => {
//   let ortalama = (s1 + s2) / 2;

//   return ortalama;
// };
let ortalamaHesapla = (s1, s2) => (s1 + s2) / 2;

document.write(`Ortalama: ${ortalamaHesapla(10, 6)} <br/>`);

class Öğrenci {
  constructor(puan) {
    this.isim = "Furkan";
    this.soyisim = "Çulha";
    this.yaş = 15;
    this.puan = puan;
  }

  öğrenciTanıt() {
    document.write(`Öğrenci adı: ${this.isim} Öğrenci soyad: ${this.soyisim}`);
  }
}

const öğrenci = new Öğrenci(100);

öğrenci.öğrenciTanıt();

console.log(öğrenci.puan);

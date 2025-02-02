// * Spread Operatör

import { admin } from "./helpers.js";

// Spread Operatör bir dizi veya obje içerisinde veri kaybını önlemek için kullanılır.

const array1 = [1, 2, 3, 4, 5];
const array2 = ["Yusuf", "Beyza", "Ali", "Buse", "Melis"];

const array3 = [...array1, ...array2];

const object = {
  name: "Yusuf",
  surname: "YAMAN",
  age: 22,
  title: "Full Stack Developer",
};

const object2 = { ...object, city: "Malatya" };

// * Class Yapısı

// Bir clasın oluşturulması

class Araba {
  constructor(marka, model, yıl, yakıtTürü) {
    this.marka = marka;
    this.model = model;
    this.yıl = yıl;
    this.yakıtTürü = yakıtTürü;
  }

  tanit() {
    document.write(`Araç markası: ${this.marka} Araç modeli ${this.model} `);
  }
}

// Bir clasın örneğinin alınması
const araba = new Araba("BMW", "M3", 2018, "Benzinli");

// console.log(araba);

// araba.tanit();

class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getProducts(endpoint, parametre) {
    fetch(`${this.baseURL}/${endpoint}/${parametre}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
}

const api = new API("https://fakestoreapi.com");

// console.log(api);

// api.getProducts("products", "1");

// Döngüler

// Tekrar gerektiren işlemleri gerçekleştirmek için kullanılan yapılara döngüler denir.

// For

for (let i = 0; i < 10; i++) {
  document.write(`Selamlar Javascript <br/>`);
}

document.write(`--------------------------------------------- <br/>`);

// While

let sayı = 1;

while (sayı < 10) {
  document.write(`Selamlar Malatya <br/>`);

  // Döngüyü güncelleyecek bir komut vermeliyiz
  sayı++;
}

document.write(`--------------------------------------------- <br/>`);

// Do While

let sayı2 = 2;

do {
  document.write(`Udemig akademiden selamlar <br/>`);
  sayı2++;
} while (sayı2 < 10);

document.write(`--------------------------------------------- <br/>`);

// * For of Döngüsü

// Bir dizinin elemanlarını dönmek için kullanılır.

const kullanıcılar = ["Pelin", "Ali", "Burak", "Beyza", "Merve"];

for (const kullanıcı of kullanıcılar) {
  document.write(`Hoşgeldin ${kullanıcı} <br/>`);
}

const users = [
  {
    id: 1,
    name: "Emre",
    surname: "KAYA",
    email: "emrekaya@gmail.com",
    point: 9500,
  },
  {
    id: 2,
    name: "Zeynep",
    surname: "YILMAZ",
    email: "zeynepyilmaz@gmail.com",
    point: 8700,
  },
  {
    id: 3,
    name: "Burak",
    surname: "DEMİR",
    email: "burakdemir@gmail.com",
    point: 7800,
  },
  {
    id: 4,
    name: "Ayşe",
    surname: "ÇELİK",
    email: "aysecelik@gmail.com",
    point: 6900,
  },
  {
    id: 5,
    name: "Mert",
    surname: "ÖZTÜRK",
    email: "mertozturk@gmail.com",
    point: 6000,
  },
  {
    id: 6,
    name: "Elif",
    surname: "KAPLAN",
    email: "elifkaplan@gmail.com",
    point: 5100,
  },
  {
    id: 7,
    name: "Can",
    surname: "ŞAHİN",
    email: "cansahin@gmail.com",
    point: 4200,
  },
  {
    id: 8,
    name: "Deniz",
    surname: "GÜLER",
    email: "denizguler@gmail.com",
    point: 3300,
  },
  {
    id: 9,
    name: "Hakan",
    surname: "TAŞ",
    email: "hakantas@gmail.com",
    point: 2400,
  },
  {
    id: 10,
    name: "Melisa",
    surname: "ERDOĞAN",
    email: "melisaerdogan@gmail.com",
    point: 1500,
  },
];

// console.log(`Kullanıcılar:`);

// console.table(users);

// Bu dizideki puanı 5000'den büyük olan elemanları getir

const filtredUsers = users.filter((user) => user.point > 5000);

// console.log(`Puanı 5000'den Büyük Kullanıcılar:`);

// console.table(filtredUsers);

// Bir dizinin elemanlarını filtrelemek için filter metodu kullanılır.Bu metot ()=>{} içerisinde hangi şarta bağlı olarak elemanların filtrelenmesi isteniyorsa bunu belirtmemizi ister.

// todo: User dizisi içerisinde puanı 3000'den küçük kullanıcıları filtrele

const filtredUsers2 = users.filter((user) => user.point < 3000);

// console.log(`Puanı 3000'den küçük kullanıcılar`);

// console.table(filtredUsers2);

// * Users dizisi içerisinde id'si 3 olan kullanıcıyı bul

const foundedUser = users.find((user) => user.id === 3);

// console.log(foundedUser);

console.log(admin);

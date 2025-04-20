// * Javascript Değişkenler

// Javascript'de değeri değişen ifadeleri yönetmek için kullanılan yapılara değişken denir.

var name = "Yusuf";

var age = 22;

document.writeln(name + "<br/>");
document.writeln(age + "<br/>");

// let && const

var city = "Malatya";

document.writeln(city + "<br/>");

var city = "Ankara";

// var ile önce tanımlanan bir değişkeni yeniden tanımlayabiliriz.Bu proje içerisinde güvenlik açıklarına sebep olacaktır.Bu yüzden güncel projelerde var anahtar kelimesi yerini let ve const'a bırakmıştır.

document.writeln(city + "<br/>");

let country = "Türkiye";

document.writeln(country + "<br/>");

// let country = "Almanya"; let ile önceden tanımlanan bir değişkeni yeniden tanımlayamayız.

const personNumber = 134;

document.writeln(personNumber + "<br/>");

// const personNumber = 134; const ile önceden tanımlanan bir değişkeni yeniden tanımlayamayız.

// ? let ve const arasındaki fark nedir?

let student = "Ataberk";

document.writeln(student + "<br/>");

student = "Hakan";

document.writeln(student + "<br/>");

const courseName = "Udemig";

document.writeln(courseName + "<br/>");

// courseName = "Emaartech"; const ile tanımlanan değişkenlerin değeri güncellenemez.

document.writeln(courseName + "<br/>");

// let ile tanımlanan değişkenlerin değeri güncellenebilirken const ile tanımlanan değişkenlerin değeri güncellenemez.

// * Arrow  Functions

// Javascript'in güncel sürümüyle birlikte arrow functionsları kullanabiliriz.

// Arrow functionlar özellikle callback functionlar da kullanılan modern bir fonksiyon tanımlama yöntemidir.Bu yöntemle fonksiyon tanımlarken let yada const anahtar kelimesi kullanılır sonrasında bu fonksiyona bir isim verilir.Verilen bu isimden sonra =()=>{} yapısı sırasıyla oluşturulur.Buradaki {} içerisinde fonksiyonun yapacağı işlemler yazılır.

// function calculate(){
//               let number1 = 14;
//               let number2 = 45;

//               let toplam = number1 + number2;

//               document.writeln("Toplam:", toplam, "<br/>");
// }

// ! Bir arrow function tanımlaması
const calculate = () => {
  let number1 = 14;
  let number2 = 45;

  let total = number1 + number2;

  document.writeln("Toplam:", total, "<br/>");
};

calculate();

// ! Bir arrow function'a parametre geçilmesi
const calculate2 = (a, b) => {
  let total = a + b;

  document.writeln("Toplam:", total, "<br/>");
};

calculate2(3, 4);

// ! Bir arrow function içerisinde return kullanımı

// const calculate3 = (x, y) => {
//   let total = x + y;

//   return total;
// };

const calculate3 = (x, y) => x + y;

const toplam = calculate3(23, 55);

console.log(toplam);

# React Nedir ?

- React facebook tarafından oluşturulmuş açık kaynaklı bir javascript kütüphanesidir.Geniş kütüphane desteği,performanslı websiteleri oluşturması sebebiyle react çok popülerdir.

# React Uygulaması Nasıl Oluşturulur ?

- Terminalde `npx create-react-app [proje adı]` komutu çalıştırılır.Bu sayede hazır react template'li bir uygulama oluşturulur.

# React Dosya ve Klasörleri:

1. `node_modules:` Projenin bağımlılıklarını tutan dosyadır.İndirilen paketlere bağlı olarak gerekli bağımlılıklar bu dosya içerisinde tutulur.Bu dosya'ya kesinlikle elle müdahalede bulunmayız.

2. `public:` Projedeki herkes tarafından erişilebilecek dosyaları bir arada tutan klasördür.resimler,...

3. `src:` Bu klasör projemizi geliştirdiğimiz,projenin kaynak klasörüdür.

- App.js:Bu dosya içerisinde yer alan content ekranda render edilir.
- index.js:Bu dosya react projesinin temelini oluşturur.Bu dosya react uygulamasının en önemli dosyasıdır.
- index.css:Bu dosya projedeki ana stillendirmeyi yapmak için kullanılır.

4. `gitignore:` Proje github'a gönderildiğinde github'a gönderilmesi istenmeyen dosyaların isimlerinin tutulduğu dosyadır.

5. `package.json:` Projenin adı,sürümü projede kullanılan kütüphanelerin bağımlılıklarını ve proje ile alakalı bazı komutların yazılı olduğu dosyadır.

6. `package-lock.json`: Proje bağımlılıklarının package.json dosyasına göre daha detaylı(sürüm ile ilgili bilgiler,lisans,...) şekilde yazılı olduğu dosyadır.

# React Uygulaması Nasıl Ayağa Kaldırılır ?

- React uygulamasının ayağa kaldırılması için terminalde`npm start` komutu kullanılır.Bu komutu çalıştırırken terminalin package.json ile aynı dizinde olduğundan emin olmamız gerekir.

# React Component Yapısı

- React'da projeler component mimarisi ile oluşturulur.Bir react component'i temelinde bir javascript fonksiyonudur.Fakat içerisinde html return eder.
- Bir bileşen içerisinde javascript kodu yazılacaksa (değişken,fonksiyon,obje,dizi,... yapıların oluşturulması) bu kodlar bileşen içerisinde return satırının dışarısında yazılır.

# Jsx Nedir ?

- Jsx (Javascript XML) bir dosyada hem html hemde javascript yazılmasını sağlayan react'ın bize sunmuş olduğu bir yapıdır.

- Html-Jsx Farkları:
  -- Html elemanlarına class vermek istersek bunu class diyerek değil className olarak eklememiz gerekir.
  -- label'lara verilen for atribute'ünü htmlFor olarak vermemizi gerekir.
  -- img,input,br,... etiketi gibi self-closing etiketlerde kapanışı belirten "/" işaretinin kullanılması zorunludur.
  -- Jsx dosyasında tüm elemanları kapsayan bir parent element bulunmalıdır.Bu parent eleman gereksinimi karşılamak için "<><>" şeklinde boş bir fragment'da kullanmıza izin verir.

# Bir React Bileşeninin Stillendirilmesi

- İnline Stillendirme: Elemanı satır içinde stillendirme yöntemidir.Html'deki yazımından farklı olarak satır içerisinde style={} oluşturulur.Yazılacak stiller ise bu etiket içerisine {} açılarak yazılır.

- External Stillendirme: Oluşturulacak css dosyalarında stillendirme.Bu yöntemde bir tane css dosyası oluşturulur.İçerisinde stillendirme kodlaması yapılır.Bu dosya içerisinde yazılan kodların geçerli olması için gerekli react component'inde bu dosya import edilir.

- Harici Stillendirme Kütüphaneleri İle Stillendirme:Bootstrap gibi kütüphaneler ile stillendirme yapma yöntemidir.

# React Projesine Nasıl Paket İndirilir ?

- `npm install [paket adı]` komutu ile projeye paketler indirebiliriz.İsenilen paketin adı bu komutta [paket adı] kısmına yazılır.

# State Nedir?

- Bir react bileşeni içerisinde verileri yönetmek için state kullanılır.State kullanılırken:

- - İlk olarak react içerisinde state oluştururmamızı sağlayan metot import edilir.[useState()]

- - useState boş bir diziye atanır. // const [stateAdı,stateGüncelleyenMetot]=useState(Başlangıç_Değeri)

- - Atanan bu boş diziye iki eleman verilir.Birincisi state'in adı ikincisi ise state'i güncelleyecek fonksiyon.

- - State'in başlangıç değeri ise useState() kısmındaki () içerisine yazılır.

- - Devamında bileşen içerisinde state ve state'i güncelleyecek metot çağırılır.

# Koşullu Renderlama:

- Renderlama ekrana elaman basmak demektir.Koşullu renderlama ise bir elemanın bir koşula bağlı olarak renderlanmasıdır.Koşullu renderlanma için iki yöntem vardır:

- - 1. Ternary Operatör(? :): Bir koşul sağlanıyorsa bir elemanı sağlanmıyorsa başka bir elemanı renderlamak için kullanılır.

- - 2. And Operatörü (&&): Bir elemanı koşul sağlanıyorsa renderlamak için kullanılır.Sağlanmıyorsa herhangi bir render işlemi yapılmaz.

# React Lifecycle (Yaşam Döngüsü):

- Tıpkı insanlar gibi react componentleride doğar,gelişir ve ölür.Bir bileşenin bu aşamalarını izleyerek bileşen içerisindeki durumları yönetebiliriz.

- Bir bileşenin yaşam döngüsünü izlemek için useEffect metodu kullanılır.Bu metot 3 farklı şekilde kullanılır:

- - useEffect(()=>{},[]) ==> Bileşenin ekrana gelme anını izlemek için kullanılır.

- - useEffect(()=>{},[bağımlılık]) ==> Bir bileşenin güncellenme anını izlemek için kullanılır.

- - useEffect(()=>{return },[]) ==> Bir bileşenin ekrandan kaldırılma anını izlemek için kullanılır.

- useEffect'i kullanmak için ilk olarak bu metodu react içerisinden import etmemiz gerekir.Bu metot bizden bir fonksiyon birde bağımlılık dizisi ister.

import React, { useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import Card from "./Card";

const Form = () => {
  const [books, setBooks] = useState([]);

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Input içerisindeki değere eriş
    const bookName = e.target[0].value;

    // Input'un boş olma durumunu kontrol et
    if (!bookName) {
      toast.info("Eklemek istediğiniz kitap adını giriniz !");

      return;
    }

    // Eklenecek kitap bilgileri için bir kitap objesi oluştur
    const newBook = {
      id: v4(),
      date: new Date()
        .toLocaleDateString("tr", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replaceAll(".", "/"),
      bookName,
    };

    // Books dizisine oluşturulan newBook objesini ekle
    setBooks([...books, newBook]);

    // Input'un içeriğini temizle
    e.target.reset();

    // Kullanıcıya bildirim gönder
    toast.success("Kitap başarıyla eklendi");
  };

  // Sil butonuna tıklayınca çalışacak fonksiyon
  const handleDelete = (delete_id) => {
    // Id'si bilinen elemanı diziden kaldır
    const filtredBooks = books.filter((book) => book.id != delete_id);

    // State'i güncelle
    setBooks(filtredBooks);

    // Kullanıcıya bildirim gönder
    toast.error("Kitap başarıyla silindi");
  };

  return (
    <>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center mt-5 gap-4"
      >
        <input
          placeholder="Kitap adı giriniz ..."
          className="form-control w-50 shadow"
          type="text"
        />
        <button className="btn btn-warning shadow">Ekle</button>
      </form>

      {/* Books Cards */}

      <div className="container">
        {books.map((book, key) => (
          <Card key={key} book={book} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default Form;

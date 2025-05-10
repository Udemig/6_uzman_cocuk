import { RiDeleteBin5Fill } from "react-icons/ri";
const Card = ({ book, handleDelete }) => {
  // Bir react bileşenini dinamik hale getirmek için ilk olarak bileşen prop geçilir.Sonrasında ise bu prop bileşen adının yanında yazılan () içerisinde karşılanır.Karşılama işleminden sonra bu prop bileşen içerisinde gereken şekilde kullanılabilir.

  return (
    <div className="d-flex justify-content-between p-4 border mt-4 rounded align-items-center shadow">
      {/* Info */}
      <div>
        <h3>{book.bookName}</h3>
        <p className="lead">{book.date} </p>
      </div>

      {/* Button */}
      <button onClick={() => handleDelete(book.id)} className="btn btn-danger">
        <RiDeleteBin5Fill className="fs-3" />
      </button>
    </div>
  );
};

export default Card;

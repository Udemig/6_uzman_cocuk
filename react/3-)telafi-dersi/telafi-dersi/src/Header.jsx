function Header() {
  return (
    <header className="d-flex align-items-center justify-content-between p-3">
      <img className="logo" src="https://picsum.photos/200" alt="logo" />

      <nav className="d-flex align-items-center gap-4">
        <li className="list-unstyled">
          <a className="text-decoration-none" href="#">
            Ana Sayfa
          </a>
        </li>
        <li className="list-unstyled">
          <a className="text-decoration-none" href="#">
            Hakkımızda
          </a>
        </li>
        <li className="list-unstyled">
          <a className="text-decoration-none" href="#">
            İletişim
          </a>
        </li>
      </nav>

      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-success">Giriş Yap</button>
        <button className="btn btn-warning">Kayıt Ol</button>
      </div>
    </header>
  );
}

export default Header;

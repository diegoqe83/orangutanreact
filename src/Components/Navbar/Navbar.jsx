import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="logo">Orangutan</h1>
        <nav className="navbar">
          <p className="navbar__link">Productos</p>
          <p className="navbar__link">Nosotros</p>
          <p className="navbar__link">Contacto</p>
        </nav>
      </div>
    </header>
  );
};

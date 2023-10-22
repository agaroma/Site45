import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#!" className="logo">
          Room45
        </a>

        <div className="navbar-wrap">
          <ul className="navbar-menu">
            <li>
              <a href="#!">Головна</a>
            </li>
            <li>
              <a href="#!">Новини</a>
            </li>
            <li>
              <a href="#!">Жителі</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

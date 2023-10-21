import './style.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="#!" className="logo">
            Room45
          </a>

          <ul className="nav-list">
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

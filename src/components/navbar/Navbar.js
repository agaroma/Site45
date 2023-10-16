
function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            Room45
          </a>

          <ul className="nav-list">
            <li className="nav-item">
              <a href="./index.html">Головна</a>
            </li>
            <li className="nav-item">
              <a href="./index.html">Новини</a>
            </li>
            <li className="nav-item">
              <a href="./index.html">Жителі</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

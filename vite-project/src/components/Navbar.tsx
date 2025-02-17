import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="navbar-brand nav-link active" aria-current="page" href="home">
                  Home
                </a> */}
              <Link to="home">Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="city" style={{ }}>
                  Cities
                </a> */}
              <Link to="city">Countries</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="blogs">
                  Blogs
                </a> */}
              <Link to="blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link disabled" href="#" aria-disabled="true">
                Disabled
              </a> */}
              {/* <Link to="blogs">Blogs</Link> */}
              <Link to="blogs/create">Add Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

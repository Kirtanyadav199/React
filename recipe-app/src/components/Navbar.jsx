import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        🍴 RecipeBook
      </Link>
      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/recipes"
          className={`nav-link ${location.pathname.startsWith("/recipes") ? "active" : ""}`}
        >
          Recipes
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">
          Cook something <span className="accent">delicious</span> today.
        </h1>
        <p className="hero-sub">
          Simple recipes, real ingredients, zero stress.
        </p>
        <Link to="/recipes" className="hero-btn">
          Browse Recipes →
        </Link>
      </div>

      <div className="categories">
        {[
          { emoji: "🍝", label: "Pasta" },
          { emoji: "🍛", label: "Curry" },
          { emoji: "🥑", label: "Breakfast" },
          { emoji: "🍔", label: "Grilling" },
          { emoji: "🍫", label: "Dessert" },
          { emoji: "🥗", label: "Salad" },
        ].map((cat) => (
          <Link to="/recipes" key={cat.label} className="cat-chip">
            <span>{cat.emoji}</span> {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

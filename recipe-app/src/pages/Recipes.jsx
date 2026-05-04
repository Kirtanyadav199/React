import { Link } from "react-router-dom";
import recipes from "../data/recipes";

function Recipes() {
  return (
    <div className="page">
      <h2 className="page-title">All Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="recipe-card">
            <div className="card-emoji">{recipe.emoji}</div>
            <div className="card-body">
              <span className="card-category">{recipe.category}</span>
              <h3 className="card-title">{recipe.title}</h3>
              <p className="card-desc">{recipe.description}</p>
              <div className="card-meta">
                <span>⏱ {recipe.time}</span>
                <span className={`diff diff-${recipe.difficulty.toLowerCase()}`}>
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recipes;

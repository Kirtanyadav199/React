import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetail() {
  // useParams grabs the :id from the URL
  const { id } = useParams();

  // Find the recipe whose id matches the URL param
  // Note: URL params are strings, so we convert id to a number
  const recipe = recipes.find((r) => r.id === Number(id));

  // Handle case where recipe doesn't exist
  if (!recipe) {
    return (
      <div className="page not-found">
        <h2>Recipe not found 😕</h2>
        <p>No recipe exists with id: <strong>{id}</strong></p>
        <Link to="/recipes" className="hero-btn">← Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="page detail-page">
      <Link to="/recipes" className="back-link">← All Recipes</Link>

      <div className="detail-header">
        <span className="detail-emoji">{recipe.emoji}</span>
        <div>
          <span className="card-category">{recipe.category}</span>
          <h1 className="detail-title">{recipe.title}</h1>
          <p className="detail-desc">{recipe.description}</p>
          <div className="card-meta">
            <span>⏱ {recipe.time}</span>
            <span className={`diff diff-${recipe.difficulty.toLowerCase()}`}>
              {recipe.difficulty}
            </span>
          </div>
        </div>
      </div>

      <div className="detail-body">
        <div className="section">
          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Instructions</h2>
          <ol className="step-list">
            {recipe.steps.map((step, i) => (
              <li key={i}>
                <span className="step-num">{i + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;

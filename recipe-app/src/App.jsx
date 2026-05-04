import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar appears on every page because it's outside <Routes> */}
      <Navbar />

      <main className="main-content">
        {/* Routes is the container — only ONE route renders at a time */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          {/* Dynamic route — :id can be any value (1, 2, 3 ...) */}
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

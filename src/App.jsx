import { useState, useEffect } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import { Preferences } from "@capacitor/preferences";
import "./App.css";


function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  // Load dữ liệu từ local storage khi mở app
  useEffect(() => {
    const loadData = async () => {
      const { value } = await Preferences.get({ key: "recipes" });
      if (value) setRecipes(JSON.parse(value));
    };
    loadData();
  }, []);

  // Lưu vào local storage mỗi khi thay đổi
  useEffect(() => {
    Preferences.set({
      key: "recipes",
      value: JSON.stringify(recipes),
    });
  }, [recipes]);

  const addRecipe = (recipe) => setRecipes([...recipes, recipe]);

  const updateRecipe = (index, updatedRecipe) => {
    const newList = [...recipes];
    newList[index] = updatedRecipe;
    setRecipes(newList);
  };

  const deleteRecipe = (index) =>
    setRecipes(recipes.filter((_, i) => i !== index));

  const filteredRecipes = recipes.filter((r) =>
    r.ingredients.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📖 Recipe Book</h1>
      <RecipeForm onAdd={addRecipe} />
      <SearchBar search={search} setSearch={setSearch} />
      <RecipeList
        recipes={filteredRecipes}
        onUpdate={updateRecipe}
        onDelete={deleteRecipe}
      />
    </div>
  );
}

export default App;

import { useState } from "react";

export default function RecipeForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title, ingredients, instructions });
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-2 border rounded">
      <input
        type="text"
        placeholder="Tên món ăn"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-1 w-full mb-2"
      />
      <textarea
        placeholder="Nguyên liệu"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="border p-1 w-full mb-2"
      />
      <textarea
        placeholder="Cách làm"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="border p-1 w-full mb-2"
      />
      <button className="bg-green-500 text-white px-3 py-1 rounded">
        ➕ Thêm công thức
      </button>
    </form>
  );
}

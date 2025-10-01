import { useState } from "react";

export default function RecipeList({ recipes, onUpdate, onDelete }) {
  const [editIndex, setEditIndex] = useState(null);
  const [tempRecipe, setTempRecipe] = useState(null);

  const handleEdit = (index, recipe) => {
    setEditIndex(index);
    setTempRecipe(recipe);
  };

  const handleSave = () => {
    onUpdate(editIndex, tempRecipe);
    setEditIndex(null);
    setTempRecipe(null);
  };

  return (
    <div>
      {recipes.map((r, i) => (
        <div key={i} className="border p-2 mb-2 rounded">
          {editIndex === i ? (
            <>
              <input
                value={tempRecipe.title}
                onChange={(e) =>
                  setTempRecipe({ ...tempRecipe, title: e.target.value })
                }
                className="border p-1 w-full mb-1"
              />
              <textarea
                value={tempRecipe.ingredients}
                onChange={(e) =>
                  setTempRecipe({ ...tempRecipe, ingredients: e.target.value })
                }
                className="border p-1 w-full mb-1"
              />
              <textarea
                value={tempRecipe.instructions}
                onChange={(e) =>
                  setTempRecipe({ ...tempRecipe, instructions: e.target.value })
                }
                className="border p-1 w-full mb-1"
              />
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              >
                💾 Lưu
              </button>
            </>
          ) : (
            <>
              <h2 className="font-bold">{r.title}</h2>
              <p><b>Nguyên liệu:</b> {r.ingredients}</p>
              <p><b>Cách làm:</b> {r.instructions}</p>
              <button
                onClick={() => handleEdit(i, r)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                ✏️ Sửa
              </button>
              <button
                onClick={() => onDelete(i)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                🗑️ Xóa
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import "./pages/CSS/Practice1.css";
const Practice1 = () => {
  const Recipies = [
    {
      id: 1,
      name: "Red Sauce Pasta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwg6dBVvCs0a-neE0qzDeuhVErNzc9uPC8Uw&s",
      ingredients: ["Pasta", "Tomato Sauce", "Garlic", "Pepper", "Oregano"],
      instructions: ["Boil water", "Add pasta", "Add sauce", "Cook pasta"],
      desc: "Red Sauce Pasta DESCRIPTION",
    },
    {
      id: 2,
      name: "White Sauce Pasta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPI3U-na4CXYTEUwr_ElZOMhpdR9gjx9nDg&s",
      ingredients: ["Pasta", "Milk", "Garlic", "Pepper", "Oregano"],
      instructions: ["Boil water", "Add pasta", "Add sauce", "Cook pasta"],
      desc: "White Sauce Pasta DESCRIPTION",
    },
    {
      id: 3,
      name: "Pesto Pasta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1F0Faj0LvWgVv3W25o4GxWibv8B340LN4hg&s",
      ingredients: ["Pasta", "Pesto", "Garlic", "Pepper", "Oregano"],
      instructions: ["Boil water", "Add pasta", "Add sauce", "Cook pasta"],
      desc: "Pesto Pasta DESCRIPTION",
    },
    {
      id: 4,
      name: "Red Sauce Pasta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwg6dBVvCs0a-neE0qzDeuhVErNzc9uPC8Uw&s",
      ingredients: ["Pasta", "Tomato Sauce", "Garlic", "Pepper", "Oregano"],
      instructions: ["Boil water", "Add pasta", "Add sauce", "Cook pasta"],
      desc: "Red Sauce Pasta DESCRIPTION",
    },
    {
      id: 5,
      name: "White Sauce Pasta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPI3U-na4CXYTEUwr_ElZOMhpdR9gjx9nDg&s",
      ingredients: ["Pasta", "Milk", "Garlic", "Pepper", "Oregano"],
      instructions: ["Boil water", "Add pasta", "Add sauce", "Cook pasta"],
      desc: "White Sauce Pasta DESCRIPTION",
    },
    {
      id: 6,
      name: "Pesto Pasta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1F0Faj0LvWgVv3W25o4GxWibv8B340LN4hg&s",
      ingredients: ["Pasta", "Pesto", "Garlic", "Pepper", "Oregano"],
      instructions: ["Boil water", "Add pasta", "Add sauce", "Cook pasta"],
      desc: "Pesto Pasta DESCRIPTION",
    },
  ];

  const [cook, setCook] = useState(null);

  function handleCook(id) {
    setCook(id);
  }

  return (
    <>
      <header>
        <nav className="navbar1">
          <ul type="none">
            <li>Home</li>
            <li>Recipes</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="RecipiesC">
          {Recipies.map((items) => (
            <div className="RCard" key={items.id}>
              <div className="imgC">
                <img src={items.image} alt={items.name} />
              </div>
              <h3>{items.name}</h3>
              <p>Ingredients: {items.ingredients.join(", ")}</p>
              <button onClick={() => handleCook(items.id)}>Cook</button>
              {cook === items.id && (
                <>
                  <p className="instruct">
                    Instructions: {items.instructions.join(". ")}
                  </p>
                  <p className="instruct">Description: {items.desc}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Practice1;

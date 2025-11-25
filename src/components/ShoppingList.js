import { useState } from "react";
import Item from "./Item";
import items from "../data/items";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <select
        name="filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


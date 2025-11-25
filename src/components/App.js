import { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Header />
      <button onClick={handleClick}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ShoppingList />
    </div>
  );
}

export default App;

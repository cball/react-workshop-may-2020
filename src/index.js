import React, { useState, createContext } from "react";
import { render } from "react-dom";
import "./style.css";
import { StarRating } from "./components/StarRating";
import { SearchInput } from "./components/SearchInput";
import { RecipeList } from "./components/RecipeList";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext();

export default function App() {
  const [showRating, setShowRating] = useState(false);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(themes.light);

  function toggleRating() {
    setShowRating(!showRating);
  }

  function toggleTheme() {
    if (theme == themes.light) {
      setTheme(themes.dark);
      return;
    }

    setTheme(themes.light);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <button onClick={toggleTheme}>Change Theme</button>
        <label>
          <input
            type="checkbox"
            defaultChecked={showRating}
            onChange={toggleRating}
          />
          Toggle Ratings
        </label>

        {showRating && <StarRating maxStars={5} rating={3.5} />}

        <SearchInput query={query} placeholder="hello" onQuery={setQuery} />

        <RecipeList query={query} />
      </div>
    </ThemeContext.Provider>
  );
}

render(<App />, document.getElementById("root"));

import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { ThemeContext } from "../..";

async function fetchRecipes(query = "") {
  const result = await fetch(`http://localhost:3001/recipes?q=${query}`);
  return await result.json();
}

/**
 * A list of recipes
 */
export function RecipeList({ query = "" }) {
  const [recipes, setRecipes] = useState([]);
  const debouncedQuery = useDebounce(query, 300);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function doFetch() {
      const data = await fetchRecipes(debouncedQuery);
      setRecipes(data);
    }

    doFetch();
  }, [debouncedQuery]);

  return recipes.map((recipe) => (
    <div
      key={`recipe-${recipe.id}`}
      style={{ background: theme.background, color: theme.foreground }}
    >
      {recipe.title}
    </div>
  ));
}

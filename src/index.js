import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";
import { SearchInput } from "./components/SearchInput";
import { RecipeList } from "./components/RecipeList";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "./hooks/useTheme";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <ThemeProvider>
      <Header />
      <SearchInput query={query} placeholder="hello" onQuery={setQuery} />
      <RecipeList query={query} />
    </ThemeProvider>
  );
}

render(<App />, document.getElementById("root"));

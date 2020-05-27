import React, { useContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    yellow: "#f2a365",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    yellow: "#fcf876",
  },
};

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} children={children} />
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

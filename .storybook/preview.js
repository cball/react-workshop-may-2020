import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, useTheme } from "../src/hooks/useTheme";

const ThemeButton = ({ children }) => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle theme</button>;
};

addDecorator((storyFn) => {
  return (
    <ThemeProvider>
      <ThemeButton />
      {storyFn()}
    </ThemeProvider>
  );
});

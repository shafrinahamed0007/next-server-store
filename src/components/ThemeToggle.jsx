"use client";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ThemeToggle;

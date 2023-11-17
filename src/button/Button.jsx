import React, { useState, useEffect } from "react";
import "../styles/ButtonLight.css";

export function ButtonLight() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <div className="app">
      <label className="switch">
        <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

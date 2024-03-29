import { React, useState, useEffect } from "react";

const getUserTheme = () => {
  const theme = localStorage.getItem("theme") || "dark";
  return theme === "dark" ? true : false;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getUserTheme());

  useEffect(() => {
    document.documentElement.className = `${isDarkMode && "dark"}`;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="container">
      <div className="toggle-btn">
        <input
          type="checkbox"
          id="toggle"
          checked={isDarkMode}
          onChange={(e) => setIsDarkMode(e.target.checked)}
        />
        <label htmlFor="toggle"></label>
      </div>
    </div>
  );
}

export default App;

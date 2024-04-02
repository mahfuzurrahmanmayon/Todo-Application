import { React, useState, useEffect } from "react";

const getUserTheme = () => {
  const theme = localStorage.getItem("theme") || "dark";
  return theme === "dark" ? true : false;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getUserTheme());
  const [newTask,setNewTask] = useState("")
  const [taskList,setTaskList] = useState([])

  useEffect(() => {
    document.documentElement.className = `${isDarkMode && "dark"}`;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    // Add the new task to the tasks list
    
  }

  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }

  return (
    <div>
      <div className="toggle-btn">
        <input
          type="checkbox"
          id="toggle"
          checked={isDarkMode}
          onChange={(e) => setIsDarkMode(e.target.checked)}
        />
        <label htmlFor="toggle"></label>
      </div>

      <div className="container">
        <form onSubmit={handleFormSubmit} className="header">
          <input type="text" value={newTask} onChange={handleInputChange} placeholder="New Task" />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;

import { React, useState, useEffect } from "react";

const getUserTheme = () => {
  const theme = localStorage.getItem("theme") || "dark";
  return theme === "dark" ? true : false;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getUserTheme());
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    document.documentElement.className = `${isDarkMode && "dark"}`;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add the new task to the tasks list
    if (newTask.trim() !== "") {
      setTaskList([...taskList, newTask]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

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
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="New Task"
          />
          <button type="submit">Add</button>
        </form>
        <ul className="tasks-wrapper">
          {taskList.map((task, index) => (
            <li
              className="task"
              style={{ boxShadow: "none", backgroundColor: "rgb(0, 150, 136)" }}
              key={index}
            >
              <p>{task}</p>
              <button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                </svg>
              </button>
              <button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
              </button>
              <button>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
              <button className="btn-colors">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="preventClick"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0112 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 00-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 012.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"></path>
                  <circle cx="6.5" cy="11.5" r="1.5"></circle>
                  <circle cx="9.5" cy="7.5" r="1.5"></circle>
                  <circle cx="14.5" cy="7.5" r="1.5"></circle>
                  <circle cx="17.5" cy="11.5" r="1.5"></circle>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

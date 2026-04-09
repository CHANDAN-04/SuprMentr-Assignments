import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="inputSection">
      <input
        type="text"
        placeholder="Enter your task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="taskInput"
      />

      <button onClick={handleAdd} className="addBtn">
        Add
      </button>
    </div>
  );
}

export default TaskInput;

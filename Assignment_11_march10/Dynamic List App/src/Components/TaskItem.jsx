function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <div className={`taskCard ${task.completed ? "done" : ""}`}>
      <div className="taskLeft">
        <h3>{task.title}</h3>

        <p className="taskDate">📅 {task.date || "No date"}</p>

        <span className={`priority ${task.priority}`}>{task.priority}</span>
      </div>

      <div className="taskActions">
        <button onClick={() => toggleComplete(task.id)}>✔</button>

        <button onClick={() => deleteTask(task.id)}>✖</button>
      </div>
    </div>
  );
}

export default TaskItem;

import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  if (tasks.length === 0) return <p className="empty">No tasks yet..!</p>;

  return (
    <div className="taskList">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;

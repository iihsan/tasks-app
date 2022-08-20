const TaskList = (props) => {
  const {
    update: [update, setUpdate],
    tasks: [tasks, setTasks],
  } = {
    ...(props.state || {}),
  };

  const completeTask = async (id) => {
    var completedItemIndex = tasks.findIndex((task) => task._id == id);
    tasks[completedItemIndex].completed = true;
    var newTasks = [...tasks];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = async (id) => {
    var newTasks = tasks.filter((item) => item._id !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const initializeTasks = async () => {
    var newTasks = [
      { content: "ESirius Task App: by IHSAN", _id: "1", completed: false },
      { content: "Add new Task", _id: "2", completed: false },
      { content: "Complete Me", _id: "3", completed: false },
      { content: "Delete Me", _id: "4", completed: false },
      { content: "Update Me", _id: "5", completed: false },
      {
        content: "Refresh page will save all records",
        _id: "6",
        completed: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <>
      <ul className="task-list mt-3">
        {tasks.length <= 0 ? (
          <>
            <p style={{ textAlign: "center", fontSize: 18 }}>
              Load Sample Tasks
            </p>
            <center>
              <button
                className="btn btn-warning"
                style={{ color: "white" }}
                onClick={() => initializeTasks()}
              >
                Click Here!
              </button>
            </center>

            <li className="task-empty" />
          </>
        ) : (
          tasks.map((task) => (
            <li className="mb-2" key={task._id}>
              <span
                className={
                  task.completed ? "checkbox completed-checkbox" : "checkbox"
                }
                onClick={() => completeTask(task._id)}
              />
              <span
                className={
                  task.completed
                    ? "task-content completed-content"
                    : "task-content"
                }
              >
                {task.content}
              </span>
              <div className="task-control-buttons">
                <span
                  onClick={() => {
                    setUpdate(task);
                    document.getElementById("task-form").value = task.content;
                  }}
                >
                  <i className="far fa-edit" style={{ color: "#3498db" }} />
                </span>
                <span onClick={() => deleteTask(task._id)}>
                  <i
                    className="far fa-trash-alt"
                    style={{ color: "#e74c3c" }}
                  />
                </span>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default TaskList;

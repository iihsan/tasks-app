const TaskForm = (props) => {
  const {
    task: [task, setTask],
    tasks: [tasks, setTasks],
    update: [update, setUpdate],
  } = {
    ...(props.state || {}),
  };

  const addTask = async (data) => {
    var task = { content: data, _id: tasks.length + 1, completed: false };
    setTasks([...tasks, task]);
    setTask(task);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const updateTask = async (data, id) => {
    var completedItemIndex = tasks.findIndex((obj) => obj._id == data._id);
    tasks[completedItemIndex].content = id;
    var newTasks = [...tasks];
    setTasks(newTasks);
    setUpdate(null);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="task-form mt-3">
      <input
        className="form-control"
        id="task-form"
        type="text"
        placeholder="Add your new task"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(k) =>
          k.keyCode === 13
            ? update !== null
              ? updateTask(update, task)
              : addTask(task)
            : null
        }
      />
      {update === null ? (
        <button className="btn btn-info" onClick={() => addTask(task)}>
          <i className="fas fa-plus" />
        </button>
      ) : (
        <button
          className="btn btn-warning"
          onClick={() => updateTask(update, task)}
        >
          <i className="far fa-edit" />
        </button>
      )}
    </div>
  );
};

export default TaskForm;

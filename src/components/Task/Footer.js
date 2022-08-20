const TaskInfo = (props) => {
  const {
    tasks: [tasks, setTasks],
  } = {
    ...(props.state || {}),
  };

  const deleteAllTasks = async () => {
    var newTasks = [];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="task-info mt-3">
      {tasks.length > 0 ? (
        <>
          {tasks.filter((t) => !t.completed).length === 0 ? (
            <p className="d-none d-sm-block">All tasks completed</p>
          ) : (
            <p className="d-none d-sm-block">
              You have {tasks.filter((t) => !t.completed).length} pending tasks
            </p>
          )}
          <button className="btn btn-danger" onClick={() => deleteAllTasks()}>
            Clear All
          </button>
        </>
      ) : null}
    </div>
  );
};

export default TaskInfo;

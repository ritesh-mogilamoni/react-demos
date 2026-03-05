import TaskItem from "./TaskItem"

function TaskList({tasks,deleteTask,changeTaskStatus}) {

  return (
    <div className="flex flex-col gap-4">

      {tasks.length===0 && (
        <p className="text-gray-500 text-center">
          No tasks added
        </p>
      )}

      {tasks.map(task=>(
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
        />
      ))}

    </div>
  )
}

export default TaskList
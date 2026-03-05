function TaskItem({task,deleteTask,changeTaskStatus}) {

  return (
    <div className="border p-4 rounded-lg shadow-sm flex justify-between items-center">

      <div>
        <h3 className={`font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </h3>

        <p className="text-sm text-gray-500">
          Priority: {task.priority || "Not set"}
        </p>

        <p className="text-sm">
          Status: {task.completed ? "Completed" : "Pending"}
        </p>
      </div>

      <div className="flex gap-2">

        <button
          onClick={()=>changeTaskStatus(task.id)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          {task.completed ? "Mark Pending" : "Mark Complete"}
        </button>

        <button
          onClick={()=>deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default TaskItem
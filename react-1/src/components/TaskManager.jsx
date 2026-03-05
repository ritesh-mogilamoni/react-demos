import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import TaskList from "./TaskList"

function TaskManager() {

  const [tasks,setTasks] = useState([])

  const addTask = (taskObj)=>{
    setTasks([...tasks,taskObj])
  }

  const deleteTask = (id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
  }

  const changeTaskStatus = (id)=>{
    setTasks(
      tasks.map(task =>
        task.id===id ? {...task,completed:!task.completed} : task
      )
    )
  }

  const completedCount = tasks.filter(task=>task.completed).length

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-90">

      <h1 className="text-3xl font-bold mb-4 text-center">
        Task Manager
      </h1>

      <div className="flex justify-between mb-6 text-sm text-gray-600">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed: {completedCount}</p>
      </div>

      <AddTaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
      />

    </div>
  )
}

export default TaskManager
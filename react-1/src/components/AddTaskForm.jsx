import { useState } from "react"

function AddTaskForm({addTask}) {

  const [title,setTitle] = useState("")
  const [priority,setPriority] = useState("")
  const [error,setError] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(title===""){
      setError("Title is required")
      return
    }

    if(title.length < 3){
      setError("Title must be at least 3 characters")
      return
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed:false
    }

    addTask(newTask)

    setTitle("")
    setPriority("")
    setError("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mb-6"
    >

      <div>
        <input
          type="text"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {error && (
          <p className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </div>

      <select
        value={priority}
        onChange={(e)=>setPriority(e.target.value)}
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button
        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add Task
      </button>

    </form>
  )
}

export default AddTaskForm
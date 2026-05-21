# Task Manager App 🚀

A simple and responsive **Task Manager Application** built using **React + Vite**.
This project allows users to add tasks, assign priorities, mark tasks as completed, and delete tasks dynamically.

---

## 📌 Project Overview

This project was created to practice and understand the fundamentals of **React.js** including:

* Functional Components
* Props
* State Management using `useState`
* Event Handling
* Form Handling & Validation
* Conditional Rendering
* Dynamic Rendering using `map()`
* Component Reusability
* Tailwind CSS Styling

The app is fully component-based and follows clean React project structure practices.

---

# 🌐 Live Demo

🔗 **Deployed Link:**
`https://task-manager-react-ritesh.vercel.app/`

---

# 📂 Project Structure

```bash
react-1/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AddTaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskManager.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

# ⚙️ Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* JSX

---

# 📦 Packages Installed

## 1️⃣ Create React App using Vite

```bash
npm create vite@latest
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

---

# ▶️ How to Run the Project

## Step 1: Clone the Repository

```bash
git clone <your-repository-link>
```

---

## Step 2: Move into Project Folder

```bash
cd react-1
```

---

## Step 3: Install Dependencies

```bash
npm install
```

---

## Step 4: Start Development Server

```bash
npm run dev
```

---

# ✨ Features

✅ Add New Tasks
✅ Delete Tasks
✅ Mark Tasks as Completed/Pending
✅ Priority Selection
✅ Form Validation
✅ Dynamic Task Count
✅ Completed Task Counter
✅ Responsive UI
✅ Component-Based Architecture

---

# 🧠 Concepts Learned

## 🔹 React Concepts

### Functional Components

Created reusable UI components using functions.

Example:

* `TaskManager`
* `TaskList`
* `TaskItem`
* `AddTaskForm`

---

### useState Hook

Used `useState` to manage:

* Task list
* Form inputs
* Error messages

Example:

```js
const [tasks, setTasks] = useState([])
```

---

### Props

Passed data and functions between components.

Example:

```js
<TaskList
  tasks={tasks}
  deleteTask={deleteTask}
  changeTaskStatus={changeTaskStatus}
/>
```

---

### Event Handling

Handled button clicks and form submission.

Example:

```js
onClick={() => deleteTask(task.id)}
```

---

### Form Handling

Managed form input values using controlled components.

Example:

```js
value={title}
onChange={(e) => setTitle(e.target.value)}
```

---

### Form Validation

Implemented validation such as:

* Empty title check
* Minimum character length check

---

### Conditional Rendering

Displayed messages based on conditions.

Example:

```js
{tasks.length === 0 && (
  <p>No tasks added</p>
)}
```

---

### Rendering Lists using map()

Displayed tasks dynamically.

Example:

```js
tasks.map(task => (
  <TaskItem key={task.id} />
))
```

---

### State Updates

Learned immutable state updates using:

* `map()`
* `filter()`
* Spread operator (`...`)

---

# 📖 Component Explanation

---

## 1️⃣ AddTaskForm.jsx

### Purpose

Handles adding new tasks with validation.

### Learned

* Controlled inputs
* Form submission
* Validation logic
* Local component state

---

## 2️⃣ TaskItem.jsx

### Purpose

Displays individual task details.

### Learned

* Props usage
* Conditional styling
* Button event handling

---

## 3️⃣ TaskList.jsx

### Purpose

Renders all tasks dynamically.

### Learned

* List rendering
* Passing props to child components

---

## 4️⃣ TaskManager.jsx

### Purpose

Main component managing application state.

### Learned

* State lifting
* State management
* Component composition

---

# 🎨 UI Styling

Tailwind CSS was used for styling.

Concepts practiced:

* Flexbox
* Spacing utilities
* Responsive layout
* Hover effects
* Conditional styling
* Shadows and rounded corners

Example:

```js
className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
```

---


# 📸 Screenshots

Example:

```md
<img width="830" height="651" alt="image" src="https://github.com/user-attachments/assets/b9c14a8e-6b0a-443e-bbd5-9890c297615d" />
<img width="601" height="785" alt="image" src="https://github.com/user-attachments/assets/e1f90b0f-6579-4199-b653-e8f5984f68e7" />
<img width="616" height="791" alt="image" src="https://github.com/user-attachments/assets/22df8c7c-a2b2-4244-b885-6c923714c5bc" />

```

---

# 📚 What I Learned From This Project

Through this project, I learned:

* How React applications are structured
* How components communicate using props
* Managing application state effectively
* Building reusable UI components
* Handling forms and validation
* Writing cleaner and modular React code
* Styling React apps using Tailwind CSS
* Using Vite for faster React development

This project helped me strengthen my fundamentals in React and understand real-world component-based application development.

---

# 🙌 Author

**Ritesh Mogilamoni**

GitHub: `https://github.com/ritesh-mogilamoni`

---

# ⭐ Conclusion

This Task Manager project is a React application that demonstrates important React concepts and modern frontend development practices using Vite and Tailwind CSS.

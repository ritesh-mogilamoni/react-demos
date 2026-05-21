# Countries Explorer 🌍

A responsive and interactive **Countries Explorer Application** built using **React + Vite**.
This project allows users to search and explore countries with details such as flags, capital city, population, and region.

---

# 📌 Project Overview

This project was built to practice important React concepts such as:

* Functional Components
* Props
* API Data Handling
* Dynamic Rendering
* Search Functionality
* Debouncing
* Component Reusability
* Responsive Design
* Tailwind CSS Styling

The application fetches and displays country-related information in clean and reusable UI components.

---

# 🌐 Live Demo

🔗 **Deployed Link:**
`https://react-country-exp.vercel.app/`
---

# 📂 Project Structure

```bash
react-2/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── CountryCard.jsx
│   │   ├── CountryList.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

# ⚙️ Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* REST Countries API
* JSX

---

# 📦 Packages Installed

## 1️⃣ Create React Project using Vite

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

# 🌍 API Used

This project uses the **REST Countries API** to fetch country information.

Example API:

```bash
https://restcountries.com/v3.1/all
```

---

# ▶️ How to Run the Project

## Step 1: Clone the Repository

```bash
git clone https://github.com/ritesh-mogilamoni/react-demos
```

---

## Step 2: Move into Project Folder

```bash
cd react-2
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

✅ Display Country Flags
✅ Search Countries Dynamically
✅ Responsive Country Cards
✅ Debounced Search Functionality
✅ Display Capital, Population & Region
✅ Responsive Grid Layout
✅ Component-Based Architecture
✅ Smooth Hover Effects

---

# 🧠 Concepts Learned

---

# 🔹 React Concepts

## Functional Components

Built reusable components like:

* `CountryCard`
* `CountryList`
* `SearchBar`

---

## Props

Passed country data between components using props.

Example:

```js
<CountryCard country={country} />
```

---

## Dynamic Rendering

Displayed country cards dynamically using `.map()`.

Example:

```js
countries.map((country,index)=>(
  <CountryCard key={index} country={country}/>
))
```

---

## Event Handling

Handled user input dynamically using `onChange`.

Example:

```js
onChange={handleChange}
```

---

## Debouncing

Implemented search optimization using `setTimeout()` and `clearTimeout()`.

This prevents unnecessary function calls while typing.

Example:

```js
clearTimeout(timer)

timer = setTimeout(()=>{
  onSearch(value)
},500)
```

---

## Conditional Data Access

Used optional chaining (`?.`) to safely access nested data.

Example:

```js
country.capital?.[0]
```

---

## Component Reusability

Separated UI into reusable and maintainable components.

---

## Responsive Design

Created responsive layouts using Tailwind CSS grid utilities.

Example:

```js
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
```

---

# 📖 Component Explanation

---

# 1️⃣ CountryCard.jsx

## Purpose

Displays details of a single country.

### Displays:

* Country Flag
* Country Name
* Capital
* Population
* Region

### Learned

* Props handling
* Image rendering
* Responsive card UI
* Optional chaining

---

# 2️⃣ CountryList.jsx

## Purpose

Displays all countries in a responsive grid layout.

### Learned

* Dynamic rendering using `map()`
* Passing props to child components
* Grid layouts using Tailwind CSS

---

# 3️⃣ SearchBar.jsx

## Purpose

Handles searching countries dynamically.

### Learned

* Event handling
* Debouncing
* Controlled search logic
* Input handling

---

# 🎨 UI Styling

Tailwind CSS was used for styling the application.

### Styling concepts practiced:

* Grid layouts
* Flexbox
* Hover effects
* Shadows
* Rounded corners
* Responsive design
* Spacing utilities

Example:

```js
className="bg-white rounded shadow hover:shadow-lg transition p-4"
```

---

# 🚀 Future Improvements

Features that can be added later:

* Filter by Region
* Dark Mode
* Country Details Page
* Search Suggestions
* Loading Spinner
* Error Handling
* Pagination
* Favorite Countries Feature
* REST API Optimization

---

# 📸 Screenshots

Add screenshots of your application here.

Example:

<img width="1875" height="872" alt="image" src="https://github.com/user-attachments/assets/7127add8-9495-41b7-aad9-96b103b457a1" />
https://github.com/user-attachments/assets/7127add8-9495-41b7-aad9-96b103b457a1
<img width="1919" height="620" alt="image" src="https://github.com/user-attachments/assets/83aed135-7d58-4180-866d-206e9728964e" />
https://github.com/user-attachments/assets/83aed135-7d58-4180-866d-206e9728964e

---

# 🚀 Deployment

This project can be deployed using:

* Vercel
* Netlify
* GitHub Pages

---

# 📚 What I Learned From This Project

Through this project, I learned:

* How to fetch and display API data
* How React components communicate using props
* Building reusable UI components
* Implementing debouncing for better performance
* Dynamic rendering using `.map()`
* Responsive UI design using Tailwind CSS
* Handling user input effectively
* Structuring React projects properly

This project helped me improve my React fundamentals and understand how real-world frontend applications handle and display API data dynamically.

---

# 🙌 Author

**Ritesh Mogilamoni**

GitHub: `https://github.com/ritesh-mogilamoni`

---

# ⭐ Conclusion

The Countries Explorer project is a beginner-friendly React application that demonstrates API integration, search functionality, reusable components, and responsive UI development using React, Vite, and Tailwind CSS.

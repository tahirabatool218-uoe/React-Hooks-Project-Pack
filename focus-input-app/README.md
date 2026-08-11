# Focus Input App

A simple and responsive React application that demonstrates how to use the `useRef` Hook to access and focus an input element programmatically.

The application provides an input field and a button. When the user clicks the **Focus Input** button, the input field automatically receives focus.

## 🚀 Live Demo

- **Live Demo:** https://focus-input-app.vercel.app

- **GitHub Repository:** https://github.com/tahirabatool218-uoe/React-Hooks-Project-Pack/tree/main/focus-input-app

## ✨ Features

- Input field for entering text
- Focus Input button
- Automatically focuses the input when the button is clicked
- Direct DOM element access using `useRef`
- Simple and beginner-friendly interface
- Reusable React component
- Responsive design
- Clean and simple user interface
- Practical React Hook implementation
- No unnecessary state for controlling input focus

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- React Hooks

## 📁 Project Structure

```text
focus-input-app/
├── public/
├── src/
│   ├── components/
│   │   └── FocusInput/
│   │       ├── FocusInput.jsx
│   │       └── FocusInput.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
````

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/tahirabatool218-uoe/React-Hooks-Project-Pack.git

```

### 2. Navigate to the project folder

```bash
cd focus-input-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the application.

## 🧪 Build and Preview

### Create a production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

## 🧠 What I Practiced

This project was built to practice the React `useRef` Hook through a practical DOM interaction.

The main concepts practiced are:

* Functional Components
* Component-based Architecture
* React `useRef`
* DOM References
* `.current`
* `focus()`
* Event Handling
* `onClick`
* JSX
* Reusable Components
* Responsive CSS

## 📌 Key React Concept

The main purpose of this project is to understand the practical use of React's `useRef` Hook.

### `useRef`

`useRef` is used to create a reference to the input element.

```jsx
const inputRef = useRef(null);
```

The reference is then connected to the input:

```jsx
<input ref={inputRef} />
```

When the user clicks the button, the input element is accessed through `.current` and focused using `.focus()`:

```jsx
inputRef.current.focus();
```

Unlike `useState`, updating a ref does not cause the component to re-render.

## 🔄 Focus Flow

```text
User opens the application
        ↓
Input field is displayed
        ↓
User clicks "Focus Input"
        ↓
Button click handler runs
        ↓
inputRef.current accesses the input
        ↓
.focus() is called
        ↓
Input field receives focus
```

## 🎯 Why `useRef`?

This project demonstrates a common practical use case of `useRef`: interacting with a DOM element directly.

Instead of using state to control whether the input is focused, `useRef` provides a reference to the actual input element.

This helps understand when `useRef` is more appropriate than `useState`.

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* Desktop
* Tablet
* Mobile

The layout, input field, and button adjust appropriately for smaller screens.

## 👩‍💻 Author

**Tahira Batool**

BSCS Student | React Developer

## 📄 License

This project is created for learning and practice purposes.


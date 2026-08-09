# Tree View

A simple and interactive **Tree View application** built with React. It displays nested data in a hierarchical structure and allows users to expand and collapse folders to explore their contents.

## 🚀 Live Demo

**Live Demo:** [Add your Vercel deployment link here]

**GitHub Repository:** https://github.com/tahirabatool218-uoe/React-Hooks-Project-Pack/tree/main/tree-view



## ✨ Features

- Display nested data in a tree structure
- Expand and collapse folders
- Display folders and files with React Icons
- Support multiple levels of nested data
- Recursive component rendering
- Conditional rendering
- Data-driven UI
- Reusable React components
- Simple and clean user interface
- Responsive layout

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- React Hooks
- React Icons

## 📁 Project Structure

```text
tree-view/
├── public/
├── src/
│   ├── components/
│   │   └── TreeView/
│   │       ├── TreeView.jsx
│   │       └── TreeView.css
│   ├── data/
│   │   └── treeData.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tahirabatool218-uoe/React-Hooks-Project-Pack.git
```

### 2. Navigate to the project directory

```bash
cd tree-view
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install React Icons

```bash
npm install react-icons
```

### 5. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🏗️ Build for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🧠 What I Practiced

This project was created to practice important React concepts through a practical project.

- Functional Components
- Component-based Architecture
- Props
- `useState`
- Conditional Rendering
- Event Handling
- `.map()` for Rendering Lists
- Nested Data
- Recursive Components
- Reusable Components
- React Icons

## 📌 Key React Concepts

### 1. Recursive Components

The `TreeView` component renders itself again when an item contains nested children.

This allows the application to display multiple levels of nested data dynamically.

### 2. Nested Data

The tree structure is created using objects with a `children` property.

Example:

```js
{
  id: 1,
  name: "src",
  children: [
    {
      id: 2,
      name: "components",
      children: [
        {
          id: 3,
          name: "Button.jsx"
        }
      ]
    }
  ]
}
```

### 3. State Management

React's `useState` hook is used to control whether a folder is expanded or collapsed.

```js
const [isOpen, setIsOpen] = useState(false);
```

When the user clicks the toggle button, the state changes and the folder contents are shown or hidden.

### 4. Props

The nested data is passed from the parent component to the `TreeView` component using props.

```jsx
<TreeView items={treeData} />
```

### 5. Conditional Rendering

Conditional rendering is used to:

- Show the expand/collapse button only for folders
- Display the appropriate folder icon
- Display file icons for files
- Show nested children only when a folder is expanded

## 📱 Responsive Design

The application uses simple CSS styling and is designed to provide a clean experience across:

- Desktop
- Tablet
- Mobile

## 🎯 Project Purpose

The main purpose of this project is to understand how **recursive components** can be used in React to render hierarchical and nested data.

It provides practical experience with:

- Nested structures
- Component recursion
- Props
- State management
- Conditional rendering
- Dynamic list rendering

## 👩‍💻 Author

**Tahira Batool**

BSCS Student | React Developer

## 📄 License

This project is created for learning and practice purposes.
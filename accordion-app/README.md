# Accordion App

A simple and responsive React Accordion application that allows users to expand and collapse content using **Single Selection** and **Multiple Selection** modes.

## 🚀 Live Demo

**Live Demo:** https://accordion-app-eight.vercel.app

**GitHub Repository:** https://github.com/tahirabatool218-uoe/AccordionApp

## ✨ Features

* Expand and collapse accordion items
* Single Selection mode

  * Only one item can be open at a time
* Multiple Selection mode

  * Multiple items can be open simultaneously
* Toggle between Single and Multiple Selection modes
* Reusable React components
* Responsive design
* Data-driven accordion items
* State management using React `useState`

## 🛠️ Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS
* React Hooks

## 📁 Project Structure

```text
AccordionApp/
├── public/
├── src/
│   ├── components/
│   │   ├── Accordion.jsx
│   │   ├── AccordionItem.jsx
│   │   └── Accordion.css
│   ├── data/
│   │   └── accordionData.js
│   ├── App.jsx
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
git clone https://github.com/tahirabatool218-uoe/AccordionApp.git
```

### 2. Navigate to the project directory

```bash
cd AccordionApp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

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

This project was built to practice core React concepts, including:

* Functional Components
* Component-based architecture
* Props
* React `useState`
* Conditional rendering
* Event handling
* Rendering lists with `.map()`
* Reusable components
* Data-driven UI
* Responsive CSS

## 📌 Key React Concept

The accordion state is managed using React's `useState` hook.

The application supports two different behaviors:

* **Single Selection:** Only one accordion item remains open.
* **Multiple Selection:** Multiple accordion items can remain open at the same time.

This project helped reinforce how React state can be used to control interactive UI components.

## 📱 Responsive Design

The application is designed to work across different screen sizes, including:

* Desktop
* Tablet
* Mobile

## 👩‍💻 Author

**Tahira Batool**

BSCS Student | React Developer

## 📄 License

This project is created for learning and practice purposes.

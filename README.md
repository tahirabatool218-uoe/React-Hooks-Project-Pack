# React Hooks Project Pack

A hands-on React learning repository focused on understanding React Hooks through practical, small-scale projects.

Instead of learning Hooks only through theory, this project pack focuses on building functional applications where React concepts are applied to real UI interactions, state management, API integration, and reusable component patterns.

## 🎯 Learning Objective

The main goal of this project pack is to strengthen practical React development skills by building multiple focused applications.

The primary React Hooks covered throughout this learning journey are:

- `useState`
- `useEffect`
- `useRef`

Each project focuses on a specific problem and provides practical experience with React state, effects, events, dynamic rendering, API data, and component architecture.

---

## 🚀 Projects

| # | Project | Key Concepts | Status |
|---|---|---|---|
| 01 | [Accordion App](./accordion-app) | `useState`, Props, Conditional Rendering | ✅ Completed |
| 02 | [Star Rating](./star-rating) | `useState`, Events, Hover State | ✅ Completed |
| 03 | [Image Slider](./image-slider) | `useState`, `useEffect`, API Fetching | ✅ Completed |
| 04 | [Load More Data](./load-more-data) | `useState`, `useEffect`, API, Pagination | ✅ Completed |
| 05 | [Tree View](./tree-view) | `useState`, Props, Recursion, Nested Data | ✅ Completed |
| 06 | Weather App | `useEffect`, API Fetching, Loading & Error States | 🔄 In Progress |
| 07 | Food Recipe App | API Fetching, Search, Filtering, State Management | 📌 Upcoming |

> More projects will be added as the learning journey continues.

---

# 🧠 React Hooks Practiced

## 1. `useState`

`useState` is used throughout the project pack to manage dynamic and interactive UI state.

### Practiced in:

**Accordion App**
- Manage opened accordion items
- Handle Single Selection and Multiple Selection modes

**Star Rating**
- Store the selected rating
- Manage temporary hover state

**Image Slider**
- Track the current image
- Manage loading and error states

**Load More Data**
- Store fetched products
- Track loading and error states
- Manage the number of products displayed

**Tree View**
- Control whether folders are expanded or collapsed

---

## 2. `useEffect`

`useEffect` is used when the application needs to perform side effects, especially when working with external API data.

### Practiced in:

**Image Slider**
- Fetch image data from an API
- Load data when the component renders

**Load More Data**
- Fetch product data from an API
- Handle asynchronous data loading
- Update the UI when new data is fetched

**Weather App**
- API integration and fetching weather data
- Loading and error handling

---

## 3. `useRef`

`useRef` is one of the core Hooks included in this learning roadmap.

It will be practiced in upcoming projects to understand how React can maintain a mutable reference without causing unnecessary re-renders and how DOM elements can be accessed when required.

### Learning Goal

The goal is to understand when `useRef` should be used instead of `useState`, and how it can be applied in practical React applications.

---

# 📚 Concepts Practiced

Alongside React Hooks, this project pack provides practical experience with:

- Functional Components
- Component-based Architecture
- Props
- State Management
- `useState`
- `useEffect`
- `useRef`
- Conditional Rendering
- Event Handling
- `.map()` for List Rendering
- Nested Data
- Recursive Components
- API Fetching
- Asynchronous JavaScript
- Loading States
- Error Handling
- Pagination
- `limit` and `skip`
- Hover Interactions
- Dynamic UI Updates
- Reusable Components
- React Icons
- Responsive CSS

---

# 📌 Project Details

## 01. Accordion App

A responsive accordion application where users can expand and collapse content.

### Practiced Concepts

- `useState`
- Props
- Conditional Rendering
- Event Handling
- Single Selection
- Multiple Selection
- Reusable Components
- Data-driven UI

[View Project →](./accordion-app)

![Accordion App](./accordion.png)
---

## 02. Star Rating

An interactive star rating application where users can select a rating and preview the rating through hover interactions.

### Practiced Concepts

- `useState`
- `onClick`
- `onMouseEnter`
- `onMouseLeave`
- Hover State
- Conditional Styling
- React Icons

[View Project →](./star-rating)

![Star Rating](./star-rating.png)

---

## 03. Image Slider

An image slider that fetches image data from an API and allows users to navigate through images using previous and next controls.

### Practiced Concepts

- `useState`
- `useEffect`
- API Fetching
- Loading State
- Error Handling
- Dynamic Image Rendering
- React Icons

[View Project →](./image-slider)

![Image Slider](./image-slider.png)

---

## 04. Load More Data

A product listing application that fetches products from an API and loads additional products using a Load More Data button.

Previously loaded products remain visible while the next set of products is fetched.

The button becomes disabled when all available products have been displayed.

### Practiced Concepts

- `useState`
- `useEffect`
- API Fetching
- Pagination
- `limit`
- `skip`
- Loading State
- Error Handling
- Disabled Button State
- Dynamic Data Rendering

[View Project →](./load-more-data)

![Load More Data](./load-more.png)

---

## 05. Tree View

An interactive Tree View application that displays nested data in a hierarchical structure.

Users can expand and collapse folders to explore different levels of nested data.

### Practiced Concepts

- Recursive Components
- Nested Data
- Props
- `useState`
- Conditional Rendering
- Event Handling
- `.map()`
- Reusable Components
- React Icons

[View Project →](./tree-view)

![Tree View](./tree-view.png)

---

# 🔄 Learning Progress

### Completed

**5 projects completed**

The completed projects have helped build practical understanding of:

- State management
- Side effects
- API integration
- Dynamic rendering
- Component reuse
- Recursive components
- User interactions
- Loading and error handling

### Currently Learning

**Weather App**

Working on API-based weather data, asynchronous operations, loading states, error handling, and practical `useEffect` usage.

### Next

**Food Recipe App**

Planned to practice API data, search functionality, filtering, state management, and dynamic UI rendering.

### Upcoming Hook Practice

`useRef` will be implemented in a suitable project to strengthen practical understanding of references and DOM interaction.

---

# 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- React Hooks
- React Icons
- REST APIs

---

# 📁 Repository Structure

```text
React-Hooks-Project-Pack/
│
├── README.md
│
├── accordion-app/
│   ├── src/
│   └── README.md
│
├── star-rating/
│   ├── src/
│   └── README.md
│
├── image-slider/
│   ├── src/
│   └── README.md
│
├── load-more-data/
│   ├── src/
│   └── README.md
│
├── tree-view/
│   ├── src/
│   └── README.md
│
├── weather-app/
│   └── ...
│
└── food-recipe-app/
    └── ...
```

Each project is organized in its own folder and can be developed, tested, and deployed independently.

Individual project folders contain their own README files with project-specific information and setup instructions.

---

# ⚙️ Running a Project Locally

Clone the repository:

```bash
git clone https://github.com/tahirabatool218-uoe/React-Hooks-Project-Pack.git
```

Navigate to the project you want to run:

```bash
cd React-Hooks-Project-Pack/project-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite.

---

# 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

# 💡 Why This Project Pack?

React concepts become easier to understand when they are applied to real problems.

This project pack follows a **learn → build → practice → improve** approach.

Each application is intentionally small so that the focus remains on understanding React concepts instead of building a large application with unnecessary complexity.

Through these projects, I am gradually moving from basic React state management toward API integration, reusable component patterns, recursive rendering, and more advanced Hook usage.

---

# 📈 Learning Roadmap

```text
React Fundamentals
        ↓
useState
        ↓
Interactive UI
        ↓
useEffect
        ↓
API Integration
        ↓
Loading & Error Handling
        ↓
Reusable Components
        ↓
Recursive Components
        ↓
useRef
        ↓
More Advanced React Patterns
```

---

# 👩‍💻 Author

**Tahira Batool**

BSCS Student | React Developer

This repository represents my ongoing practical learning journey with React.

---

# 📄 License

These projects are created for learning and practice purposes.
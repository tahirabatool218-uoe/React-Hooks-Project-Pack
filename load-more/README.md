# Load More

A simple and responsive React application that fetches products from an external API and allows users to load additional products using a **Load More** button.

## 🚀 Live Demo

**Live Demo:** 
https://load-more-xi.vercel.app

**GitHub Repository:**  
https://github.com/tahirabatool218-uoe/React-Hooks-Project-Pack/tree/main/load-more

## ✨ Features

- Fetch products from an external API
- Display the first 20 products on initial load
- Load 20 additional products with each button click
- Keep previously loaded products visible
- Display up to 100 products
- Loading state while fetching products
- Error handling for failed API requests
- Product count display
- Disable the Load More button after 100 products
- Responsive product grid
- Data-driven product cards

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- React Hooks
- DummyJSON API

## 📁 Project Structure

```text
load-more/
├── public/
├── src/
│   ├── components/
│   │   └── LoadMore/
│   │       ├── LoadMore.jsx
│   │       └── LoadMore.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
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
cd React-Hooks-Project-Pack/load-more
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

This project was built to practice React concepts, including:

- Functional Components
- Component-based architecture
- React `useState`
- React `useEffect`
- API integration
- Asynchronous data fetching
- Loading states
- Error handling
- Event handling
- Rendering lists with `.map()`
- Conditional rendering
- Updating array state
- Managing pagination with `limit` and `skip`
- Disabling buttons based on state
- Responsive CSS

## 📌 Key React Concepts

The Load More application uses React Hooks to fetch and manage product data dynamically.

### `useState`

Multiple states are used to manage:

- Product data
- Pagination position using `skip`
- Loading status
- Error messages

### `useEffect`

The `useEffect` Hook is used to fetch the initial 20 products when the component loads.

### Load More Logic

The application initially displays 20 products.

Each time the **Load More** button is clicked, the next 20 products are fetched and added to the existing products.

```text
20 → 40 → 60 → 80 → 100
```

Previously loaded products remain visible while new products are added.

Once 100 products have been displayed, the **Load More** button becomes disabled.

## 🌐 API

This project uses the **DummyJSON API** to fetch product data.

API endpoint:

```text
https://dummyjson.com/products
```

The application uses `limit` and `skip` query parameters for pagination.

Initial request:

```text
https://dummyjson.com/products?limit=20&skip=0
```

Next request:

```text
https://dummyjson.com/products?limit=20&skip=20
```

Further requests continue increasing the `skip` value by 20.

## 📱 Responsive Design

The application is designed to work across different screen sizes, including:

- Desktop
- Tablet
- Mobile

## 👩‍💻 Author

**Tahira Batool**

BSCS Student | React Developer

## 📄 License

This project is created for learning and practice purposes.
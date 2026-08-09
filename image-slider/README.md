# Image Slider

A simple and responsive React Image Slider application that fetches images from an external API and allows users to navigate through images using **Previous** and **Next** controls.

## 🚀 Live Demo

**Live Demo:** https://image-slider-nine-delta.vercel.app

**GitHub Repository:**  
https://github.com/tahirabatool218-uoe/React-Hooks-Project-Pack/tree/main/image-slider

## ✨ Features

- Fetch images from an external API
- Display images dynamically
- Navigate between images using Previous and Next buttons
- Circular image navigation
- Loading state while fetching images
- Error handling for failed API requests
- Image counter showing the current image position
- Reusable React component
- Responsive design
- API URL and image limit passed through props

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- React Hooks
- React Icons
- Picsum Photos API

## 📁 Project Structure

```text
image-slider/
├── public/
├── src/
│   ├── components/
│   │   └── ImageSlider/
│   │       ├── ImageSlider.jsx
│   │       └── ImageSlider.css
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
cd React-Hooks-Project-Pack/image-slider
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
- Props
- React `useState`
- React `useEffect`
- API integration
- Asynchronous data fetching
- Loading states
- Error handling
- Event handling
- Dynamic rendering with `.map()`
- Conditional rendering
- State-based image navigation
- React Icons
- Responsive CSS

## 📌 Key React Concepts

The Image Slider uses React state to manage the fetched images and the currently displayed image.

Two important states are used:

- **Images State:** Stores the images received from the API.
- **Current Index State:** Keeps track of the currently displayed image.

The application uses the `useEffect` Hook to fetch images from the API when the component loads.

The slider supports:

- **Next:** Moves to the next image.
- **Previous:** Moves to the previous image.
- **Circular Navigation:** Moving forward from the last image returns to the first image, and moving backward from the first image returns to the last image.

## 🌐 API

This project uses the **Picsum Photos API** to fetch images.

API endpoint:

```text
https://picsum.photos/v2/list
```

The API request uses query parameters to control the page and number of images:

```text
https://picsum.photos/v2/list?page=1&limit=8
```

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
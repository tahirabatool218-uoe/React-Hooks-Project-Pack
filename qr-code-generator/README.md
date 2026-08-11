# QR Code Generator

A simple and responsive React QR Code Generator that allows users to enter text or a URL and generate a corresponding QR code.

The application displays an initial QR code when it loads and updates the QR code whenever the user enters a new value and clicks the Generate button.

## 🚀 Live Demo

- **Live Demo:** https://qr-code-generator-khaki-zeta.vercel.app

- **GitHub Repository:** https://github.com/tahirabatool218-uoe/React-Hooks-Project-Pack/tree/main/qr-code-generator

## ✨ Features

- Generate QR codes from text or URLs
- Initial QR code displayed when the app loads
- Input field for entering custom values
- Generate button to create a new QR code
- Input validation for empty values
- Input field clears after generating a QR code
- Dynamic QR code updates
- Reusable React component
- Responsive design
- Clean and simple user interface
- State management using React `useState`
- QR code generation using `react-qr-code`

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- React Hooks
- React Icons
- react-qr-code

## 📁 Project Structure

```text
qr-code-generator/
├── public/
├── src/
│   ├── components/
│   │   └── QRCodeGenerator/
│   │       ├── QRCodeGenerator.jsx
│   │       └── QRCodeGenerator.css
│   ├── App.jsx
│   ├── App.css
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
cd React-Hooks-Project-Pack/qr-code-generator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install the QR Code package

```bash
npm install react-qr-code
```

### 5. Start the development server

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

This project was built to practice core React concepts:

* Functional Components
* Component-based Architecture
* React `useState`
* State Management
* Controlled Inputs
* Event Handling
* `onChange`
* `onClick`
* Input Validation
* Dynamic UI Updates
* Reusable Components
* Third-party Package Integration
* Responsive CSS

## 📌 Key React Concept

The QR Code Generator functionality is managed using React's `useState` Hook.

### `input`

Stores the value entered by the user.

### `qrCode`

Stores the value currently used to generate the QR code.

When the user enters a value and clicks the **Generate** button, the application updates the `qrCode` state with the entered value.

After generating the QR code, the input field is cleared.

## 🔄 QR Code Generation Flow

```text
User enters a value
        ↓
Input state is updated
        ↓
User clicks Generate
        ↓
Input is validated
        ↓
QR Code state is updated
        ↓
New QR Code is displayed
        ↓
Input field is cleared
```

## 🔳 QR Code Behavior

When the application loads, an initial QR code is displayed.

Users can enter:

* Website URLs
* Text
* Other supported values

After clicking **Generate**, the QR code updates according to the entered value.

If the input field is empty, the application does not generate a new QR code.

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* Desktop
* Tablet
* Mobile

The input field and Generate button adjust their layout on smaller screens for better usability.

## 📦 External Package

This project uses the `react-qr-code` package to generate QR codes.

```bash
npm install react-qr-code
```

The package converts the provided value into a QR code and displays it dynamically inside the React application.

## 👩‍💻 Author

**Tahira Batool**

BSCS Student | React Developer

## 📄 License

This project is created for learning and practice purposes.



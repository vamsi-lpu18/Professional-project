# 🎬 Movie Browser & Watchlist

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7)](https://www.netlify.com/)

## 🌐 Live Demo
[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Project-00C7B7)](https://barshaimdb.netlify.app)

**Project URL:** [https://barshaimdb.netlify.app](https://barshaimdb.netlify.app)

## 📝 Overview
A sophisticated React application built with Vite that provides an immersive movie browsing experience. Users can explore movies, manage their watchlist, and enjoy a seamless, responsive interface powered by modern web technologies.

## ✨ Key Features

### 🎥 Movie Browsing
- **Dynamic Content Loading:** Fetches movie data from the OMDb API
- **Rich Movie Details:** Displays comprehensive information including:
  - Title and Release Year
  - Genre Classification
  - IMDb Ratings
  - Movie Posters
- **Pagination System:** Navigate through extensive movie collections with ease

### 📋 Watchlist Management
- **Personalized Collection:** Add and remove movies to/from your watchlist
- **Persistent Storage:** Automatically saves watchlist to local storage
- **Real-time Updates:** Instant UI feedback on watchlist modifications

### 🔍 Advanced Filtering
- **Smart Search:** Filter movies by title with real-time results
- **Genre Filtering:** Multi-select genre filtering system
- **Rating Sort:** Sort movies by IMDb rating (ascending/descending)

### 🎨 User Interface
- **Responsive Design:** Optimized for all device sizes
- **Modern Aesthetics:** Clean, intuitive interface using Tailwind CSS
- **Smooth Animations:** Enhanced user experience with subtle transitions

## 🛠️ Technical Implementation

### Core Technologies
- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 4.4.0
- **Styling:** Tailwind CSS 3.3.0
- **API Integration:** OMDb API
- **State Management:** React Hooks
- **Routing:** React Router DOM

### Performance Optimizations
- **Lazy Loading:** Implemented for better initial load times
- **Caching:** Local storage for persistent data
- **Responsive Images:** Optimized image loading and display

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd big-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Environment Variables
Create a `.env` file in the root directory with the following:
```env
VITE_OMDB_API_KEY=your_omdb_api_key
```

## 🎯 Project Structure
```
big-project/
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Card.jsx
│   │   ├── Movies.jsx
│   │   ├── Navbar.jsx
│   │   └── WatchList.jsx
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Author
- **Your Name** - [Your GitHub Profile]

## 🙏 Acknowledgments
- OMDb API for movie data
- React and Vite communities
- All contributors and supporters

---
Built with ❤️ using React and Vite

# FilmBrowser

A React + TypeScript single-page application built with Vite.  
It fetches movies from **TMDB** (The Movie Database), shows details, and allows the user to manage a wishlist.  
State is managed with **Redux Toolkit** and persisted to `localStorage`. Styling: **SCSS**.  

---

## 📋 Prerequisites

- **Node.js**: version 18 LTS or newer  
- **npm**: version 9 or newer  
- **TMDB account**: to obtain an API key or a v4 read access token  
  - Sign up at [themoviedb.org](https://www.themoviedb.org)  
  - Go to **Settings → API** and generate a key/token  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ecliseice/MyTheresa
cd MyTheresa
```

### 2. Configure environment variables
Put your API key in `.env`:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run in development mode
```bash
npm run dev
```
- Opens the app at: [http://localhost:5173](http://localhost:5173)

### 5. Build for production
```bash
npm run build
```
- Creates an optimized production bundle in the `dist/` folder.

### 6. Preview the production build
```bash
npm run preview
```
- Opens the production build at [http://localhost:4173](http://localhost:4173)

---

## 📦 Using the `dist/` folder

The contents of `dist/` are the final build.  
Deploy `dist/` to any static hosting provider (Vercel, Netlify, GitHub Pages, nginx, etc.).  

---

## 🧪 Running Tests

This project uses **Jest + React Testing Library**.

### Run all tests:
```bash
npm run test
```

- Test files live inside `__tests__/` folders under `src/components`, `src/pages`, etc.  
- The configuration is defined in `jest.config.cjs`.  

---

## 📂 Project Structure

```
api/              # TMDB API client
components/       # Reusable UI components (Nav, Carousel, etc.)
hooks/            # Custom hooks (useWishlist)
pages/            # Pages (Home, Detail, Wishlist)
src/
  setupTests.ts   # Jest/RTL setup
store/            # Redux store & slices
types/            # TypeScript types
App.tsx           # Router + layout
main.tsx          # React entry point
```

---

## ✅ Scripts Summary

```jsonc
{
  "scripts": {
    "dev": "vite",          // start dev server
    "build": "vite build",  // build production files to dist/
    "preview": "vite preview", // serve dist/ locally
    "test": "jest"          // run tests
  }
}
```

---

## 📌 Notes

- This project was built for a **technical challenge**.  
- It demonstrates React (with TypeScript), Redux Toolkit, SCSS, and API integration with TMDB.  
- Wishlist state is stored in Redux and persisted to `localStorage`.  

---

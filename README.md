# 🌐 Nexus — Social Media App

A social media web app built with React as an intermediate project to practice core React concepts.

## 🚀 Tech Stack

- React + Vite
- Context API (global state)
- useReducer (post actions)
- Custom Hooks (useFetchPosts)
- Component-based architecture

## ⚛️ React Concepts Practiced

- `useState` — local UI state in every component
- `useReducer` — handles LIKE, COMMENT, ADD_POST actions
- `useContext` + `createContext` — global auth state (currentUser, following)
- `useEffect` — simulates async API fetch on mount
- `useCallback` — stable function references passed as props
- Custom Hooks — `useFetchPosts` encapsulates fetch logic
- Component composition — pages built from small reusable components

## 📁 Project Structure
```
src/
├── App.jsx
├── styles/
├── data/
├── context/
├── hooks/
├── components/
└── pages/
```

## ✨ Features

- Create and view posts in a live feed
- Like and comment on posts
- Visit user profiles
- Follow and unfollow users
- Search people in Explore page
- Simulated API loading state

## 🛠️ Run Locally
```bash
npm install
npm run dev
```

## 🔮 Next Steps

- Add real backend API
- Add React Router for URL-based navigation
- Add user authentication
- Add image uploads
- Add infinite scroll

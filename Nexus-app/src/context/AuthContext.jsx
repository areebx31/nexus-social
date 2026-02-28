import { createContext, useContext, useState } from "react";
import { USERS } from "../data/mockData";

// ─── CREATE CONTEXT ──────────────────────────────────────────────────────────
export const AuthContext = createContext(null);

// ─── PROVIDER ────────────────────────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(USERS[1]);
  const [following, setFollowing] = useState(new Set([2]));

  const toggleFollow = (userId) => {
    setFollowing((prev) => {
      const next = new Set(prev);
      next.has(userId) ? next.delete(userId) : next.add(userId);
      return next;
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, following, toggleFollow }}>
      {children}
    </AuthContext.Provider>
  );
}

// ─── HOOK ────────────────────────────────────────────────────────────────────
export const useAuth = () => useContext(AuthContext);

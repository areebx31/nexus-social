import { useReducer, useEffect, useState } from "react";
import { SEED_POSTS } from "../data/mockData";

// ─── REDUCER ─────────────────────────────────────────────────────────────────
export function postsReducer(state, action) {
  switch (action.type) {
    case "LIKE":
      return state.map((p) =>
        p.id === action.id
          ? { ...p, likes: p.likedByMe ? p.likes - 1 : p.likes + 1, likedByMe: !p.likedByMe }
          : p
      );

    case "COMMENT":
      return state.map((p) =>
        p.id === action.postId
          ? {
              ...p,
              comments: [
                ...p.comments,
                { id: Date.now(), userId: action.userId, text: action.text },
              ],
            }
          : p
      );

    case "ADD_POST":
      return [action.post, ...state];

    case "SET":
      return action.posts;

    default:
      return state;
  }
}

// ─── HOOK: useFetchPosts ──────────────────────────────────────────────────────
// Simulates an API call with a loading state.
// In a real app, replace the setTimeout with a fetch() call to your backend.
export function useFetchPosts() {
  const [posts, dispatch] = useReducer(postsReducer, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate network delay
    const timer = setTimeout(() => {
      dispatch({ type: "SET", posts: SEED_POSTS });
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return { posts, dispatch, loading };
}

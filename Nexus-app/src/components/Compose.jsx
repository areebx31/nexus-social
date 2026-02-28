import { useState } from "react";
import Avatar from "./Avatar";
import { useAuth } from "../context/AuthContext";


export default function Compose({ dispatch }) {
  const { currentUser } = useAuth();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    dispatch({
      type: "ADD_POST",
      post: {
        id: Date.now(),
        userId: currentUser.id,
        content: text.trim(),
        likes: 0,
        comments: [],
        time: "just now",
        likedByMe: false,
      },
    });
    setText("");
  };

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: 20,
        marginBottom: 20,
      }}
    >
      <div style={{ display: "flex", gap: 12 }}>
        <Avatar user={currentUser} />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          rows={2}
          style={{
            flex: 1,
            background: "var(--surface2)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "10px 14px",
            color: "var(--text)",
            fontSize: 15,
            resize: "none",
            fontFamily: "'DM Sans', sans-serif",
            outline: "none",
            lineHeight: 1.5,
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
        <button
          onClick={handleSubmit}
          disabled={!text.trim()}
          style={{
            background: text.trim() ? "var(--accent)" : "var(--surface2)",
            color: text.trim() ? "#0d0d0f" : "var(--muted)",
            border: "none",
            borderRadius: 8,
            padding: "9px 20px",
            fontWeight: 600,
            cursor: text.trim() ? "pointer" : "default",
            fontSize: 14,
            transition: "all 0.2s",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import Avatar from "./Avatar";
import { useAuth } from "../context/AuthContext";
import { USERS } from "../data/mockData";


export default function CommentSection({ post, dispatch }) {
  const { currentUser } = useAuth();
  const [commentText, setCommentText] = useState("");

  const handleSubmit = () => {
    if (!commentText.trim()) return;
    dispatch({
      type: "COMMENT",
      postId: post.id,
      userId: currentUser.id,
      text: commentText.trim(),
    });
    setCommentText("");
  };

  return (
    <div
      style={{
        marginTop: 16,
        borderTop: "1px solid var(--border)",
        paddingTop: 14,
      }}
    >
      {/* Existing comments */}
      {post.comments.map((c) => (
        <div key={c.id} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          <Avatar user={USERS[c.userId]} size={28} />
          <div
            style={{
              background: "var(--surface2)",
              borderRadius: 10,
              padding: "8px 12px",
              fontSize: 13,
              color: "var(--text)",
              flex: 1,
            }}
          >
            <span style={{ fontWeight: 600, marginRight: 6 }}>
              {USERS[c.userId].name}
            </span>
            {c.text}
          </div>
        </div>
      ))}

      {/* New comment input */}
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Write a comment…"
          style={{
            flex: 1,
            background: "var(--surface2)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "8px 12px",
            color: "var(--text)",
            fontSize: 13,
            outline: "none",
            fontFamily: "'DM Sans', sans-serif",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            background: "var(--accent)",
            color: "#0d0d0f",
            border: "none",
            borderRadius: 8,
            padding: "8px 14px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

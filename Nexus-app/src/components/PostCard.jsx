import { useState } from "react";
import Avatar from "./Avatar";
import CommentSection from "./CommentSection";
import { USERS } from "../data/mockData";


export default function PostCard({ post, dispatch, onViewProfile }) {
  const [showComments, setShowComments] = useState(false);
  const author = USERS[post.userId];

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "20px",
        animation: "fadeUp 0.4s ease both",
        marginBottom: 14,
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#3a3a50")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      {/* ── Header ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <button
          onClick={() => onViewProfile(author.id)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <Avatar user={author} />
        </button>

        <div style={{ flex: 1 }}>
          <button
            onClick={() => onViewProfile(author.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            {author.name}
          </button>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>
            @{author.handle} · {post.time}
          </div>
        </div>
      </div>

  
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "#e8e6df", marginBottom: 16 }}>
       
      </p>

   
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        
        <button
          onClick={() => dispatch({ type: "LIKE", id: post.id })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: post.likedByMe ? "var(--accent2)" : "var(--muted)",
            fontSize: 14,
            animation: post.likedByMe ? "pop 0.3s ease" : "none",
            transition: "color 0.2s",
          }}
        >
          {post.likedByMe ? "♥" : "♡"} {post.likes}
        </button>

       
        <button
          onClick={() => setShowComments((s) => !s)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: showComments ? "var(--accent)" : "var(--muted)",
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "color 0.2s",
          }}
        >
          💬 {post.comments.length}
        </button>
      </div>

      
      {showComments && <CommentSection post={post} dispatch={dispatch} />}
    </div>
  );
}

import { useState } from "react";
import Avatar from "../components/Avatar";
import { useAuth } from "../context/AuthContext";
import { USERS } from "../data/mockData";

// ─── EXPLORE PAGE ─────────────────────────────────────────────────────────────
// Search bar + list of all users (excluding current user) with follow buttons.
// Props:
//   onViewProfile - callback(userId) to navigate to a profile

export default function ExplorePage({ onViewProfile }) {
  const { following, toggleFollow, currentUser } = useAuth();
  const [search, setSearch] = useState("");

  const filtered = Object.values(USERS).filter(
    (u) =>
      u.id !== currentUser.id &&
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.handle.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {/* Search input */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search people…"
        style={{
          width: "100%",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          padding: "12px 16px",
          color: "var(--text)",
          fontSize: 15,
          marginBottom: 20,
          outline: "none",
          fontFamily: "'DM Sans', sans-serif",
        }}
      />

      {/* User cards */}
      {filtered.map((user, i) => (
        <div
          key={user.id}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "16px 20px",
            marginBottom: 12,
            display: "flex",
            alignItems: "center",
            gap: 14,
            animation: `fadeUp 0.3s ease ${i * 0.06}s both`,
          }}
        >
          {/* Avatar */}
          <button
            onClick={() => onViewProfile(user.id)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Avatar user={user} size={48} />
          </button>

          {/* Info */}
          <div style={{ flex: 1 }}>
            <button
              onClick={() => onViewProfile(user.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                display: "block",
                marginBottom: 2,
              }}
            >
              {user.name}
            </button>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>
              @{user.handle} · {user.followers} followers
            </div>
            <div style={{ color: "#a0a0b0", fontSize: 13, marginTop: 4 }}>{user.bio}</div>
          </div>

          {/* Follow button */}
          <button
            onClick={() => toggleFollow(user.id)}
            style={{
              background: following.has(user.id) ? "transparent" : "var(--accent)",
              color: following.has(user.id) ? "var(--text)" : "#0d0d0f",
              border: `1px solid ${following.has(user.id) ? "var(--border)" : "var(--accent)"}`,
              borderRadius: 8,
              padding: "7px 16px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 13,
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {following.has(user.id) ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
}

import Avatar from "../components/Avatar";
import PostCard from "../components/PostCard";
import { useAuth } from "../context/AuthContext";
import { USERS } from "../data/mockData";

// ─── PROFILE PAGE ─────────────────────────────────────────────────────────────
// Shows a user's profile card (avatar, bio, stats, follow button) + their posts.
// Props:
//   userId        - id of the user to display
//   posts         - all posts (filtered internally by userId)
//   dispatch      - posts reducer dispatch
//   onViewProfile - callback(userId) passed down to PostCards

export default function ProfilePage({ userId, posts, dispatch, onViewProfile }) {
  const { currentUser, following, toggleFollow } = useAuth();

  const user = USERS[userId];
  const userPosts = posts.filter((p) => p.userId === userId);
  const isOwn = userId === currentUser.id;
  const isFollowing = following.has(userId);

  if (!user) {
    return (
      <div style={{ color: "var(--muted)", padding: 40, textAlign: "center" }}>
        User not found.
      </div>
    );
  }

  return (
    <div>
      {/* ── Profile Card ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          borderRadius: "var(--radius)",
          padding: "32px 24px 24px",
          marginBottom: 20,
          border: "1px solid var(--border)",
        }}
      >
        {/* Avatar + Name + Follow */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, marginBottom: 16 }}>
          <Avatar user={user} size={72} />

          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 24,
                marginBottom: 2,
              }}
            >
              {user.name}
            </h2>
            <div style={{ color: "var(--muted)", fontSize: 14 }}>@{user.handle}</div>
          </div>

          {!isOwn && (
            <button
              onClick={() => toggleFollow(userId)}
              style={{
                background: isFollowing ? "transparent" : "var(--accent)",
                color: isFollowing ? "var(--text)" : "#0d0d0f",
                border: `1px solid ${isFollowing ? "var(--border)" : "var(--accent)"}`,
                borderRadius: 8,
                padding: "8px 18px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: 13,
                transition: "all 0.2s",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          )}
        </div>

        {/* Bio */}
        <p style={{ color: "#c0bdb5", fontSize: 14, marginBottom: 14 }}>{user.bio}</p>

        {/* Stats */}
        <div style={{ display: "flex", gap: 24 }}>
          {[
            ["Posts", userPosts.length],
            ["Following", user.following],
            ["Followers", user.followers],
          ].map(([label, val]) => (
            <div key={label}>
              <span style={{ fontWeight: 700, fontSize: 18 }}>{val}</span>
              <span style={{ color: "var(--muted)", fontSize: 13, marginLeft: 4 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── User Posts ── */}
      {userPosts.length === 0 ? (
        <div style={{ color: "var(--muted)", textAlign: "center", padding: 40, fontSize: 15 }}>
          No posts yet.
        </div>
      ) : (
        userPosts.map((post, i) => (
          <div key={post.id} style={{ animationDelay: `${i * 0.07}s` }}>
            <PostCard post={post} dispatch={dispatch} onViewProfile={onViewProfile} />
          </div>
        ))
      )}
    </div>
  );
}

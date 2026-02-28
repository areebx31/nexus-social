
const AVATAR_COLORS = {
  AR: "#e05c5c",
  PM: "#5ca8e0",
  JW: "#5ce0a8",
};

export default function Avatar({ user, size = 40 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: AVATAR_COLORS[user.avatar] || "#7a7a8a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.35,
        fontWeight: 600,
        color: "#fff",
        flexShrink: 0,
        fontFamily: "'DM Serif Display', serif",
        letterSpacing: 1,
      }}
    >
      {user.avatar}
    </div>
  );
}

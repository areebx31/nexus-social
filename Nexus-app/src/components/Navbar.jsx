

const NAV_TABS = [
  { id: "feed",    icon: "⌂", label: "Feed"    },
  { id: "explore", icon: "⊕", label: "Explore" },
  { id: "profile", icon: "◎", label: "Profile" },
];

export default function Navbar({ page, setPage, onMyProfile }) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(13,13,15,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 56,
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 20,
          color: "var(--accent)",
          letterSpacing: 1,
        }}
      >
        Nexus
      </span>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4 }}>
        {NAV_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => (tab.id === "profile" ? onMyProfile() : setPage(tab.id))}
            style={{
              background: page === tab.id ? "var(--surface2)" : "none",
              border: "none",
              borderRadius: 8,
              padding: "6px 14px",
              color: page === tab.id ? "var(--accent)" : "var(--muted)",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 16 }}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

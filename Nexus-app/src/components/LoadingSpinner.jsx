
export default function LoadingSpinner() {
  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <div
        style={{
          width: 32,
          height: 32,
          border: "3px solid var(--border)",
          borderTopColor: "var(--accent)",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
          margin: "0 auto 12px",
        }}
      />
      <span style={{ color: "var(--muted)", fontSize: 14 }}>Loading posts…</span>
    </div>
  );
}

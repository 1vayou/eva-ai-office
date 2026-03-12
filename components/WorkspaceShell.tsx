import Link from "next/link";
import { workspaceState } from "@/lib/workspace-data";

export function WorkspaceShell({
  children,
  title,
  subtitle,
  rightPanel,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  rightPanel?: React.ReactNode;
}) {
  const { assistants, approvals } = workspaceState;

  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: rightPanel ? "260px 1fr 340px" : "260px 1fr",
        minHeight: "100vh",
      }}
    >
      <aside style={{ padding: 20, borderRight: "1px solid #f3e2d1", background: "rgba(255,255,255,.82)" }}>
        <div style={{ fontWeight: 800, fontSize: 20 }}>Eva AI Office</div>
        <p style={{ color: "#6b7280", fontSize: 12 }}>Telegram main chat + web branch workspace</p>

        <nav style={{ display: "grid", gap: 8, marginTop: 18 }}>
          <Link href="/" style={navStyle(true)}>Overview</Link>
          <Link href="/approvals" style={navStyle(false)}>
            <span>Approvals</span>
            <span style={countStyle()}>{approvals.length}</span>
          </Link>
          <Link href="/timeline" style={navStyle(false)}>Timeline</Link>
        </nav>

        <div style={{ marginTop: 22, marginBottom: 10, fontSize: 12, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: ".08em" }}>
          Assistants
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          {assistants.map((assistant) => (
            <Link key={assistant.id} href={assistant.id === "chief" ? "/" : `/assistants/${assistant.id}`} style={navStyle(false)}>
              <span>{assistant.name}</span>
              <span style={countStyle()}>{assistant.pendingApprovals}</span>
            </Link>
          ))}
        </div>
      </aside>

      <section style={{ padding: 28 }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #f3e2d1",
            borderRadius: 22,
            padding: 24,
            boxShadow: "0 14px 40px rgba(249,115,22,.08)",
            marginBottom: 18,
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 28 }}>{title}</div>
          <div style={{ color: "#6b7280", marginTop: 6 }}>{subtitle}</div>
        </div>
        {children}
      </section>

      {rightPanel ? (
        <aside style={{ padding: 20, borderLeft: "1px solid #f3e2d1", background: "rgba(255,255,255,.82)" }}>
          {rightPanel}
        </aside>
      ) : null}
    </main>
  );
}

function navStyle(active: boolean): React.CSSProperties {
  return {
    padding: "12px 14px",
    borderRadius: 14,
    background: active ? "#fff1e8" : "transparent",
    border: active ? "1px solid #ffd8bf" : "1px solid transparent",
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    color: "#1f2937",
    textDecoration: "none",
  };
}

function countStyle(): React.CSSProperties {
  return {
    minWidth: 22,
    height: 22,
    borderRadius: 999,
    border: "1px solid #f3e2d1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
  };
}

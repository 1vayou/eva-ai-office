import { workspaceState } from "@/lib/workspace-data";
import { AssistantCard } from "@/components/AssistantCard";
import { ApprovalCard } from "@/components/ApprovalCard";

export default function HomePage() {
  const { assistants, approvals } = workspaceState;

  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr 340px",
        minHeight: "100vh",
      }}
    >
      <aside style={{ padding: 20, borderRight: "1px solid #f3e2d1", background: "rgba(255,255,255,.82)" }}>
        <div style={{ fontWeight: 800, fontSize: 20 }}>Eva AI Office</div>
        <p style={{ color: "#6b7280", fontSize: 12 }}>Telegram main chat + web branch workspace</p>
        <div style={{ display: "grid", gap: 8, marginTop: 18 }}>
          {assistants.map((assistant) => (
            <div
              key={assistant.id}
              style={{
                padding: "12px 14px",
                borderRadius: 14,
                background: assistant.id === "chief" ? "#fff1e8" : "transparent",
                border: assistant.id === "chief" ? "1px solid #ffd8bf" : "1px solid transparent",
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <span>{assistant.name}</span>
              <span style={{ minWidth: 22, height: 22, borderRadius: 999, border: "1px solid #f3e2d1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>
                {assistant.pendingApprovals}
              </span>
            </div>
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
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 24 }}>Chief of Staff</div>
              <div style={{ color: "#6b7280" }}>One front door in Telegram. Monitors specialists and summarizes what matters.</div>
            </div>
            <div style={{ padding: "6px 10px", borderRadius: 999, background: "#fff1e8", color: "#f97316", fontSize: 12, fontWeight: 700 }}>
              {approvals.length} pending approvals
            </div>
          </div>
          <div style={{ marginTop: 14, color: "#6b7280", lineHeight: 1.7 }}>
            <strong style={{ color: "#1f2937" }}>What matters now:</strong> Mail Chief is processing important inbox items, Builder finished the repo scaffold bootstrap, and Daykeeper is waiting for approval on the updated Friday meeting.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          {assistants.filter((a) => a.id !== "chief").map((assistant) => (
            <AssistantCard key={assistant.id} assistant={assistant} />
          ))}
        </div>
      </section>

      <aside style={{ padding: 20, borderLeft: "1px solid #f3e2d1", background: "rgba(255,255,255,.82)" }}>
        <div style={{ fontWeight: 800, fontSize: 20 }}>Approval Queue</div>
        <p style={{ color: "#6b7280", fontSize: 12 }}>High-risk or external actions wait here.</p>
        <div style={{ marginTop: 18 }}>
          {approvals.map((approval) => (
            <ApprovalCard key={approval.id} approval={approval} />
          ))}
        </div>
      </aside>
    </main>
  );
}

import { workspaceState } from "@/lib/workspace-data";
import { AssistantCard } from "@/components/AssistantCard";
import { ApprovalCard } from "@/components/ApprovalCard";
import { WorkspaceShell } from "@/components/WorkspaceShell";

export default function HomePage() {
  const { assistants, approvals } = workspaceState;

  return (
    <WorkspaceShell
      title="Chief of Staff"
      subtitle="One front door in Telegram. Monitors specialists and summarizes what matters."
      rightPanel={
        <div>
          <div style={{ fontWeight: 800, fontSize: 20 }}>Approval Queue</div>
          <p style={{ color: "#6b7280", fontSize: 12 }}>High-risk or external actions wait here.</p>
          <div style={{ marginTop: 18 }}>
            {approvals.map((approval) => (
              <ApprovalCard key={approval.id} approval={approval} />
            ))}
          </div>
        </div>
      }
    >
      <div style={{ marginBottom: 18, padding: 18, background: "#fff", border: "1px solid #f3e2d1", borderRadius: 20, boxShadow: "0 14px 40px rgba(249,115,22,.08)" }}>
        <div style={{ color: "#6b7280", lineHeight: 1.7 }}>
          <strong style={{ color: "#1f2937" }}>What matters now:</strong> Mail Chief is processing important inbox items, Builder finished the repo scaffold bootstrap, and Daykeeper is waiting for approval on the updated Friday meeting.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
        {assistants.filter((a) => a.id !== "chief").map((assistant) => (
          <AssistantCard key={assistant.id} assistant={assistant} />
        ))}
      </div>
    </WorkspaceShell>
  );
}

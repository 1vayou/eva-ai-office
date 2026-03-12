import { workspaceState } from "@/lib/workspace-data";
import type { AssistantStatus } from "@/lib/types";

export function AssistantDetail({ assistant }: { assistant: AssistantStatus }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #f3e2d1",
        borderRadius: 20,
        padding: 24,
        boxShadow: "0 14px 40px rgba(249,115,22,.08)",
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <strong>Status:</strong> {assistant.status}
      </div>
      <div style={{ marginBottom: 16 }}>
        <strong>Current Task:</strong> {assistant.currentTask ?? "—"}
      </div>
      <div style={{ marginBottom: 16 }}>
        <strong>Progress Summary:</strong>
        <div style={{ marginTop: 8, color: "#6b7280", lineHeight: 1.6 }}>{assistant.progressSummary ?? "—"}</div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <strong>Risk Level:</strong> {assistant.riskLevel}
      </div>
      <div>
        <strong>Pending Approvals:</strong> {assistant.pendingApprovals}
      </div>
    </div>
  );
}

export function AssistantRightPanel({ assistantId }: { assistantId: string }) {
  const approvals = workspaceState.approvals.filter((item) => item.assistantId === assistantId);

  return (
    <div>
      <div style={{ fontWeight: 800, fontSize: 20 }}>Branch Queue</div>
      <p style={{ color: "#6b7280", fontSize: 12 }}>Approvals and next actions for this assistant.</p>
      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        {approvals.length === 0 ? (
          <div style={{ color: "#6b7280", fontSize: 14 }}>No pending approvals for this assistant.</div>
        ) : (
          approvals.map((approval) => (
            <div key={approval.id} style={{ background: "#fff", border: "1px solid #f3e2d1", borderRadius: 18, padding: 14, boxShadow: "0 14px 40px rgba(249,115,22,.08)" }}>
              <strong>{approval.actionType}</strong>
              <div style={{ marginTop: 8, color: "#6b7280", fontSize: 14, lineHeight: 1.6 }}>{approval.summary}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

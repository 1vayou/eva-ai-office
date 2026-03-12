import type { AssistantStatus } from "@/lib/types";
import { getStatusTone } from "@/lib/workspace-data";

export function AssistantCard({ assistant }: { assistant: AssistantStatus }) {
  const tone = getStatusTone(assistant.status);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #f3e2d1",
        borderRadius: 20,
        padding: 18,
        boxShadow: "0 14px 40px rgba(249,115,22,.08)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <strong>{assistant.name}</strong>
        <span
          style={{
            padding: "6px 10px",
            borderRadius: 999,
            background: "#fff1e8",
            color: tone.color,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          {tone.label}
        </span>
      </div>
      <div style={{ marginTop: 10, color: "#6b7280", fontSize: 14, lineHeight: 1.6 }}>
        <div><strong>Task:</strong> {assistant.currentTask ?? "—"}</div>
        <div><strong>Update:</strong> {assistant.progressSummary ?? "—"}</div>
      </div>
    </div>
  );
}

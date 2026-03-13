"use client";

import type { ApprovalItem } from "@/lib/types";

export function ApprovalCard({ approval }: { approval: ApprovalItem }) {
  const handleApprove = () => {
    alert(`✅ Approved: ${approval.actionType} by ${approval.assistantName}`);
  };

  const handleReject = () => {
    alert(`❌ Rejected: ${approval.actionType} by ${approval.assistantName}`);
  };

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #f3e2d1",
        borderRadius: 18,
        padding: 16,
        marginBottom: 12,
        boxShadow: "0 14px 40px rgba(249,115,22,.08)",
      }}
    >
      <strong>{approval.assistantName} · {approval.actionType}</strong>
      <div style={{ marginTop: 8, color: "#6b7280", fontSize: 14, lineHeight: 1.6 }}>
        {approval.summary}
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
        <button 
          onClick={handleApprove}
          style={{ 
            border: "none", 
            borderRadius: 12, 
            padding: "10px 14px", 
            fontWeight: 700, 
            background: "#f97316", 
            color: "white",
            cursor: "pointer"
          }}
        >
          Approve
        </button>
        <button 
          onClick={handleReject}
          style={{ 
            borderRadius: 12, 
            padding: "10px 14px", 
            fontWeight: 700, 
            background: "#fff", 
            border: "1px solid #f3e2d1", 
            color: "#1f2937",
            cursor: "pointer"
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

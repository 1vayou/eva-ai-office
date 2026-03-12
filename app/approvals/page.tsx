import { workspaceState } from "@/lib/workspace-data";
import { ApprovalCard } from "@/components/ApprovalCard";
import { WorkspaceShell } from "@/components/WorkspaceShell";

export default function ApprovalsPage() {
  const { approvals } = workspaceState;

  return (
    <WorkspaceShell title="Approval Queue" subtitle="High-risk or external actions requiring user confirmation.">
      <div>
        {approvals.length === 0 ? (
          <div style={{ padding: 40, textAlign: "center", color: "#6b7280" }}>No pending approvals.</div>
        ) : (
          approvals.map((approval) => <ApprovalCard key={approval.id} approval={approval} />)
        )}
      </div>
    </WorkspaceShell>
  );
}

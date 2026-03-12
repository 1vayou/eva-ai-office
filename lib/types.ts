export type AssistantStatus = {
  id: string;
  name: string;
  status:
    | "idle"
    | "queued"
    | "running"
    | "waiting_input"
    | "waiting_approval"
    | "blocked"
    | "done"
    | "escalated";
  currentTask: string | null;
  progressSummary: string | null;
  riskLevel: "low" | "medium" | "high";
  lastUpdateAt: number;
  pendingApprovals: number;
  blockedReason: string | null;
};

export type ApprovalItem = {
  id: string;
  assistantId: string;
  assistantName: string;
  actionType: string;
  summary: string;
  riskLevel: "low" | "medium" | "high";
  status: "pending" | "approved" | "rejected";
  createdAt: number;
};

export type WorkspaceState = {
  generatedAt: number;
  assistants: AssistantStatus[];
  approvals: ApprovalItem[];
};

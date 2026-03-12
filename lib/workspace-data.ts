import rawState from "@/schemas/sample-state.json";
import type { WorkspaceState } from "@/lib/types";

export const workspaceState = rawState as WorkspaceState;

export function getStatusTone(status: WorkspaceState["assistants"][number]["status"]) {
  switch (status) {
    case "running":
      return { label: "Running", color: "#f97316" };
    case "done":
      return { label: "Done", color: "#10b981" };
    case "waiting_approval":
      return { label: "Waiting approval", color: "#f59e0b" };
    case "queued":
      return { label: "Queued", color: "#fb923c" };
    case "blocked":
      return { label: "Blocked", color: "#ef4444" };
    case "idle":
      return { label: "Idle", color: "#d1d5db" };
    default:
      return { label: status, color: "#d1d5db" };
  }
}

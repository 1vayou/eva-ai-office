import { workspaceState } from "@/lib/workspace-data";
import { notFound } from "next/navigation";
import { WorkspaceShell } from "@/components/WorkspaceShell";
import { AssistantDetail, AssistantRightPanel } from "@/components/AssistantDetail";

export default function AssistantPage({ params }: { params: { id: string } }) {
  const assistant = workspaceState.assistants.find((a) => a.id === params.id);

  if (!assistant) {
    notFound();
  }

  return (
    <WorkspaceShell
      title={assistant.name}
      subtitle="Assistant branch details and progress."
      rightPanel={<AssistantRightPanel assistantId={assistant.id} />}
    >
      <AssistantDetail assistant={assistant} />
    </WorkspaceShell>
  );
}

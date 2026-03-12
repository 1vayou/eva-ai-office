import { WorkspaceShell } from "@/components/WorkspaceShell";

export default function TimelinePage() {
  const events = [
    { time: "09:10", text: "Mail Chief scanned important inbox items." },
    { time: "09:24", text: "Daykeeper detected invite cancel + reschedule chain." },
    { time: "09:40", text: "Builder committed repo scaffold." },
    { time: "09:48", text: "Chief prepared Telegram summary and approval queue." },
  ];

  return (
    <WorkspaceShell title="Activity Timeline" subtitle="Recent assistant activity and events.">
      <div style={{ display: "grid", gap: 12 }}>
        {events.map((event, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              border: "1px solid #f3e2d1",
              borderRadius: 18,
              padding: "14px 16px",
              boxShadow: "0 14px 40px rgba(249,115,22,.08)",
            }}
          >
            <strong>{event.time}</strong> · {event.text}
          </div>
        ))}
      </div>
    </WorkspaceShell>
  );
}

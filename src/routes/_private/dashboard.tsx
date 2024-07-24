import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/dashboard")({
  component: EventsLayout,
});

function EventsLayout() {
  return (
    <main className="h-full flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <h1 className="w-full font-bold">Dashboard</h1>
      </div>
    </main>
  );
}

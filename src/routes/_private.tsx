import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import SidebarLayout from "@/components/SideBar";

export const Route = createFileRoute("/_private")({
  component: PrivateLayout,
});

function PrivateLayout() {
  return (
    <div className="flex">
      <SidebarLayout />
      <div className="w-full p-4">
        <Outlet />
      </div>
    </div>
  );
}

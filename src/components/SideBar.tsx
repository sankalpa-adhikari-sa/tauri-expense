import { Sidebar } from "@/components/custom/side-bar";
import { HomeIcon } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRouter } from "@tanstack/react-router";
import { ArrowLeftIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { collapsed_atom } from "@/lib/atoms/atom";

export default function SidebarLayout() {
  const [isCollapsed, _] = useAtom(collapsed_atom);
  const router = useRouter();
  const onBack = () => router.history.back();
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex flex-col h-screen items-center justify-between">
        <Sidebar
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Dashboard",
              label: "",
              icon: HomeIcon,
              href: "/dashboard",
            },
          ]}
        />
        <Button
          onClick={onBack}
          variant="default"
          size="smicon"
          className="lg:h-10 lg:w-fit lg:px-4 lg:py-2"
        >
          <ArrowLeftIcon className="w-4 h-4 lg:mr-2 " />
          <span className="hidden lg:block">Go back</span>
        </Button>
      </div>
    </TooltipProvider>
  );
}

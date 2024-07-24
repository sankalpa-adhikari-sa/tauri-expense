import { LucideIcon, MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAtom } from "jotai";
import { Separator } from "@/components/ui/separator";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { collapsed_atom } from "@/lib/atoms/atom";

interface SidebarProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    href: string;
  }[];
}

export function Sidebar({ links, isCollapsed }: SidebarProps) {
  const [_, setIsCollapsed] = useAtom(collapsed_atom);

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 pt-2 w-[52px]  lg:w-44"
    >
      <nav className="grid gap-1 px-2 ">
        <div className="h-6 flex items-center flex-rowmd: justify-center lg:justify-between">
          <h1 className="hidden lg:block font-bold">Expense Tracker</h1>
          <MenuIcon className="lg:hidden w-5 h-5" />
        </div>
        <Separator className="mb-2" />
        {links.map((link, index) => {
          const matchRoute = useMatchRoute();
          const isActive = matchRoute({ to: link.href });
          return (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  key={index}
                  to={link.href}
                  className={cn(
                    buttonVariants({
                      variant: isActive ? "default" : "ghost",
                      size: "sm",
                    }),
                    isActive &&
                      "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                    "justify-start"
                  )}
                >
                  <link.icon className="lg:mr-2 h-4 w-4" />
                  <div className="hidden lg:block ">
                    {link.title}
                    {link.label && (
                      <span
                        className={cn(
                          "ml-auto",
                          isActive && "text-background dark:text-white"
                        )}
                      >
                        {link.label}
                      </span>
                    )}
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="lg:hidden flex items-center gap-4"
              >
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
    </div>
  );
}

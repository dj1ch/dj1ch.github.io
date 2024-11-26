import React from "react";
import { Lucide } from "./icons";
import { cn } from "./ui/utils.ts";

const Bar: React.FC = () => {
  return (
    <div
      className={cn(
        "group flex items-center justify-between w-full px-4 py-3",
        "bg-neutral-2",
        "border border-neutral-4 rounded-2xl",
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
      )}
    >
      <div className="flex items-center transition hover:translate-x-1">
        <a href="/">
            <Lucide.IconHouse />
        </a>
      </div>
      <nav className="flex gap-4">
      <a
          href="/work"
          className={cn(
            "text-neutral-12 font-medium transition duration-300",
            "hover:translate-x-1"
          )}
        >
          Work Experience
        </a>
        <a
          href="/contact"
          className={cn(
            "text-neutral-12 font-medium transition duration-300",
            "hover:translate-x-1"
          )}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Bar;

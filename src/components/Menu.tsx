import React, { useState } from "react";
import { cn } from "./ui/utils.ts";

interface MenuProps {
  title: string;
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleMenu}
        className={cn(
          "group flex items-center justify-between w-full px-4 py-3",
          "bg-neutral-2 hover:bg-neutral-3",
          "border border-neutral-4 hover:border-neutral-6 rounded-2xl",
          "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
        )}
      >
        <span className="text-neutral-12 font-medium transition duration-300 group-hover:translate-x-1">
          {title}
        </span>
        <span
          className={cn(
            "transform transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        >
          ▼
        </span>
      </button>

      <div
        className={cn(
          "mt-2 px-4 py-3 bg-neutral-2 border border-neutral-4 rounded-2xl",
          "group-hover:bg-neutral-3 group-hover:border-neutral-6",
          "transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-screen opacity-100 visibility-visible py-3"
            : "max-h-0 opacity-0 visibility-hidden py-0"
        )}
        style={{
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Menu;

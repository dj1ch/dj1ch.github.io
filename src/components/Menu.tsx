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
        <span className="text-neutral-12 font-medium transition duration-500 ease-in-out group-hover:translate-x-1">
          {title}
        </span>
        <span
          className={cn(
            "transform transition-transform duration-500 ease-in-out",
            isOpen ? "rotate-180" : ""
          )}
        >
          ▼
        </span>
      </button>

      {}
      <div
        className={cn(
          "mt-2 px-4 py-3 bg-neutral-2 border border-neutral-4 rounded-2xl",
          "group-hover:bg-neutral-3 group-hover:border-neutral-6",
          "transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-100 visibility-visible"
            : "opacity-0 visibility-hidden"
        )}
        style={{
          transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Menu;

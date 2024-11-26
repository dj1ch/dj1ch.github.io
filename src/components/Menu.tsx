import React, { useState } from "react";
import { cn } from "./ui/utils.ts";

interface MenuProps {
  title: string;
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Current state before toggle:", isOpen);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleMenu}
        className={cn(
          "flex items-center justify-between w-full px-4 py-3",
          "bg-gray-200 hover:bg-gray-300",
          "border border-gray-400 hover:border-gray-500 rounded-md",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
        )}
      >
        <span className="text-gray-800 font-medium">{title}</span>
        <span
          className={cn(
            "transform transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          style={{ padding: "1rem"}}
          className="mt-2 rounded-md"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Menu;

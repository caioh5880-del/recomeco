import React from "react";
import { Home, BookOpen, HeartHandshake, RotateCcw, User } from "lucide-react";
import { TabType } from "@/lib/types";
import { mainNavItems } from "@/lib/utils/navigation";

interface BottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export function BottomNav({ currentTab, onSelectTab }: BottomNavProps) {
  const renderIcon = (name: string, active: boolean) => {
    const iconClass = active ? "w-5 h-5 text-[#fef08a]" : "w-5 h-5 text-white/60";
    switch (name) {
      case "Home":
        return <Home className={iconClass} />;
      case "BookOpen":
        return <BookOpen className={iconClass} />;
      case "HeartHandshake":
        return <HeartHandshake className={iconClass} />;
      case "RotateCcw":
        return <RotateCcw className={iconClass} />;
      case "User":
        return <User className={iconClass} />;
      default:
        return <Home className={iconClass} />;
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 bg-[#0d1527]/95 backdrop-blur-lg border-t border-[#1e3a8a]/40 pb-safe">
      <div className="max-w-md mx-auto px-3 py-2 flex items-center justify-around">
        {mainNavItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className="flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-xl transition-all cursor-pointer relative"
            >
              {renderIcon(item.iconName, isActive)}
              <span
                className={`text-[10px] font-medium tracking-tight ${
                  isActive ? "text-[#fef08a] font-bold" : "text-white/60"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

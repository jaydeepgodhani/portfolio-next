"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure hydration-safe UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid mismatch

  return (
    <button
      onMouseDown={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-auto h-full flex items-center justify-center cursor-pointer mx-3 text-3xl"
    >
      {/* <svg className="h-6 w-full m-2 text-primary" viewBox="0 0 24 24">
                <desc>Theme Switcher Icon</desc>
                <g fill="currentColor">
                  <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"></path>
                </g>
              </svg> */}
      <div className="bg-[rgb(var(--color-primary))] text-primary w-3 h-3 relative text-center rotate-[20deg]"></div>
      <div className="bg-[rgb(var(--color-primary))] w-3 h-3 absolute text-center rotate-[155deg]"></div>
    </button>
  );
}

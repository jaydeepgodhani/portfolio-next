"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  // const defaultMode =
  //   typeof window !== "undefined"
  //     ? window.matchMedia("(prefers-color-scheme: dark)").matches
  //       ? DARK
  //       : LIGHT
  //     : LIGHT;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

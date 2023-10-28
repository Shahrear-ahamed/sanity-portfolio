// app/providers.tsx
"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleContextmenu = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <NextThemesProvider enableSystem={false} defaultTheme={"dark"}>
      {children}
    </NextThemesProvider>
  );
}

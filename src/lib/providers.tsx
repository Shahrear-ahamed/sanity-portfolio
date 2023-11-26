// app/providers.tsx
"use client";
import { useEffect } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleContextMenu = (e: any) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <NextUIProvider>
      {children}
      <Toaster position="bottom-right" reverseOrder={false} />
    </NextUIProvider>
  );
}

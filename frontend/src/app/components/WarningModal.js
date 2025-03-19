"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Client-side hook to get pathname

export default function WarningModal() {
  const pathname = usePathname(); // Client-side hook to get the current path

  // Trigger warning logic only on the `/verify` page
  useEffect(() => {
    if (pathname !== '/verify') return; // Exit early if not on `/verify` page

    const handleBeforeUnload = (event) => {
      // Trigger the browser's default warning when navigating away or refreshing
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave? Unsaved changes may be lost."; // This is what shows the default warning
    };

    // Add the beforeunload event listener to show the browser's warning
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]); // Re-run the effect only if the pathname changes

  return null; // No custom modal or UI needed
}

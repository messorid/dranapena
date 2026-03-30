"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href*="wa.me"]');
      if (!link || typeof window.gtag !== "function") return;

      window.gtag("event", "whatsapp_click", {
        event_category: "contacto",
        event_label: link.textContent?.trim() || "whatsapp_cta",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

export default function Turnstile({ onVerify, onExpire, onError }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) {
      console.warn("NEXT_PUBLIC_TURNSTILE_SITE_KEY is not defined. Cloudflare Turnstile will not render.");
      return;
    }

    if (isScriptLoaded && containerRef.current && window.turnstile) {
      try {
        // Reset any existing widget
        if (widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }

        // Render new widget
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: "dark",
          callback: (token) => onVerify(token),
          "expired-callback": () => {
            if (onExpire) onExpire();
          },
          "error-callback": () => {
            if (onError) onError();
          },
        });
      } catch (err) {
        console.error("Error rendering Turnstile:", err);
      }
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // ignore
        }
      }
    };
  }, [isScriptLoaded, siteKey, onVerify, onExpire, onError]);

  if (!siteKey) {
    if (process.env.NODE_ENV === "development") {
      return (
        <div className="p-3 text-xs bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] rounded-xl text-center font-mono my-4">
          [DEV MODE] Cloudflare Turnstile (NEXT_PUBLIC_TURNSTILE_SITE_KEY missing in .env)
        </div>
      );
    }
    return null;
  }

  return (
    <div className="turnstile-wrapper my-4 flex justify-center">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onLoad={() => setIsScriptLoaded(true)}
        strategy="afterInteractive"
      />
      <div ref={containerRef} id="turnstile-widget" />
    </div>
  );
}

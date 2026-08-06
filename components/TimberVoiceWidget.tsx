"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";

const ASSISTANT_ID = "d5265440-af00-49f0-9341-32f319f75d3c";

export default function TimberVoiceWidget() {
  const vapiRef = useRef<Vapi | null>(null);
  const [active, setActive] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const handleVoiceCall = useCallback(async () => {
    if (!vapiRef.current || connecting) {
      return;
    }

    if (active) {
      await vapiRef.current.stop();
      return;
    }

    setConnecting(true);

    try {
      await vapiRef.current.start(ASSISTANT_ID);
    } catch (error) {
      console.error("Could not start Vapi call:", error);
      setConnecting(false);
    }
  }, [active, connecting]);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;

    if (!publicKey) {
      console.error("Missing NEXT_PUBLIC_VAPI_PUBLIC_KEY");
      return;
    }

    const vapi = new Vapi(publicKey);
    vapiRef.current = vapi;

    vapi.on("call-start", () => {
      setActive(true);
      setConnecting(false);
    });

    vapi.on("call-end", () => {
      setActive(false);
      setConnecting(false);
    });

    vapi.on("error", (error) => {
      console.error("Vapi error:", error);
      setActive(false);
      setConnecting(false);
    });

    return () => {
      vapi.stop();
      vapiRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const button = target?.closest("button");

      if (!button || !button.textContent?.includes("Ask Timber")) {
        return;
      }

      event.preventDefault();
      void handleVoiceCall();
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [handleVoiceCall]);

  return (
    <div className="timber-widget fixed right-4 bottom-20 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <span className="hidden rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-forest shadow-lg sm:block">
        Talk to Timber, our AI arborist
      </span>
      <button
        type="button"
        onClick={handleVoiceCall}
        disabled={connecting}
        aria-label={active ? "End Timber AI voice call" : "Start Timber AI voice call"}
        className="group relative flex items-center gap-3 rounded-full bg-ember py-3 pr-5 pl-4 text-accent-foreground shadow-[0_18px_40px_-14px_rgba(217,119,66,0.8)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="halo absolute inset-0 rounded-full bg-ember" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 19v3" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <rect x="9" y="2" width="6" height="13" rx="3" />
        </svg>
        <span className="relative text-sm font-bold">
          {connecting ? "Connecting..." : active ? "End call" : "AI Voice Agent"}
        </span>
      </button>
    </div>
  );
}

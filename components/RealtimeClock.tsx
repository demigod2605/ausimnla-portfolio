"use client";

import { useEffect, useState } from "react";

export default function RealtimeClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const date = now.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <p className="font-mono text-xs text-muted">
      {date} <span className="text-cyan/70">·</span> {time}
      <span className="text-cyan animate-pulse2">_</span>
    </p>
  );
}

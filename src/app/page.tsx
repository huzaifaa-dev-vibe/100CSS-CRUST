"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/crust/loading-screen";
import AppShell from "@/components/crust/app-shell";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Pre-prefetch hint (no-op in this scaffold but documents intent)
  useEffect(() => {
    if (loading) return;
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <AppShell />
    </>
  );
}

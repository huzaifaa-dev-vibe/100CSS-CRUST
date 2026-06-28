"use client";

import { create } from "zustand";

export type CrustView = "home" | "components" | "docs" | "about";

interface CrustState {
  view: CrustView;
  setView: (v: CrustView) => void;
  loading: boolean;
  setLoading: (b: boolean) => void;
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  activeComponentId: string | null;
  setActiveComponentId: (id: string | null) => void;
}

export const useCrust = create<CrustState>((set) => ({
  view: "home",
  setView: (v) => set({ view: v }),
  loading: true,
  setLoading: (b) => set({ loading: b }),
  activeCategory: "all",
  setActiveCategory: (c) => set({ activeCategory: c }),
  activeComponentId: null,
  setActiveComponentId: (id) => set({ activeComponentId: id }),
}));

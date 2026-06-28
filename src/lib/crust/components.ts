// Crust component registry — 100 hand-crafted CSS effects.
// Each entry is scoped under `.c-{id}` so styles never leak.

export type Category =
  | "Buttons"
  | "Inputs"
  | "Cards"
  | "Loaders"
  | "Toggles"
  | "Tooltips"
  | "Toasts"
  | "Progress"
  | "Navigation"
  | "Text"
  | "Backgrounds"
  | "Badges";

export interface CrustComponent {
  id: string;
  number: string;
  title: string;
  category: Category;
  description: string;
  deps?: string[];
  html: string;
  css: string;
}

export const CATEGORIES: Category[] = [
  "Buttons",
  "Inputs",
  "Cards",
  "Loaders",
  "Toggles",
  "Tooltips",
  "Toasts",
  "Progress",
  "Navigation",
  "Text",
  "Backgrounds",
  "Badges",
];

import { buttons } from "./components/buttons";
import { inputs } from "./components/inputs";
import { cards } from "./components/cards";
import { loaders } from "./components/loaders";
import { toggles } from "./components/toggles";
import { tooltips } from "./components/tooltips";
import { toasts } from "./components/toasts";
import { progress } from "./components/progress";
import { navigation } from "./components/navigation";
import { text } from "./components/text";
import { backgrounds } from "./components/backgrounds";
import { badges } from "./components/badges";

export const COMPONENTS: CrustComponent[] = [
  ...buttons,
  ...inputs,
  ...cards,
  ...loaders,
  ...toggles,
  ...tooltips,
  ...toasts,
  ...progress,
  ...navigation,
  ...text,
  ...backgrounds,
  ...badges,
];

export const getById = (id: string) => COMPONENTS.find((c) => c.id === id);
export const byCategory = (cat: Category) =>
  COMPONENTS.filter((c) => c.category === cat);

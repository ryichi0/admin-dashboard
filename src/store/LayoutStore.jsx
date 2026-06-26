import { create } from "zustand";

export const useLayoutStore = create((set) => ({
  pageTitle: "",
  setPageTitle: (value) => set({ pageTitle: value }),
  theme: "dark",
  setTheme: (value) => set({ theme: value })
}))
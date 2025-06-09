import { create } from "zustand";
export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("talk-theme") || "dark",
  //@ts-ignore
  setTheme: (theme) => {
    localStorage.setItem("talk-theme", theme);
    set({ theme });
  },
}));

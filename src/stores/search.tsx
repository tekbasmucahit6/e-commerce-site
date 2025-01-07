import { create } from "zustand";

interface SearchStoreTypes {
  search: string;
  setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchStoreTypes>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));

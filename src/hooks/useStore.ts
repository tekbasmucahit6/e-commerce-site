import { create } from "zustand";

export const productsData = create((set) => ({
  data: [],
  setData: (data: any) => set(data),
}));

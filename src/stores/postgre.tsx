import { create } from "zustand";

interface ProductStoreTypes {
  products: any;
  setProducts: (products: any) => void;

  editProduct: (product: any) => void;

  productLoading: boolean;
  setProductLoading: (productLoading: boolean) => void;

  skip: number;
  setSkip: (skip: number) => void;

  end: boolean;
  setEnd: (end: boolean) => void;
}

export const usePostgreStore = create<ProductStoreTypes>((set) => ({
  products: [],
  setProducts: (products) =>
    set((state) => {
      return {
        products: [...state.products, ...products],
      };
    }),

  editProduct: (product: any) =>
    set((state) => {
      return {
        products: state.products.map((p: any) =>
          p.id === product.id ? product : p
        ),
      };
    }),

  productLoading: false,
  setProductLoading: (productLoading) => set({ productLoading }),

  skip: 0,
  setSkip: (skip) => set({ skip }),

  end: false,
  setEnd: (end) => set({ end }),
}));

import create from 'zustand';

interface FactoryStore {
  products: number;
  produceProduct: () => void;
  distributeProduct: () => void;
  distribute: number;
}

const useStore = create<FactoryStore>((set) => ({
  products: 0,
  distribute: 0,
  produceProduct: () =>
    set((state) => ({
      products: state.products >= 0 ? state.products + 1 : 0,
    })),
  distributeProduct: () =>
    set((state) => ({
      products: state.products > 0 ? state.products - 1 : 0,
      distribute: state.products > 0 ? state.distribute + 1 : state.distribute,
    })),
}));

export { useStore };

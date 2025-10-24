import { create, type StoreApi, type UseBoundStore } from "zustand";
import type { CalculationTypes } from "../../hooks/useFetchCalculationData";

// zustandの接続テスト
export interface StateType {
  bears: number;
}

export interface UseBearType {
  bears: number;
  increment: () => void;
  updateBears: (newBears: StateType) => void;
}

export interface UseBearResponseType {
  bears: number;
  increment: void;
  updateBears: void;
}

export const useBear: UseBoundStore<StoreApi<UseBearType>> =
  create<UseBearType>((set) => ({
    bears: 0,
    increment: () => set((state) => ({ bears: state.bears + 1 })),
    updateBears: (newBears) => set({ bears: newBears.bears }),
  }));

// APIの事前取得保持
export interface ApiType {
  initialApi: [] | CalculationTypes[];
  readApi: (fetchApi: CalculationTypes[]) => void;
}

export const useApi = create<ApiType>((set) => ({
  initialApi: [],
  readApi: (fetchApi) => set({ initialApi: fetchApi }),
}));

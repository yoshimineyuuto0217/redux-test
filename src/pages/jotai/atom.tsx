import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type User = {
  name: string;
};

export const countAtom = atom(0);

export const twiceAtom = atom(1);

export const currentAtom = atom<User | undefined>(undefined);

// apiを入れる状態
export const collectAtom = atom([]);

// apiのデータをlocalにほぞん
export const localAtom = atomWithStorage("productData", null);

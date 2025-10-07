import { atom } from "jotai";

type User = {
  name: string;
};

export const countAtom = atom(0);

export const twiceAtom = atom(1);

export const currentAtom = atom<User | undefined>(undefined);

export const collectAtom = atom([]);
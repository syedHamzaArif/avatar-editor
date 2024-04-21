import { atom } from "jotai";

export const selectedTabAtom = atom("tab1");
export const emojiColorsAtom = atom<string[]>([]);
export const selectedEmojiAtom = atom("");
export const selectedColorAtom = atom("#FF0000");

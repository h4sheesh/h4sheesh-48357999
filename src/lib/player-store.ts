import { useSyncExternalStore } from "react";
import type { Beat } from "./beats-data";

type State = {
  current: Beat | null;
  playing: boolean;
  cart: Beat[];
};

let state: State = { current: null, playing: false, cart: [] };
const listeners = new Set<() => void>();

function emit() { listeners.forEach((l) => l()); }

export const player = {
  play(beat: Beat) {
    state = { ...state, current: beat, playing: true };
    emit();
  },
  toggle() {
    if (!state.current) return;
    state = { ...state, playing: !state.playing };
    emit();
  },
  stop() {
    state = { ...state, playing: false };
    emit();
  },
  addToCart(beat: Beat) {
    if (state.cart.find((b) => b.id === beat.id)) return;
    state = { ...state, cart: [...state.cart, beat] };
    emit();
  },
  removeFromCart(id: string) {
    state = { ...state, cart: state.cart.filter((b) => b.id !== id) };
    emit();
  },
};

export function usePlayer() {
  return useSyncExternalStore(
    (l) => { listeners.add(l); return () => listeners.delete(l); },
    () => state,
    () => state,
  );
}

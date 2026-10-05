import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** `false` during SSR and hydration, `true` once running in the browser. */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

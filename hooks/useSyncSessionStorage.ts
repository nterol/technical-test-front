import { useEffect } from 'react';

export function useSyncSessionStorage(key: string, setter: (v: unknown) => void) {
  useEffect(() => {
    const stored = sessionStorage.getItem(key);
    setter(stored);
  }, [key, setter]);
}

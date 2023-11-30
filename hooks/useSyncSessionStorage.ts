import { useEffect } from 'react';

type Args = { key: string; setter: (v: ReturnType<typeof sessionStorage.getItem>) => void }[];

export function useSyncSessionStorage(operations: Args) {
  useEffect(() => {
    operations.forEach(({ key, setter }) => {
      const stored = sessionStorage.getItem(key);
      setter(stored);
    });
  }, [operations]);
}

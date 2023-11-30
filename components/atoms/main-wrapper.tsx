import { WithChildrenProps } from '~/utils/types';

export function MainWrapper({ children }: WithChildrenProps<unknown>) {
  return (
    <main className="w-full max-w-7xl bg-white flex flex-col gap-2 items-center justify-center py-6 mx-auto">
      {children}
    </main>
  );
}

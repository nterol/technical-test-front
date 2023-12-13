declare global {
  type WithChildren<T = unknown> = T & { children: React.ReactNode };
}

export {};

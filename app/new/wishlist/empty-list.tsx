import Link from 'next/link';

export function EmptyList() {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold">Vous n&apos;avez aucun coup de coeur !</p>
      <Link href="/boutique" className="p-2 rounded-md bg-primary-main flex justify-center text-white w-fit">
        Time to shop ! 🛍️
      </Link>
    </div>
  );
}

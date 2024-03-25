import Link from 'next/link';

export default function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <button className='bg-cafe-deep-green text-green-50 shadow-md rounded-2xl px-6 py-2'>
        {children}
      </button>
    </Link>
  );
}

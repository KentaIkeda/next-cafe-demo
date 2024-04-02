import { twMerge } from 'tailwind-merge';

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className }: MainProps) {
  return (
    <main
      className={twMerge('pt-40 w-[90%] mx-auto', className)}
      //     className={`
      //   pt-40
      //   w-[90%]
      //   mx-auto
      // `}
    >
      {children}
    </main>
  );
}

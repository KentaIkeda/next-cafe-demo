interface PageTitleProps {
  children: React.ReactNode;
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h2 className='text-center font-semibold text-lg mb-12'>{children}</h2>
  );
}

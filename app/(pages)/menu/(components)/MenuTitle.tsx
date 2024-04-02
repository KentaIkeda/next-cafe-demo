interface MenuTitleProps {
  children: React.ReactNode;
}

export default function MenuTitle({ children }: MenuTitleProps) {
  return <h3 className='text-center font-bold'>{children}</h3>;
}

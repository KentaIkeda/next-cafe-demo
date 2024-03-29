import { NavListsType } from '@/app/types/types';
import Link from 'next/link';

export default function HeaderNavigation({
  navLists,
}: {
  navLists: NavListsType;
}) {
  return (
    <ul className='h-full flex items-center justify-end gap-7 pr-7'>
      {navLists.map((list) => {
        return (
          <li key={list.id}>
            <Link
              href={list.href}
              className='font-bold'
            >
              {list.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

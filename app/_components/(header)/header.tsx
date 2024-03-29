'use client';

import { NavListsType } from '@/app/types/types';
import HeaderNavigation from '../(uis)/headerNavigation';
import { useEffect } from 'react';
import { FixedHeader } from '@/app/utils/animation';
import { getOtherThanRoot } from '@/app/utils/utils';

export default function Header({ navLists }: { navLists: NavListsType }) {
  useEffect(() => {
    const fixedHeader = new FixedHeader('first-view');
    fixedHeader.playAnimation();
  }, []);
  const isRoot = getOtherThanRoot();
  console.log(isRoot);

  return (
    <header
      id='header_navigation'
      className='w-full h-16 bg-cafe-cream shadow-md fixed top-0 z-10 opacity-0'
    >
      <nav className='h-full'>
        <HeaderNavigation navLists={navLists} />
      </nav>
    </header>
  );
}

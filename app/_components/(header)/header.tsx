'use client';

import { NavListsType } from '@/app/types/types';
import HeaderNavigation from '../(uis)/headerNavigation';
import { useEffect } from 'react';
import { FixedHeader } from '@/app/utils/animation';
import { usePathname } from 'next/navigation';

export default function Header({ navLists }: { navLists: NavListsType }) {
  // Rootかそれ以外かを判定する関数
  const getOtherThanRoot = (): boolean => {
    const pathName = usePathname();
    // Rootだったら"/"なので何も返されない。
    // Root意外だったら何かしら文字列が返されるのでtrueと評価される。
    if (pathName.slice(1)) {
      return true;
    } else {
      return false;
    }
  };

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

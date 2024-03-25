'use client';

import HamburgerMenuIcon from './hamburgerMenuIcon';
import HamburgerMenu from '../../(uis)/hamburgerMenu';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HamburgerProvider() {
  // mobile表示の時のハンバーガーメニューの状態管理
  const [isNav, setIsNav] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (path === '/news') {
      setIsColor(true);
    }
    if (path === '/menu') {
      setIsColor(true);
    }
    if (path === 'contact') {
      setIsColor(true);
    }
    if (path === '/') {
      setIsColor(false);
    }
  }, [path]);

  return (
    <>
      <HamburgerMenuIcon
        isFirstView={isColor}
        isNav={isNav}
        setIsNav={setIsNav}
      />
      {isNav ? (
        <HamburgerMenu
          isNav={isNav}
          setIsNav={setIsNav}
        />
      ) : (
        <></>
      )}
    </>
  );
}

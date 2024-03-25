'use client';

import { Dispatch, SetStateAction } from 'react';

export default function HamburgerMenuIcon({
  isFirstView,
  isNav,
  setIsNav,
}: {
  isFirstView: boolean;
  isNav: boolean;
  setIsNav: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <svg
      id='hamburger-icon'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={isFirstView ? 'text-cafe-deep-green' : 'text-white'}
      onClick={() => setIsNav(!isNav)}
    >
      <line
        x1='21'
        x2='3'
        y1='6'
        y2='6'
      />
      <line
        x1='21'
        x2='9'
        y1='12'
        y2='12'
      />
      <line
        x1='21'
        x2='7'
        y1='18'
        y2='18'
      />
    </svg>
  );
}

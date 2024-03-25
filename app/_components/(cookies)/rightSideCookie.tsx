'use client';
import Image from 'next/image';
import { getOtherThanRoot } from '@/app/utils/utils';

export default function RightSideCookie() {
  const isRoot: boolean = getOtherThanRoot();
  return (
    <>
      {!isRoot && (
        <div className='fixed right-0 top-1/2 -translate-y-1/2 rotate-180 w-1/3 h-auto z-50'>
          <Image
            id='right-cookie'
            src='/food/cookie/cookie1.png'
            width='2000'
            height='2000'
            priority
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0,
            }}
            alt=''
          />
        </div>
      )}
    </>
  );
}

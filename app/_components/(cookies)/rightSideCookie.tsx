'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function RightSideCookie() {
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
  const isRoot: boolean = getOtherThanRoot();
  return (
    <>
      {!isRoot && (
        <div className='fixed right-0 top-1/2 -translate-y-1/2 rotate-180 w-1/3 h-auto z-50 lg:w-1/6'>
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

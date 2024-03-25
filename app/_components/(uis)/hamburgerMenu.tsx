import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import cookie1 from '@/public/food/cookie/navigation/nav_cookie1.png';
import cookie2 from '@/public/food/cookie/navigation/nav_cookie2.png';
import cookie3 from '@/public/food/cookie/navigation/nav_cookie3.png';
import cookie4 from '@/public/food/cookie/navigation/nav_cookie4.png';

export default function HamburgerMenu({
  isNav,
  setIsNav,
}: {
  isNav: boolean;
  setIsNav: Dispatch<SetStateAction<boolean>>;
}) {
  const navData = [
    { id: 1, name: 'トップ', href: '/', image: cookie1 },
    { id: 2, name: 'メニュー', href: '/menu', image: cookie2 },
    { id: 3, name: 'ニュース', href: '/news', image: cookie3 },
    { id: 4, name: 'お問い合わせ', href: '/contact', image: cookie4 },
  ];

  return (
    <div
      onClick={() => setIsNav(!isNav)}
      className='h-screen w-full bg-black/50 fixed top-0 left-0'
    >
      <nav className='w-full h-full'>
        <ul className='flex flex-col items-center justify-center w-full h-full gap-y-4'>
          {navData.map((data) => {
            return (
              <Link
                key={data.id}
                href={data.href}
              >
                <li>
                  <div className='relative w-full h-auto'>
                    <div className='relative'>
                      <Image
                        src={data.image}
                        width='100'
                        height='100'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'blur(1px)',
                        }}
                        alt=''
                      />
                    </div>
                    <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-black text-2xl font-bold w-[120%] text-center'>
                      {data.name}
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

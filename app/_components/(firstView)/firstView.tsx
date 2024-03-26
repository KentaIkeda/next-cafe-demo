import Image from 'next/image';
import CanScrollUI from './(ui)/canScrollUI';
import { megrim } from '../../utils/fonts';
import { useEffect, useState } from 'react';

export default function FirstView() {
  const [isWindowSize, setIsWindowSize] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setIsWindowSize(true);
      }
      if (window.innerWidth <= 767) {
        setIsWindowSize(false);
      }
    });
  }, [window.innerWidth]);

  return (
    <div
      id='first-view'
      className='relative'
    >
      {/* over lay */}
      <div className='bg-black/50 absolute top-0 left-0 w-full h-full'></div>
      {/* //over lay */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto'>
        <h1 className={`text-white text-4xl text-center ${megrim.className}`}>
          cafe Demo...
        </h1>
      </div>
      <div className='absolute bottom-7 left-1/2 -translate-x-1/2'>
        <CanScrollUI />
      </div>
      {isWindowSize ? (
        <Image
          src='/firstViewPC.jpg'
          width='2000'
          height='2000'
          priority
          quality={100}
          style={{ width: '100%', height: '100dvh', objectFit: 'cover' }}
          alt=''
        />
      ) : (
        <Image
          src='/firstViewMobile.jpg'
          width='2000'
          height='2000'
          priority
          quality={100}
          style={{ width: '100%', height: '100dvh', objectFit: 'cover' }}
          alt=''
        />
      )}
    </div>
  );
}

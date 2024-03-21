import Image from 'next/image';

export default function LeftSideCookie() {
  return (
    <div className='fixed left-0 top-1/2 -translate-y-1/2 w-1/2 h-auto z-50'>
      <Image
        id='left-cookie'
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
  );
}

import Image from 'next/image';
import { SectionMargin } from '@/app/types/types';

export default function SectinMargin({ image, isText, text }: SectionMargin) {
  return (
    <div className='my-32 md:my-40'>
      <div className='relative h-auto w-20 left-1/2 -translate-x-1/2 md:w-28'>
        <Image
          src={image}
          width='2000'
          height='2000'
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          alt=''
        />
      </div>
      <p className='mt-3 text-center text-xs md:text-sm'>{isText && text}</p>
    </div>
  );
}

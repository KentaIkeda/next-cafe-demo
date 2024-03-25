import SectionHead from '../(uis)/sectionHead';
import Image from 'next/image';

export default function Concept() {
  return (
    <>
      <SectionHead headName='コンセプト' />
      <figure className='relative left-1/2 -translate-x-1/2 aspect-[1.618/1] w-52 h-auto rounded-xl overflow-hidden md:w-96'>
        <Image
          src='/insideStore.jpg'
          width='2000'
          height='2000'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt='Demo...の店内写真'
        />
      </figure>
      <div className='text-sm text-center mt-7 w-full md:text-lg'>
        <p className='leading-relaxed tracking-wide'>
          懐かしさと趣きにあふれた空間で
        </p>
        <p className='leading-relaxed tracking-wide'>やすらぎのひとときを...</p>
      </div>
    </>
  );
}

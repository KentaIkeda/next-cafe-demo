import { megrim, zenKurenaido } from '@/app/utils/fonts';

export default function SectionHead({ headName }: { headName: string }) {
  return (
    <h2 className='my-12 md:my-20 md:text-center'>
      <span className={`${megrim.className} text-lg font-semibold md:text-2xl`}>
        Demo...
      </span>
      <span className='text-xs md:text-base'>の</span>
      <span className='text-xl md:text-2xl'>{headName}</span>
    </h2>
  );
}

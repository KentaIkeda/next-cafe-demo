import { megrim, zenKurenaido } from '@/app/utils/fonts';

export default function SectionHead({ headName }: { headName: string }) {
  return (
    <h2 className='my-12'>
      <span className={`${megrim.className} text-lg font-semibold`}>
        Demo...
      </span>
      <span className='text-xs'>の</span>
      <span className='text-xl'>{headName}</span>
    </h2>
  );
}

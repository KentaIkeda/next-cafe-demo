import SectionHead from '../(uis)/sectionHead';

export default function BusinessHour() {
  const underline =
    'relative w-full before:absolute before:bottom-0 before:content-[""] before:w-full before:border-t-2 before:border-cafe-deep-green';

  return (
    <>
      <SectionHead headName='営業時間' />
      <dl className='flex flex-wrap w-full text-center gap-y-1 md:text-xl'>
        <dt className='w-[50%] py-2'>Morning</dt>
        <dd className='w-[50%] py-2'>
          8am<span className='mx-1'>~</span>10am
        </dd>
        <dt className='w-[50%] py-2'>Lunch</dt>
        <dd className='w-[50%] py-2'>
          11am<span className='mx-1'>~</span>2pm
        </dd>
        <dt className='w-[50%] py-2'>Dinner</dt>
        <dd className='w-[50%] py-2'>
          5pm<span className='mx-1'>~</span>7pm
        </dd>
      </dl>
      <p className='text-center mt-2 tracking-wider w-full md:text-xl md:mt-4'>
        <span className={underline}>月曜日</span>
        <span className='text-sm md:text-base'>は</span>
        <span className={underline}>定休日</span>
        <span className='text-sm md:text-base'>になります</span>
      </p>
    </>
  );
}

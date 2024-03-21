export default function CanScrollUI() {
  return (
    <div className='flex flex-col items-center gap-y-2 opacity-50'>
      <p className='text-white'>scroll</p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-white'
      >
        <path d='m7 6 5 5 5-5' />
        <path d='m7 13 5 5 5-5' />
      </svg>
    </div>
  );
}

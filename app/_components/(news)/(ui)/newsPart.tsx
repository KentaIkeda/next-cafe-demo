import { NewsPartType } from '@/app/types/types';
import { formatDate } from '@/app/utils/utils';

export default function NewsPart({ children, date }: NewsPartType) {
  const dateTime = formatDate(date);
  return (
    <article className='bg-cafe-beige flex justify-between items-center w-full h-auto shadow-md py-4 px-5 rounded-2xl max-w-screen-sm mx-auto'>
      <h3 className='text-xs line-clamp-1 md:text-lg'>{children}</h3>
      <time
        dateTime={dateTime}
        className='text-xs'
      >
        {date}
      </time>
    </article>
  );
}

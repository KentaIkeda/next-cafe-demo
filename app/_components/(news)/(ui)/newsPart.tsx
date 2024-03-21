import { NewsPart } from '@/app/types/types';
import { formatDate } from '@/app/utils/utils';

export default function NewsPart({ children, date }: NewsPart) {
  const dateTime = formatDate(date);
  return (
    <article className='flex justify-between items-center w-full h-auto shadow-cafe-news shadow-cafe-text py-4 px-5 rounded-2xl'>
      <h3 className='text-xs line-clamp-1'>{children}</h3>
      <time
        dateTime={dateTime}
        className='text-xs'
      >
        {date}
      </time>
    </article>
  );
}

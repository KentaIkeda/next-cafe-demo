// client component
export default function News({
  title,
  date,
  content,
}: {
  title: string;
  date: string;
  content: string;
}) {
  return (
    <details>
      <summary className='list-none flex justify-between items-center bg-cafe-beige rounded-sm px-1 py-2 shadow-md md:max-w-[500px] mx-auto md:p-4'>
        <h3>{title}</h3>
        <p className='text-xs'>{date}</p>
      </summary>
      <p className='text-sm mt-1 px-2 tracking-wide leading-relaxed md:max-w-[500px] md:p-4 mx-auto'>
        {content}
      </p>
    </details>
  );
}

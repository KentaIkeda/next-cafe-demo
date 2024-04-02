import { DrinkType, Items } from '@/app/types/types';

export default function Iced({
  data,
  className,
}: {
  data: DrinkType<Items>;
  className?: string;
}) {
  return (
    <>
      <h4 className={className}>アイス</h4>
      <table className='w-full h-auto'>
        <tbody className='w-full h-auto'>
          {data?.iced.items.map((data) => {
            return (
              <tr
                key={data.name}
                className='flex justify-between'
              >
                <th className='indent-3'>{data.name}</th>
                <td>
                  <span className='mr-0.5'>&yen;</span>
                  {data.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

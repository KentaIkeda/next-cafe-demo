// server component
import { DrinkType, Items } from '@/app/types/types';

export default function Hot({ data }: { data: DrinkType<Items> }) {
  return (
    <>
      <h4>ホット</h4>
      <table className='w-full h-auto'>
        <tbody className='w-full h-auto'>
          {data?.hot.items.map((data) => {
            return (
              <tr
                key={data.name}
                className='w-full flex justify-between'
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

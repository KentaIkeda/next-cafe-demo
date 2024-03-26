import { FoodType, Items } from '@/app/types/types';

export default function Cookie({ data }: { data: FoodType<Items> }) {
  return (
    <>
      <div className='m-4 p-4 md:my-8 md:p-8 bg-cafe-beige shadow-md md:max-w-[500px] mx-auto'>
        <h3 className='text-center font-bold'>クッキー</h3>
        <table className='w-full h-auto'>
          <tbody className='w-full h-auto'>
            {data?.items.map((data) => {
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
      </div>
    </>
  );
}

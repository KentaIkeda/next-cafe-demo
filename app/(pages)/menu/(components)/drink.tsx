// server component
import React, { Suspense } from 'react';
import Hot from './hot';
import Iced from './iced';
import { DrinkType, Items } from '@/app/types/types';

export default function Drink({
  data,
  children,
}: {
  data: DrinkType<Items>;
  children: React.ReactNode;
}) {
  return (
    <div className='m-4 p-4 bg-cafe-beige shadow-md'>
      <h3 className='text-center font-bold'>{children}</h3>
      <Suspense fallback={<p>Loading</p>}>
        <Hot data={data} />
      </Suspense>
      <Suspense fallback={<p>Loading</p>}>
        <Iced data={data} />
      </Suspense>
    </div>
  );
}

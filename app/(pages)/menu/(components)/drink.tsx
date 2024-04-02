// server component
import React from 'react';
import Hot from './hot';
import Iced from './iced';
import { DrinkType, Items } from '@/app/types/types';
import MenuTitle from './MenuTitle';

export default function Drink({
  data,
  children,
}: {
  data: DrinkType<Items>;
  children: React.ReactNode;
}) {
  return (
    <div className='m-4 p-4 md:my-8 md:p-8 bg-cafe-beige shadow-md md:max-w-[500px] mx-auto '>
      <MenuTitle>{children}</MenuTitle>

      <Hot data={data} />
      <Iced
        data={data}
        className='mt-4'
      />
    </div>
  );
}

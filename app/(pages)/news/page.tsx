'use client';

import { useEffect, useState, Suspense } from 'react';
import News from './(components)/news';
import HeaderNavigation from '@/app/_components/(uis)/headerNavigation';
import { navList } from '@/app/utils/navList';
import { NewsDataType } from '@/app/types/types';

export default function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const getNewsData = async () => {
      try {
        const response = await fetch('/api/data');
        const json = await response.json();
        setNewsData(json);
      } catch (error) {
        console.error('Error fetching data: ==>', error);
      }
    };
    getNewsData();
  }, []);
  const data: Array<NewsDataType> = newsData[0];

  return (
    <>
      <header
        id='header_navigation'
        className='w-full h-16 bg-cafe-cream shadow-md fixed top-0 z-10'
      >
        <nav className='h-full'>
          <HeaderNavigation navLists={navList} />
        </nav>
      </header>

      <main className='pt-40'>
        <div className='mb-10'>
          <h2 className='font-bold text-center'>ニュース一覧</h2>
          <p className='text-center text-sm mt-5'>
            タップ、クリックすると詳細を確認できます
          </p>
        </div>
        <ul className='flex flex-col gap-y-7 w-[90%] mx-auto'>
          {data?.map((data: NewsDataType) => {
            return (
              <li key={data.title}>
                <News
                  title={data.title}
                  date={data.date}
                  content={data.content}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

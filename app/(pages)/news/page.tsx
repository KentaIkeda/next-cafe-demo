'use client';

import { Header } from '@/app/_components';
import News from './(components)/news';
import { navList } from '@/app/utils/datas';
import PageTitle from '@/app/_components/(uis)/PageTitle';
import Main from '@/app/_components/(uis)/Main';
import { newsData } from '@/app/utils/datas';
import { NewsDataType } from '@/app/types/types';

export default function NewsPage() {
  return (
    <>
      <Header navLists={navList} />
      <Main>
        <PageTitle>ニュース</PageTitle>
        <p className='text-center text-sm mb-10'>
          タップ、クリックすると詳細を確認できます
        </p>
        <ul className='flex flex-col gap-y-7'>
          {newsData.map((data: NewsDataType) => {
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
      </Main>
    </>
  );
}

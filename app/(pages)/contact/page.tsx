'use client';

import Header from '@/app/_components/(header)/header';
import Main from '@/app/_components/(uis)/Main';
import PageTitle from '@/app/_components/(uis)/PageTitle';
import { navList } from '@/app/utils/datas';
import Form from './(components)/Form';

export default function ContactPage() {
  return (
    <>
      <Header navLists={navList} />
      <Main>
        <PageTitle>お問い合わせ</PageTitle>
        <Form />
      </Main>
    </>
  );
}

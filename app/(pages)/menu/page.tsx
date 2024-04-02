import Drink from './(components)/drink';
import Sandwiches from './(components)/sandwiches';
import Cookie from './(components)/cookie';
import { navList } from '@/app/utils/datas';
import { Header } from '@/app/_components';
import PageTitle from '@/app/_components/(uis)/PageTitle';
import Main from '@/app/_components/(uis)/Main';
import { menuData } from '@/app/utils/datas';

export default async function MenuPage() {
  const coffee = menuData?.coffee;
  const cookies = menuData?.cookies;
  const tea = menuData?.tea;
  const sandwiches = menuData?.sandwiches;

  return (
    <>
      <Header navLists={navList} />
      <Main>
        <PageTitle>メニュー</PageTitle>
        <Drink data={coffee}>コーヒー</Drink>
        <Drink data={tea}>紅茶</Drink>
        <Sandwiches data={sandwiches} />
        <Cookie data={cookies} />
      </Main>
    </>
  );
}

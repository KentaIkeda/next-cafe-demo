import { Items, FoodType, DrinkType, MenuDataType } from '@/app/types/types';
import Drink from './(components)/drink';
import Sandwiches from './(components)/sandwiches';
import Cookie from './(components)/cookie';
import HeaderNavigation from '@/app/_components/(uis)/headerNavigation';
import { navList } from '@/app/utils/navList';

export default async function MenuPage() {
  const getNewsData = async () => {
    try {
      const response = await fetch('/api/data/route');
      const json = await response.json();
      return json; // For server component
    } catch (error) {
      console.error('Error fetching data: ==>', error);
    }
  };
  const menuData = await getNewsData();
  const data: MenuDataType<DrinkType<Items>, FoodType<Items>> = menuData[1];

  const coffee = data?.coffee;
  const cookies = data?.cookies;
  const tea = data?.tea;
  const sandwiches = data?.sandwiches;

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
        <Drink data={coffee}>コーヒー</Drink>
        <Drink data={tea}>紅茶</Drink>
        <Sandwiches data={sandwiches} />
        <Cookie data={cookies} />
      </main>
    </>
  );
}

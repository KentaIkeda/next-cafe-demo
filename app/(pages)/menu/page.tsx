import { Items, FoodType, DrinkType, MenuDataType } from '@/app/types/types';
import Drink from './(components)/drink';
import Sandwiches from './(components)/sandwiches';
import Cookie from './(components)/cookie';
import HeaderNavigation from '@/app/_components/(uis)/headerNavigation';
import { navList } from '@/app/utils/navList';

export default async function MenuPage() {
  const menuData: MenuDataType<DrinkType<Items>, FoodType<Items>> = {
    coffee: {
      hot: {
        items: [
          { name: 'カフェラテ', price: 380 },
          { name: 'カプチーノ', price: 400 },
          { name: 'カフェモカ', price: 420 },
        ],
      },
      iced: {
        items: [
          { name: 'アイスカフェラテ', price: 400 },
          { name: 'アイスカプチーノ', price: 420 },
          { name: 'アイスカフェモカ', price: 440 },
        ],
      },
    },
    tea: {
      hot: {
        items: [
          { name: 'ストレートティー', price: 300 },
          { name: 'ミルクティー', price: 350 },
          { name: 'ハーブティー', price: 380 },
        ],
      },
      iced: {
        items: [
          { name: 'アイスストレートティー', price: 320 },
          { name: 'アイスミルクティー', price: 370 },
          { name: 'アイスハーブティー', price: 400 },
        ],
      },
    },
    cookies: {
      items: [
        { name: 'チョコチップクッキー', price: 200 },
        { name: 'オートミールレーズンクッキー', price: 180 },
        { name: 'ナッツクッキー', price: 220 },
      ],
    },
    sandwiches: {
      items: [
        { name: 'ベジタブルサンドイッチ', price: 480 },
        { name: 'エッグサラダサンドイッチ', price: 420 },
        { name: 'ハムチーズサンドイッチ', price: 500 },
      ],
    },
  };

  const coffee = menuData?.coffee;
  const cookies = menuData?.cookies;
  const tea = menuData?.tea;
  const sandwiches = menuData?.sandwiches;

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

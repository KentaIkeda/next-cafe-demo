import { Items, FoodType, DrinkType, MenuDataType } from '@/app/types/types';
import Drink from './(components)/drink';
import Sandwiches from './(components)/sandwiches';
import Cookie from './(components)/cookie';

export default async function MenuPage() {
  const getNewsData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data');
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

  console.log(coffee, tea, cookies, sandwiches);

  return (
    <main>
      <Drink data={coffee}>コーヒー</Drink>
      <Drink data={tea}>紅茶</Drink>
      <Sandwiches data={sandwiches} />
      <Cookie data={cookies} />
    </main>
  );
}

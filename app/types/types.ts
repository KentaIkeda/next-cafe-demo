export type SectionMargin = {
  image: string;
  isText: boolean;
  text?: string;
};
export type NewsPartType = {
  children: React.ReactNode;
  date: string;
};
export type WandHinFloatingCookie = number | string;
export type NewsDataType = {
  title: string;
  content: string;
  date: string;
  slug: string;
};
export type MenuDataType<Drink, Food> = {
  coffee: Drink;
  tea: Drink;
  cookies: Food;
  sandwiches: Food;
};
export type DrinkType<Items> = {
  hot: {
    items: Items;
  };
  iced: {
    items: Items;
  };
};
export type FoodType<Items> = {
  items: Items;
};
export type Items = {
  name: string;
  price: number;
}[];
export type NavListsType = { id: number; name: string; href: string }[];

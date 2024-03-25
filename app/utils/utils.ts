import { usePathname } from 'next/navigation';

export const formatDate = (date: string) => {
  // dateで渡されたYYYY/MM/DD形式の日付ををYYYY-MM-DD形式に変換する関数
  // "/"がmonthとdayの間に存在するか？
  const isExsitBetweenMandD =
    date.lastIndexOf('/') === 6 || date.lastIndexOf('/') === 7;

  if (date.indexOf('/') === 4 && isExsitBetweenMandD) {
    let [year, month, day] = date.split('/');
    if (year.length <= 2) {
      year = year.padStart(4, '20');
    }
    if (month.length <= 1) {
      month = month.padStart(2, '0');
    }
    if (day.length <= 1) {
      day = day.padStart(2, '0');
    }
    return `${year}-${month}-${day}`;
  }
};
// Rootかそれ以外かを判定する関数
export const getOtherThanRoot = (): boolean => {
  const pathName = usePathname();
  // Rootだったら"/"なので何も返されない。
  // Root意外だったら何かしら文字列が返されるのでtrueと評価される。
  if (pathName.slice(1)) {
    return true;
  } else {
    return false;
  }
};

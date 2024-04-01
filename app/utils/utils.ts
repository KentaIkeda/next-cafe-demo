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

'use client';

import { useEffect, useState, Suspense } from 'react';
import News from './(components)/news';
import HeaderNavigation from '@/app/_components/(uis)/headerNavigation';
import { navList } from '@/app/utils/navList';
import { NewsDataType } from '@/app/types/types';

export default function NewsPage() {
  // const [newsData, setNewsData] = useState([]);

  const newsData: Array<NewsDataType> = [
    {
      title: '新作ケーキ「ショコラブラン」発売',
      content:
        '本日よりケーキ新作「ショコラブラン」を発売しました。ホワイトチョコレートのムースとラズベリーソースが絶品の一品です。',
      date: '2023-08-20',
      slug: 'new-cake-chocolate-blanc',
    },
    {
      title: '季節限定ドリンク「香り紅茶ラテ」',
      content:
        '今週から季節限定ドリンク「香り紅茶ラテ」を提供開始しました。紅茶の香りと甘みがくせになる逸品です。',
      date: '2023-08-18',
      slug: 'seasonal-drink-aroma-tea-latte',
    },
    {
      title: '夏限定メニュー「アボカドサンド」',
      content:
        '夏季限定メニューとして「アボカドサンド」を発売しました。新鮮アボカドとスパイシーソースの絶妙なハーモニーをお楽しみください。',
      date: '2023-08-15',
      slug: 'summer-menu-avocado-sandwich',
    },
    {
      title: 'マカロンアソート限定販売',
      content:
        '人気のマカロンを詰め合わせた「マカロンアソート」を数量限定で販売中です。さくらんぼ、ピスタチオ、カシスなど計8種の味が楽しめます。',
      date: '2023-08-12',
      slug: 'limited-macaron-assortment',
    },
    {
      title: '新店舗が近日オープン',
      content:
        '弊社の新店舗が近日中にグランドオープン予定です。最新の設備を整え、お客様にゆったりとしたひとときをお過ごしいただけます。',
      date: '2023-08-10',
      slug: 'new-store-opening-soon',
    },
    {
      title: '人気シェフとのコラボメニュー',
      content:
        '今月は地元の著名シェフとコラボレーションした限定メニューを提供します。シェフ自慢の手料理をお楽しみください。',
      date: '2023-08-08',
      slug: 'collaboration-menu-with-chef',
    },
    {
      title: 'サンドイッチの日替わり販売',
      content:
        '本日より「日替わりサンドイッチ」を販売開始しました。毎日違う具材を使った限定サンドイッチをお楽しみいただけます。',
      date: '2023-08-05',
      slug: 'daily-sandwich-special',
    },
    {
      title: 'ストロベリーケーキ期間限定販売',
      content:
        '旬の苺を使った「ストロベリーケーキ」を期間限定で販売中です。甘酸っぱい風味とフレッシュな苺の食感が堪能できます。',
      date: '2023-08-02',
      slug: 'limited-strawberry-cake',
    },
    {
      title: '店内リニューアルのお知らせ',
      content:
        '本日より店内の一部リニューアルを実施いたしました。より快適にお過ごしいただけるよう内装を一新いたしました。',
      date: '2023-07-30',
      slug: 'store-interior-renovation',
    },
    {
      title: '夏の新作ドリンクメニュー',
      content:
        '爽やかな夏にピッタリの新作ドリンクメニューが登場しました。期間限定の「アイスカフェオレ」や「フローズンスムージー」などをお楽しみください。',
      date: '2023-07-28',
      slug: 'new-summer-drink-menu',
    },
    {
      title: 'アロマ香る紅茶フェア開催',
      content:
        '来週より「アロマ香る紅茶フェア」を開催します。厳選したアロマティックな香りの紅茶を味わい尽くせます。期間限定メニューもご用意しております。',
      date: '2023-07-25',
      slug: 'aromatic-tea-fair',
    },
    {
      title: 'フルーツタルト期間限定販売',
      content:
        '今週から人気の「フルーツタルト」を期間限定で販売いたします。柑橘系の爽やかな香りと、フルーツの甘酸っぱさをお楽しみください。',
      date: '2023-07-22',
      slug: 'limited-fruit-tart',
    },
    {
      title: '夏の新作サンドイッチ',
      content:
        '暑い夏にぴったりの新作サンドイッチ「アボカドエッグサンド」を発売いたしました。アボカドとゆで卵の組み合わせが絶品です。',
      date: '2023-07-20',
      slug: 'new-avocado-egg-sandwich',
    },
    {
      title: 'モーニングセット rinitリニューアル',
      content:
        '人気のモーニングセットがリニューアル。パンやドリンクのラインナップを一新し、より豪華な内容でお届けいたします。',
      date: '2023-07-18',
      slug: 'morning-set-renewal',
    },
    {
      title: '店内雰囲気一新のリニューアル',
      content:
        '店内の照明やインテリアを一新し、より落ち着いた雰囲気に生まれ変わりました。新しい空間でゆったりとしたひと時をお過ごしください。',
      date: '2023-07-15',
      slug: 'interior-atmosphere-renewal',
    },
    {
      title: 'ショートケーキの日販売',
      content:
        '毎月15日は「ショートケーキの日」ショートケーキ全品が10％OFFになる企画を開始しました。人気の「いちごショート」もお求めやすくなりました。',
      date: '2023-07-15',
      slug: 'shortcake-day-sale',
    },
    {
      title: '数量限定スペシャルプリン発売',
      content:
        '卵と生クリームの風味が絶妙な「スペシャルプリン」を数量限定で発売します。この機会をお見逃しなく。',
      date: '2023-07-12',
      slug: 'limited-special-pudding',
    },
    {
      title: '月替わりスイーツボックス',
      content:
        '毎月変わるスイーツの詰め合わせ「月替わりスイーツボックス」を発売開始しました。旬の味覚をお楽しみいただけます。',
      date: '2023-07-10',
      slug: 'monthly-sweets-box',
    },
    {
      title: '夏季限定かき氷メニュー',
      content:
        '暑い夏を乗り越えるべく、種類豊富な「夏季限定かき氷メニュー」を発売しました。フルーツ味、シロップ味、ミルク味など多彩なラインナップをご用意しております。',
      date: '2023-07-08',
      slug: 'summer-shaved-ice-menu',
    },
    {
      title: 'スムージーフェア開催',
      content:
        '7月は「スムージーフェア」を開催します。人気の定番フレーバーから季節限定の新作まで、さまざまなスムージーをご堪能ください。',
      date: '2023-07-05',
      slug: 'smoothie-fair',
    },
  ];

  // useEffect(() => {
  //   const getNewsData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://next-cafe-demo-k3ebcnz65-kenta-ikedas-projects.vercel.app/api/data/route'
  //       );
  //       const json = await response.json();
  //       setNewsData(json);
  //     } catch (error) {
  //       console.error('Error fetching data: ==>', error);
  //     }
  //   };
  //   getNewsData();
  // }, []);
  // const data: Array<NewsDataType> = newsData[0];

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
      </main>
    </>
  );
}

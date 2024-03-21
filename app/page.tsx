'use client';

// SはSectionの略
import * as S from './_components/index';
import { useEffect } from 'react';
import { FloatingCookie } from './utils/animation';

export default function Home() {
  useEffect(() => {
    const rCookie = new FloatingCookie('right-cookie', 45, 45);
    const lCookie = new FloatingCookie('left-cookie', 45, 45);
    rCookie.floatingCookie();
    lCookie.floatingCookie();
  }, []);

  return (
    <>
      <S.FirstView />
      <main className='px-10 h-auto w-full'>
        <section id='sec-concept'>
          <S.Concept />
        </section>
        {/* sectionの間に挿入するpng画像 */}
        <S.SectinMargin
          image='/drink/coffee1.png'
          isText
          text='美味しいクッキーも...'
        />
        <section id='sec-businesshour'>
          <S.BusinessHour />
        </section>
        <S.SectinMargin
          image='/food/cookie/cookie2.png'
          isText={false}
        />
        <section id='sec-access'>
          <S.Access />
        </section>
        <S.SectinMargin
          image='/drink/coffee2.png'
          isText={false}
        />
        <section id='sec-news'>
          <S.News />
        </section>
      </main>
    </>
  );
}

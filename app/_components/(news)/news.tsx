import SectionHead from '../(uis)/sectionHead';
import NewsPart from './(ui)/newsPart';
import LinkButton from '../(uis)/LinkButton';

export default function News() {
  return (
    <>
      <SectionHead headName='ニュース' />
      <ul className='flex flex-col gap-y-7 md:gap-y-8'>
        <li>
          <NewsPart date='2024/3/27'>ホームページができました！</NewsPart>
        </li>
        <li>
          <NewsPart date='2024/3/27'>
            新しいコーヒーメニューができました！
          </NewsPart>
        </li>
        <li>
          <NewsPart date='2024/3/27'>店舗が新しくなりました！</NewsPart>
        </li>
      </ul>
      <div className='relative left-1/2 -translate-x-1/2 inline-block mt-8 md:mt-16'>
        <LinkButton href='/news'>ニュース一覧</LinkButton>
      </div>
    </>
  );
}

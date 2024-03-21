import SectionHead from '../(uis)/sectionHead';
import NewsPart from './(ui)/newsPart';

export default function News() {
  return (
    <>
      <SectionHead headName='ニュース' />
      <ul className='flex flex-col gap-y-7'>
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
    </>
  );
}

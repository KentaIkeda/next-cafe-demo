'use client';

import Main from './_components/(uis)/Main';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();
  // ms
  const redirectCount = 3000;
  const redirect = (ms: number) => {
    setTimeout(() => {
      router.push('/');
    }, ms);
  };
  useEffect(() => {
    redirect(redirectCount);
  }, []);
  return (
    <Main className='w-full h-screen pt-0'>
      <div className='relative top-1/2 -translate-y-1/2 text-center'>
        <p className='mb-4 text-xl'>お探しのページは見つかりませんでした</p>
        <p className='text-xl'>
          {redirectCount / 1000}秒後にトップページにリダイレクトされます。
        </p>
      </div>
    </Main>
  );
}

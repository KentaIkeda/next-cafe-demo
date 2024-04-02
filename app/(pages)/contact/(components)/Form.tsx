export default function Form() {
  return (
    <form className='flex flex-col gap-y-2 max-w-96 w-56 h-auto mx-auto md:w-full'>
      <div className='flex-col flex'>
        <label htmlFor='name'>姓</label>
        <input
          className='mt-0.5 border p-1 rounded-md'
          type='text'
          id='name'
        />
      </div>
      <div className='flex-col flex'>
        <label htmlFor='name'>名</label>
        <input
          className='mt-0.5 border p-1 rounded-md'
          type='text'
          id='name'
        />
      </div>
      <div className='flex-col flex'>
        <label htmlFor='email'>メールアドレス</label>
        <input
          className='mt-0.5 border p-1 rounded-md'
          type='email'
          id='email'
        />
      </div>
      <div className='flex-col flex'>
        <label htmlFor='contact'>お問い合わせ内容</label>
        <textarea
          id='contact'
          className='mt-0.5 h-32 border rounded-md '
        ></textarea>
      </div>
      <input
        type='submit'
        className='bg-cafe-deep-green text-white mt-2 w-1/3 mx-auto py-1 rounded-md'
      />
    </form>
  );
}

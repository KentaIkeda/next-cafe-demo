import SectionHead from '../(uis)/sectionHead';

export default function Access() {
  return (
    <>
      <SectionHead headName='行き方' />
      <div className='aspect-square w-full h-auto rounded-xl overflow-hidden'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6866.80247597729!2d139.75417955505813!3d35.684402696132146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d8064d%3A0xd11a5f0b379e6db7!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1710770114588!5m2!1sja!2sjp'
          width='100%'
          height='100%'
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </>
  );
}

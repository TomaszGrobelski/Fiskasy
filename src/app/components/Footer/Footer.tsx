import Image from 'next/image';
import BlueCircle from '../circles/BlueCircle';

const Footer = () => {
  return (
    <div className='relative h-[530px] overflow-y-clip'>
      <div className='mt-20 flex justify-center items-center  gap-10 xl:px-[142px]'>
        <Image src='/images/footer/alv.png' width={316} height={30} alt='Novitus baner' className='w-[200px] h-[55px] object-contain' />
        <Image src='/images/footer/alt.png' width={283} height={30} alt='Posnet baner' className='w-[200px]  h-[35px] object-contain' />
        <Image src='/images/footer/alr.png' width={345} height={30} alt='Datecs baner' className='w-[200px]  h-[35px] object-contain' />
        <Image src='/images/footer/alp.png' width={328} height={30} alt='Innova baner' className='w-[200px]  h-[70px] object-contain ' />
      </div>


      <div className=' absolute left-[40%] bottom-[25%] transform -translate-x-1/2 translate-y-1/2  space-y-2 z-190'>
        <div className='flex items-center gap-[12px] mt-7 '>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-[10px] text-left'>
            <p className=' whitespace-nowrap'>ESC SA Centrum - ul. Mieszczańska 19, 30-313 Kraków</p>
            <p className=' whitespace-nowrap'>ESC SA Nowa Huta - Osiedle Teatralne 3, 31-945 Kraków</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-[10px] text-left'>
            <p>+48 12 633 73 08</p>
            <p>+48 12 656 51 58</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-[10px] text-left'>
            <p>sprzedaz@escsa.pl</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-[10px] text-left'>
            <p>poniedziałek - piątek: 9.00 - 17.00</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-[10px] text-left '>
            <p className='text-red font-extrabold'>+48 508 031 790 </p>
            <p>(telefon dyżurny - 8:00 - 18:00 w dni robocze)</p>
          </div>
        </div>
      </div>

      <div className='customFooterBg -z-30'></div>
      <svg
        width={492}
        height={492}
        className='absolute w-[492px] h-[492px] left-[80px] bottom-[60px] z-20 transform -translate-x-1/2 translate-y-1/2'
      >
        <circle cx='246' cy='246' r='244' stroke='#FFFFFF' strokeWidth='3' fill='none' strokeDasharray='10 10' />
      </svg>
      <BlueCircle className='w-[492px] h-[492px] left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 -z-10' />
      <BlueCircle className='w-[492px] h-[492px] hidden lg:block right-[90px] -bottom-[70px] z-10 transform translate-x-1/2 translate-y-1/2' />
    </div>
  );
};

export default Footer;

import Image from 'next/image';

import BlueCircle from '../circles/BlueCircle';

const Footer = () => {
  return (
    <div className='relative h-[530px] overflow-y-clip'>
      <div className='mt-20 flex items-center justify-center gap-10 xl:px-[142px]'>
        <Image src='/images/footer/alv.png' width={316} height={30} alt='Novitus baner' className='h-[55px] w-[200px] object-contain' />
        <Image src='/images/footer/alt.png' width={283} height={30} alt='Posnet baner' className='h-[35px] w-[200px] object-contain' />
        <Image src='/images/footer/alr.png' width={345} height={30} alt='Datecs baner' className='h-[35px] w-[200px] object-contain' />
        <Image src='/images/footer/alp.png' width={328} height={30} alt='Innova baner' className='h-[70px] w-[200px] object-contain' />
      </div>


      <Image src='/images/footer/ajv.png' width={57} height={59} alt='Innova baner' className='h-[59px] w-[57px] object-contain absolute left-[190px] top-[250px]' />



      <div className='z-190 absolute bottom-[120px] left-[200px] -translate-x-1/2 translate-y-1/2 transform space-y-2'>
        <div className='mt-7 flex items-center gap-[12px]'>
          <Image src='/icons/footer/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-left text-[10px]'>
            <p className='whitespace-nowrap'>ESC SA Centrum - ul. Mieszczańska 19, 30-313 Kraków</p>
            <p className='whitespace-nowrap'>ESC SA Nowa Huta - Osiedle Teatralne 3, 31-945 Kraków</p>
          </div>
        </div>

        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/footer/anh.png' width={26} height={26} alt='phone icon' />
          <div className='text-left text-[10px]'>
            <p>+48 12 633 73 08</p>
            <p>+48 12 656 51 58</p>
          </div>
        </div>

        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/footer/amg.png' width={26} height={26} alt='mail icon' />
          <div className='text-left text-[10px]'>
            <p>sprzedaz@escsa.pl</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/footer/amm.png' width={26} height={26} alt='clock icon' />
          <div className='text-left text-[10px]'>
            <p>poniedziałek - piątek: 9.00 - 17.00</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/footer/amo.png' width={26} height={26} alt='notyfication icon' className='' />
          <div className='text-left text-[10px]'>
            <p className='font-extrabold text-red'>+48 508 031 790 </p>
            <p>(telefon dyżurny - 8:00 - 18:00 w dni robocze)</p>
          </div>
        </div>
      </div>

      <div className='customFooterBg -z-30'></div>
      <svg
        width={492}
        height={492}
        className='absolute bottom-[70px] left-[150px] z-20 h-[492px] w-[492px] -translate-x-1/2 translate-y-1/2 transform'
      >
        <circle cx='246' cy='246' r='244' stroke='#FFFFFF' strokeWidth='3' fill='none' strokeDasharray='10 10' />
      </svg>
      <BlueCircle className='bottom-0 left-0 -z-10 h-[492px] w-[492px] -translate-x-1/2 translate-y-1/2 transform' />
      <BlueCircle className='-bottom-[70px] right-[90px] z-10 hidden h-[492px] w-[492px] translate-x-1/2 translate-y-1/2 transform lg:block' />
    </div>
  );
};

export default Footer;

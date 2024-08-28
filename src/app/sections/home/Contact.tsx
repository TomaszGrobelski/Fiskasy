import Image from 'next/image';

import '@/app/styles/contact.css';

import BlueCircle from '@/app/components/circles/BlueCircle';

import ContactInformation from './Contact/ContactInformation';

const Contact = () => {
  return (
    <div className='relative mx-[36px] mt-5 sm:mt-20'>
      <h2 className='text-[13px] font-extrabold md:text-[45px]'>KONTAKT</h2>
      <div className='absolute -left-[36px] top-7 w-[137px] border-[1px] border-black md:left-[-178px] md:top-16 md:w-[1413px] md:border-[3px]'></div>

      <div className='space-y-2 md:hidden'>
        <div className='mt-7 flex items-center gap-[12px]'>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-left text-[10px]'>
            <p>ESC SA Centrum - ul. Mieszczańska 19, 30-313 Kraków</p>
            <p>ESC SA Nowa Huta - Osiedle Teatralne 3, 31-945 Kraków</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-left text-[10px]'>
            <p>+48 12 633 73 08</p>
            <p>+48 12 656 51 58</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-left text-[10px]'>
            <p>sprzedaz@escsa.pl</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-left text-[10px]'>
            <p>poniedziałek - piątek: 9.00 - 17.00</p>
          </div>
        </div>
        <div className='flex items-center gap-[12px]'>
          <Image src='/icons/contact/amk.png' width={26} height={26} alt='localization icon' />
          <div className='text-left text-[10px]'>
            <p className='font-extrabold text-red'>+48 508 031 790 </p>
            <p>(telefon dyżurny - 8:00 - 18:00 w dni robocze)</p>
          </div>
        </div>
      </div>

      <div className='relative left-[0px] flex w-full flex-col items-center'>
        <div className='relative mt-[39px] flex w-screen max-w-[1920px] items-center md:mt-0'>
          {/* Obrazki po bokach */}
          <Image
            src='/images/contact/ajx.png'
            width={960}
            height={314}
            alt='localization icon'
            className='w-1/2 object-contain'
          />
          <Image
            src='/images/contact/ajw.png'
            width={960}
            height={314}
            alt='localization icon'
            className='w-1/2 object-contain'
          />

          {/* Obrazek na środku */}
          <div className='absolute left-1/2 top-1/2 flex h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white md:h-[100px] md:w-[100px] xl:h-[150px] xl:w-[150px] 2xl:h-[218px] 2xl:w-[218px]'>
            <Image
              src='/images/contact/aka.png'
              width={25}
              height={25}
              alt='localization icon'
              className='w-[25px] md:hidden'
            />
            <Image
              src='/images/contact/aka@2x.png'
              width={100}
              height={103}
              alt='localization icon'
              className='hidden md:block md:w-[60px] xl:w-[80px] 2xl:w-[100px]'
            />
          </div>
        </div>
        <ContactInformation />
        <p className='mt-2 text-[13px] font-extrabold md:hidden'>wyznacz trasę!</p>
      </div>

      {/* bg */}
      <div className='customContactBgElement w-[620px] h-[646px] -z-20 top-0 left-[-95px] sm:w-[1620px] sm:h-[1646px] sm:top-[-500px] sm:left-[80%]'></div>

      <svg width={171} height={171} className='absolute left-[116px] top-[240px] -z-10 h-[171px] w-[171px] sm:hidden'>
        <circle cx='85.5' cy='85.5' r='83' stroke='black' strokeWidth='1' fill='none' strokeDasharray='3 3' />
      </svg>
      <svg
        width={171}
        height={171}
        className='absolute left-[116px] top-[240px] -z-10 hidden h-[368px] w-[368px] sm:left-[95%] sm:top-[-150px] sm:block'
      >
        <circle cx='184' cy='184' r='180' stroke='black' strokeWidth='3' fill='none' strokeDasharray='5 10' />
      </svg>
      <BlueCircle className='left-[180px] top-[300px] -z-10 h-[131px] w-[132px] bg-left-top bg-no-repeat sm:hidden' />
    </div>
  );
};

export default Contact;

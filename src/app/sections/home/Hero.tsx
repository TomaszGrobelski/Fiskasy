import Image from 'next/image';
import { Icon } from '@iconify/react';


const Hero = () => {
  return (
    <div className='min-h-[755px]'>
      {/* Zdjęcie główne kas */}
      <Image
        src='/images/hero/ajt.png'
        width={304}
        height={304}
        alt='hero image'
        className='customHeroImage absolute left-[-39px] top-[337px] h-[304px] w-[304px] md:hidden'
      />
      <Image
        src='/images/hero/ajt@2x.png'
        width={1300}
        height={1300}
        alt='hero image'
        className='customHeroImage z-0 hidden rotate-[20deg] md:absolute md:left-1/2 md:top-[-20px] md:block md:h-[1300px] md:w-[1300px] md:translate-x-[-70%] md:transform'
      />

      {/* Strzałka w prawo */}
      <button>
        <Image src='/icons/hero/alj.png' width={28} height={28} alt='right arrow ' className='absolute left-[385px] top-[460px] h-7 w-7 md:hidden' />
      </button>
      <button>
        <Image
          src='/icons/hero/alj@2x.png'
          width={70}
          height={70}
          alt='right arrow '
          className='hidden translate-x-[700%] md:absolute md:left-1/2 md:top-[562px] md:block md:h-[70px] md:w-[70px] md:transform'
        />
      </button>

      {/* Strzałka w lewo */}
      <button>
        <Image
          src='/icons/hero/alo@2x.png'
          width={70}
          height={70}
          alt='right arrow '
          className='z-40 hidden translate-x-[-800%] md:absolute md:left-1/2 md:top-[562px] md:block md:h-[70px] md:w-[70px] md:transform'
        />
      </button>

      <h1 className='absolute left-[128px] top-[225px] flex h-[74px] w-[216px] flex-col items-center text-center text-[30px] font-extrabold leading-[37px] tracking-[0px] text-black opacity-100 md:left-1/2 md:top-[296px] md:h-[196px] md:w-[575px] md:translate-x-[-15%] md:transform md:text-[45px] md:leading-[40px] lg:text-[80px] lg:leading-[98px]'>
        <span className='whitespace-nowrap'>DATECS WP-50</span>
        <span className='whitespace-nowrap'>Wi-FI Online</span>
      </h1>

      <p className='absolute left-[202px] top-[347px] z-30 flex h-[46px] w-[162px] flex-col items-center text-center text-[19px] font-extrabold leading-[23px] tracking-[0px] text-white md:left-1/2 md:top-[554px] md:translate-x-[100%] md:transform md:text-[45px] md:leading-[55px]'>
        <span className='whitespace-nowrap'>ZOBACZ PRODUKT</span>
        <span className='whitespace-nowrap'>W SKLEPIE</span>
      </p>

      <p className='tracking-0 absolute left-[254px] top-[448px] h-[21px] w-[96px] text-left text-[17px] font-extrabold text-white md:left-1/2 md:top-[695px] md:translate-x-[120%] md:transform md:text-[45px]'>
        PORÓWNAJ
      </p>

      <div className='absolute top-[707px] hidden flex-col gap-[1px] text-[13px] text-white md:top-[328px] md:text-[30px] md:text-black xl:left-[30px] xl:flex 2xl:left-[142px]'>
        <p className='text-left font-extrabold'>MASZ PYTANIE?</p>
        <p className='text-left font-light'>WYŚLIJ WIADOMOŚĆ</p>
      </div>

      <div className='absolute hidden flex-col items-center gap-[10px] md:top-[434px] xl:left-[30px] xl:flex 2xl:left-[142px]'>
        <button className='z-40 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-black'>
          <Icon icon='grommet-icons:facebook-option' width={40} className='translate-y-[6px] text-lightBlue' />
        </button>

        <button className='z-40 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-black'>
          <Icon icon='icon-park-outline:instagram' width={35} className='text-lightBlue' />
        </button>
        <button className='z-40 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-black'>
          <Icon icon='akar-icons:youtube-fill' width={30} className='text-lightBlue' />
        </button>

        <button className='w-[45px] rounded-full bg-black'>
          <Icon icon='ei:sc-linkedin' width={45} height={45} className='relative z-20 text-lightBlue' />
        </button>
      </div>

      <div className='absolute top-[364px] hidden transform flex-col items-end gap-[18px] xl:right-[30px] xl:flex 2xl:right-[142px]'>
        <p className='pb-[52px] text-[45px] font-extrabold'>JĘZYK</p>
        <button>
          <Image src='/icons/hero/flags/ua.svg' width={45} height={30} alt='Poland ' className='h-[30px] w-[45px] object-contain' />
        </button>
        <button>
          <Image src='/icons/hero/flags/gb.svg' width={45} height={30} alt='Poland ' className='h-[30px] w-[45px] object-contain' />
        </button>

        <button className='border-b-[2px] border-black pb-1'>
          <Image src='/icons/hero/flags/pl.svg' width={45} height={30} alt='Poland ' className='h-[30px] w-[45px] object-contain' />
        </button>
      </div>

      <p className='absolute left-[264px] top-[672px] flex h-[48px] w-[100px] flex-col items-center text-center text-[20px] font-extrabold leading-[24px] tracking-[0px] md:left-1/2 md:top-[894px] md:translate-x-[350%] md:text-[65px] md:leading-[80px]'>
        <span className='whitespace-nowrap'>cena netto</span>
        <span className='whitespace-nowrap tracking-[0px]'> 1429,00 zł</span>
      </p>
    </div>
  );
};

export default Hero;

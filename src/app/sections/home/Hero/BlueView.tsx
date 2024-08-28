import Image from 'next/image';
import { motion } from 'framer-motion';

import BlueCircle from '@/app/components/circles/BlueCircle';
import DashedCircle from '@/app/components/circles/DashedCircle';
import IconBox from '@/app/components/IconBox/IconBox';
import IconBox2 from '@/app/components/IconBox/IconBox2';

interface IBlueView {
  toggleState: VoidFunction;
}
const BlueView = ({ toggleState }: IBlueView) => {
  return (
    <>
      <Image
        src='/images/hero/ajt.png'
        width={404}
        height={404}
        alt='hero image'
        className='customHeroImage absolute left-[-90px] top-[280px] h-[404px] w-[404px] sm:left-[-20px] md:hidden'
        style={{ transform: 'rotate(30deg)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 450, x: -300 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1 }}
        className='relative bottom-[80px]'
      >
        <Image
          src='/images/hero/ajt@2x.png'
          width={1300}
          height={1300}
          alt='hero image'
          className='customHeroImage z-10 hidden translate-x-[-72%] rotate-[20deg] md:absolute md:left-1/2 md:top-[80px] md:block md:h-[900px] md:w-[900px] md:transform xl:top-[-20px] xl:h-[1300px] xl:w-[1300px]'
        />
      </motion.div>

      <motion.svg
        width={640}
        height={640}
        className='hidden md:absolute md:left-[60%] md:top-[212px] md:block md:h-[640px] md:w-[640px] md:translate-x-[-104%] md:transform xl:left-1/2 xl:top-[212px]'
      >
        <motion.circle
          initial={{ opacity: 0, y: 150, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          cx='320'
          cy='320'
          r='310'
          stroke='#000000'
          strokeWidth='3'
          fill='none'
          strokeDasharray='5 10'
        />
      </motion.svg>
      <DashedCircle className='left-[-133px] top-[262px] z-10 h-[359px] w-[359px] sm:left-[-23px] md:hidden' />

      <h1 className='absolute left-[128px] top-[225px] flex h-[74px] w-[216px] flex-col items-center text-center text-[30px] font-extrabold leading-[37px] tracking-[0px] text-black opacity-100 transition-all duration-300 ease-in-out sm:left-[250px] sm:text-[36px] md:left-1/2 md:top-[296px] md:h-[196px] md:w-[575px] md:translate-x-[-15%] md:transform md:text-[45px] md:leading-[40px] lg:text-[60px] lg:leading-[70px] xl:text-[80px] xl:leading-[98px]'>
        <motion.span
          className='whitespace-nowrap'
          initial={{ opacity: 0, y: 50, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          DATECS WP-50
        </motion.span>
        <motion.span
          className='whitespace-nowrap'
          initial={{ opacity: 0, y: 50, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Wi-FI Online
        </motion.span>
      </h1>

      <button>
        <p className='group absolute left-[202px] top-[347px] z-30 flex h-[46px] w-[162px] flex-col items-center border-b-[2px] border-transparent text-center text-[19px] font-extrabold leading-[23px] tracking-[0px] text-white transition-all duration-300 ease-in-out sm:left-[320px] md:left-[45%] md:top-[484px] md:translate-x-[100%] md:transform md:text-[35px] md:leading-[55px] xl:left-1/2 xl:top-[554px] xl:text-[45px]'>
          <motion.span
            className='whitespace-nowrap'
            initial={{ opacity: 0, y: -50, x: -100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            ZOBACZ PRODUKT
          </motion.span>
          <motion.span
            className='whitespace-nowrap border-b-[3px] border-transparent group-hover:border-white'
            initial={{ opacity: 0, y: -50, x: -100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            W SKLEPIE
          </motion.span>
        </p>
      </button>

      <button>
        <p className='absolute left-[202px] top-[447px] z-30 flex h-[46px] w-[162px] flex-col items-center text-center text-[19px] font-extrabold leading-[23px] tracking-[0px] text-white transition-all duration-300 ease-in-out sm:left-[320px] md:left-[45%] md:top-[684px] md:translate-x-[100%] md:transform md:text-[35px] md:leading-[55px] xl:left-1/2 xl:top-[695px] xl:text-[45px]'>
          <motion.span
            className='border-b-[3px] border-transparent hover:border-white'
            initial={{ opacity: 0, y: -50, x: -100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            PORÓWNAJ
          </motion.span>
        </p>
      </button>

      <p className='absolute left-[264px] top-[672px] flex h-[48px] w-[100px] flex-col items-center text-center text-[20px] font-extrabold leading-[24px] tracking-[0px] sm:left-[374px] sm:text-[22px] md:left-1/2 md:top-[894px] md:translate-x-[150%] md:text-[55px] md:leading-[80px] xl:translate-x-[350%] xl:text-[65px]'>
        <motion.span
          className='whitespace-nowrap'
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
        >
          cena netto
        </motion.span>
        <motion.span
          className='whitespace-nowrap'
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
        >
          1429,00 zł
        </motion.span>
      </p>
      <svg
        width={245}
        height={245}
        className='absolute left-[207px] top-[597px] h-[245px] w-[245px] sm:left-[317px] md:hidden'
      >
        <motion.circle
          //   initial={{ opacity: 0, y: 50, x: -50 }}
          //   animate={{ opacity: 1, y: 0, x: 0 }}
          //   transition={{ duration: 1 }}
          cx='122.5'
          cy='122.5'
          r='120'
          stroke='#FFFFFF'
          strokeWidth='1'
          fill='none'
          strokeDasharray='3 3'
        />
      </svg>
      <svg
        width={245}
        height={245}
        className='z-[70] hidden md:absolute md:left-1/2 md:top-[787px] md:block md:h-[376px] md:w-[376px] md:translate-x-[3%] md:transform xl:translate-x-[57%]'
      >
        <motion.circle
          initial={{ opacity: 0, y: -250, x: 150, rotate: -270, scale: 1.5 }}
          animate={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          cx='188'
          cy='188'
          r='180'
          stroke='#FFFFFF'
          strokeWidth='3'
          fill='none'
          strokeDasharray='10 10'
        />
      </svg>

      <div className='absolute top-[707px] hidden flex-col gap-[1px] text-[13px] text-white md:top-[328px] md:text-[30px] md:text-black xl:left-[30px] xl:flex 2xl:left-[142px]'>
        <p className='text-left font-extrabold'>MASZ PYTANIE?</p>
        <p className='text-left font-light'>WYŚLIJ WIADOMOŚĆ</p>
      </div>

      {/* Strzałka w prawo */}
      <button>
        <Image
          src='/icons/hero/alj.png'
          width={28}
          height={28}
          alt='right arrow '
          className='absolute left-[365px] top-[460px] h-7 w-7 sm:left-[530px] sm:h-9 sm:w-9 md:hidden'
          onClick={toggleState}
        />
      </button>

      <button>
        <Image
          src='/icons/hero/alj@2x.png'
          width={70}
          height={70}
          alt='right arrow '
          className='z-50 hidden translate-x-[700%] md:absolute md:left-1/2 md:top-[600px] md:block md:h-[70px] md:w-[70px] md:translate-x-[450%] md:transform lg:top-[562px] lg:translate-x-[600%] xl:translate-x-[700%]'
          onClick={toggleState}
        />
      </button>

      {/* BG: */}
      <BlueCircle className='absolute left-[-210px] top-[170px] -z-10 h-[609px] w-[609px] sm:left-[-100px] sm:h-[650px] sm:w-[650px] md:left-1/2 md:top-[183px] md:h-[1084px] md:w-[1084px] md:-translate-x-1/2 md:transform' />

      <motion.p
        initial={{ opacity: 0, y: -70, x: -70 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1 }}
        className='absolute hidden h-[51px] w-[24px] text-left font-extrabold leading-[51px] md:left-[1660px] md:top-[679px] md:block md:text-[75px]'
      >
        <span className='opacity-[0.22]'>9</span>
      </motion.p>

      <motion.div
        className='absolute left-[307px] top-[157px] sm:left-[430px] md:left-[1398px] md:top-[183px]'
        initial={{ opacity: 1, y: 66, x: -34 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <IconBox className='md:h-[150px] md:w-[150px]' />
      </motion.div>

      <motion.div
        className='-z-10 hidden md:absolute md:left-[435px] md:top-[189px] md:grid'
        initial={{ opacity: 1, y: 135, x: -104 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconBox2 className='md:h-[175px] md:w-[174px]' />
      </motion.div>

      <motion.div
        className='hidden md:absolute md:left-[1502px] md:top-[932px] md:grid'
        initial={{ opacity: 1, y: -55, x: 23 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconBox2 className='md:h-[136px] md:w-[135px]' />
      </motion.div>

      <motion.div
        className='-z-10 hidden md:absolute md:left-[-262.4px] md:top-[779px] md:grid'
        initial={{ opacity: 1, y: -123, x: -54 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconBox2 className='md:h-[579px] md:w-[576px]' />
      </motion.div>
    </>
  );
};

export default BlueView;

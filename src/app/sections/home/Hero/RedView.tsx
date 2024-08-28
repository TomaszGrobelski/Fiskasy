import Image from 'next/image';
import { motion } from 'framer-motion';

import BlueCircle from '@/app/components/circles/BlueCircle';
import IconBox from '@/app/components/IconBox/IconBox';
import IconBox2 from '@/app/components/IconBox/IconBox2';

import Describe from './Red/Describe';
import PriceNetto from './Red/PriceNetto';

interface IRedView {
  toggleState: VoidFunction;
}
const RedView = ({ toggleState }: IRedView) => {
  return (
    <>
      <Image
        src='/images/hero/agu@2x.png'
        width={404}
        height={404}
        alt='hero image'
        className='customHeroImage absolute right-[-70px] top-[280px] h-[404px] w-[404px] sm:right-[-70px] md:hidden'
        style={{ transform: 'rotate(0deg)' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 350, x: 300 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className='relative bottom-[200px]'
      >
        <Image
          src='/images/hero/agu@2x.png'
          width={522}
          height={493}
          alt='hero image'
          className='customHeroImage absolute left-1/2 top-[507px] z-20 hidden h-[493px] w-[522px] translate-x-[100%] transform md:block'
          style={{ transform: 'rotate(0deg)' }}
        ></Image>
      </motion.div>

      {/* Strzałka w lewo */}
      <button>
        <Image
          src='/icons/hero/alo@2x.png'
          width={28}
          height={28}
          alt='right arrow '
          className='absolute right-[425px] top-[465px] z-40 md:hidden'
          onClick={toggleState}
        />
      </button>
      <button>
        <Image
          src='/icons/hero/alo@2x.png'
          width={70}
          height={70}
          alt='right arrow '
          className='z-40 hidden translate-x-[-500%] md:absolute md:left-1/2 md:top-[632px] md:block md:h-[70px] md:w-[70px] md:transform lg:top-[562px] xl:translate-x-[-800%]'
          onClick={toggleState}
        />
      </button>

      <Describe />

      <PriceNetto />

      <div className='absolute right-[50px] top-[710px] flex-col gap-[1px] text-[13px] text-white md:top-[1008px] md:text-[30px] md:text-black xl:left-[30px] xl:flex 2xl:left-[142px]'>
        <p className='text-left font-extrabold'>MASZ PYTANIE?</p>
        <p className='text-left font-light'>WYŚLIJ WIADOMOŚĆ</p>
      </div>

      {/* BG: */}
      <BlueCircle className='bg-red2 absolute right-[-210px] top-[191px] -z-10 h-[609px] w-[609px] sm:h-[650px] sm:w-[650px] md:left-1/2 md:top-[183px] md:h-[1084px] md:w-[1084px] md:-translate-x-1/2 md:transform' />

      <motion.p
        initial={{ opacity: 0, y: 70, x: 70 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1 }}
        className='absolute hidden h-[51px] w-[24px] text-left font-extrabold leading-[51px] md:left-[1590px] md:top-[609px] md:block md:text-[75px]'
      >
        <span className='opacity-[0.22]'>9</span>
      </motion.p>

      <motion.div
        className='absolute left-[307px] top-[157px] sm:left-[430px] md:left-[1364px] md:top-[249px]'
        initial={{ opacity: 1, y: -66, x: 34 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <IconBox className='md:h-[150px] md:w-[150px]' />
      </motion.div>

      <motion.div
        className='-z-10 hidden md:absolute md:left-[331px] md:top-[324px] md:grid'
        initial={{ opacity: 1, y: -135, x: 104 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconBox2 className='md:h-[175px] md:w-[174px]' />
      </motion.div>

      <motion.div
        className='hidden md:absolute md:left-[1525px] md:top-[877px] md:grid'
        initial={{ opacity: 1, y: 55, x: -23 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconBox2 className='md:h-[136px] md:w-[135px]' />
      </motion.div>

      <motion.div
        className='-z-10 hidden md:absolute md:left-[-316.4px] md:top-[656px] md:grid'
        initial={{ opacity: 1, y: 123, x: 54 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconBox2 className='md:h-[579px] md:w-[576px]' />
      </motion.div>

      <svg
        width={658}
        height={658}
        className='z-10 hidden md:absolute md:left-1/2 md:top-[183px] md:block md:h-[658px] md:w-[658px] md:translate-x-[3%] md:transform xl:translate-x-[20%]'
      >
        <motion.circle
          initial={{ opacity: 1, y: 250, rotate: -270, scale: 1.1 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          cx='329'
          cy='329'
          r='320'
          stroke='#FFFFFF'
          strokeWidth='3'
          fill='none'
          strokeDasharray='10 10'
        />
      </svg>
    </>
  );
};

export default RedView;

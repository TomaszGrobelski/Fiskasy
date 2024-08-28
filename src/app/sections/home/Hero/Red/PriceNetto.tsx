import { motion } from 'framer-motion';

const PriceNetto = () => {
  return (
    <>
      <p className='absolute right-[257px] top-[689px] flex h-[48px] w-[100px] flex-col items-center text-center text-[20px] font-extrabold leading-[24px] tracking-[0px] sm:right-[257px] sm:text-[22px] md:left-1/2 md:top-[848px] md:translate-x-[-250%] md:text-[55px] md:leading-[80px] xl:translate-x-[-350%] xl:text-[65px]'>
        <motion.span
          className='whitespace-nowrap'
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          cena netto
        </motion.span>
        <motion.span
          className='whitespace-nowrap'
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          1990,00 zł
        </motion.span>
      </p>

      <svg
        width={245}
        height={245}
        className='z-[100] hidden md:absolute md:left-1/2 md:top-[723px] md:block md:h-[376px] md:w-[376px] md:translate-x-[-103%] md:transform xl:translate-x-[-130%]'
      >
        <motion.circle
          initial={{ opacity: 0, y: -250, rotate: -90, scale: 1.5, z: 100 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
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
      <svg width={225} height={225} className='absolute right-[225px] top-[590px] z-[100] md:hidden'>
        <motion.circle
          initial={{ opacity: 0, y: -250, rotate: -90, scale: 1.5, z: 100 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          cx='112.5'
          cy='112.5'
          r='105'
          stroke='#000000'
          strokeWidth='1'
          fill='none'
          strokeDasharray='3 3'
        />
      </svg>
    </>
  );
};

export default PriceNetto;

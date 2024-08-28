import { motion } from 'framer-motion';

const Describe = () => {
  return (
    <>
      <h1 className='absolute right-[148px] top-[242px] flex h-[74px] w-[154px] flex-col items-center text-center text-[30px] font-extrabold leading-[37px] tracking-[0px] text-black opacity-100 transition-all duration-300 ease-in-out sm:right-[148px] sm:text-[36px] md:left-1/2 md:top-[285px] md:h-[196px] md:w-[575px] md:translate-x-[-80%] md:transform md:text-[45px] md:leading-[40px] lg:text-[60px] lg:leading-[70px] xl:top-[220px] xl:text-[80px] xl:leading-[98px]'>
        <motion.span
          className='whitespace-nowrap'
          initial={{ opacity: 0, y: 50, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ELZAB Zeta Online
        </motion.span>
      </h1>

      <p className='absolute right-[203px] top-[355px] z-30 flex h-[46px] w-[162px] flex-col items-center text-center text-[19px] font-extrabold leading-[23px] tracking-[0px] text-white transition-all duration-300 ease-in-out sm:right-[203px] md:left-[45%] md:top-[384px] md:translate-x-[-140%] md:transform md:text-[35px] md:leading-[55px] xl:left-1/2 xl:top-[448px] xl:translate-x-[-170%] xl:text-[45px]'>
        <motion.span
          className='whitespace-nowrap'
          initial={{ opacity: 0, y: -50, x: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ZOBACZ PRODUKT
        </motion.span>
        <motion.span
          className='whitespace-nowrap'
          initial={{ opacity: 0, y: -50, x: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          W SKLEPIE
        </motion.span>
      </p>

      <button>
        <p className='absolute right-[260px] top-[454px] z-30 flex h-[46px] w-[162px] flex-col items-center text-center text-[19px] font-extrabold leading-[23px] tracking-[0px] text-white transition-all duration-300 ease-in-out sm:right-[260px] md:left-[45%] md:top-[535px] md:translate-x-[-150%] md:transform md:text-[35px] md:leading-[55px] lg:top-[535px] lg:translate-x-[-200%] xl:left-1/2 xl:top-[635px] xl:text-[45px]'>
          <motion.span
            className='border-b-[3px] border-transparent hover:border-white'
            initial={{ opacity: 0, y: -50, x: -100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            PORÓWNAJ
          </motion.span>
        </p>
      </button>
    </>
  );
};

export default Describe;

'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

import '@/app/styles/hero.css';

import { useState } from 'react';

import BlueView from './Hero/BlueView';
import RedView from './Hero/RedView';

const Hero = () => {
  const [isBlue, setIsBlue] = useState(true);

  const toggleState = () => {
    setIsBlue(!isBlue);
  };

  return (
    <div className='min-h-[755px]'>


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

      <div className='absolute top-[364px] z-20 hidden transform flex-col items-end gap-[18px] xl:right-[30px] xl:flex 2xl:right-[142px]'>
        <p className='pb-[52px] text-[45px] font-extrabold'>JĘZYK</p>
        <button>
          <Image
            src='/icons/hero/flags/ua.svg'
            width={45}
            height={30}
            alt='Poland '
            className='h-[30px] w-[45px] object-contain'
          />
        </button>
        <button>
          <Image
            src='/icons/hero/flags/gb.svg'
            width={45}
            height={30}
            alt='Poland '
            className='h-[30px] w-[45px] object-contain'
          />
        </button>

        <button className='border-b-[2px] border-black pb-1'>
          <Image
            src='/icons/hero/flags/pl.svg'
            width={45}
            height={30}
            alt='Poland '
            className='h-[30px] w-[45px] object-contain'
          />
        </button>
      </div>

      {isBlue ? <BlueView toggleState={toggleState} /> : <RedView toggleState={toggleState} />}
    </div>
  );
};

export default Hero;

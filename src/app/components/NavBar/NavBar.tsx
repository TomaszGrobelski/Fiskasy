'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import useCloseMenuOnResize from '@/app/hooks/useCloseMenuOnResize';

import Menu from './Menu/Menu';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useCloseMenuOnResize(() => setIsMenuOpen(false));

  return (
    <div className='relative z-50 flex items-center justify-between gap-4 pr-[27px] pt-[26px]'>
      <div className='mt-8 hidden gap-[20px] text-[20px] font-light lg:gap-[40px] xl:flex xl:p-0 xl:pl-7 xl:text-[26px] 2xl:text-[30px]'>
        <button className='cursor-pointer'>
          <p>Sklep</p>
        </button>
        <button className='cursor-pointer'>
          <p>Promocje</p>
        </button>
        <button className='group relative cursor-pointer'>
          <p className='whitespace-nowrap'>Poradnik Fiskalny</p>
          <div className='absolute -left-[84px] top-full opacity-0 transition-opacity duration-75 group-hover:opacity-100'>
            <div className='customDropDownBox relative z-30 flex min-w-[400px] flex-col items-center gap-[15px] rounded-lg bg-white p-1 text-[20px] backdrop-blur-[50px]'>
              <p>Jak wybrać urządzenie fiskalne</p>
              <p>Oprogramowanie do zarządzania firmą</p>
              <p>Sklep (systemy sprzedaży)</p>
              <p>Restauracja</p>
            </div>
            <div className='absolute opacity-0 transition-opacity duration-75 group-hover:opacity-100 -top-[7px] left-1/2 -z-10 h-5 w-5 -translate-x-1/2 rotate-45 transform rounded-[6px] bg-white'></div>
          </div>
        </button>
      </div>
      <Image src='/Logo/aji.png' width={100} height={43} alt='Logo fiskasy.pl' className='ml-7 h-[43px] w-[100px] xl:hidden xl:p-0' />
      <Image src='/Logo/aji@2x.png' width={172} height={73} alt='Logo fiskasy.pl' className='ml-7 hidden h-[73px] w-[172px] xl:block xl:p-0' />

      <input
        type='text'
        name=''
        placeholder='Wyszukaj...'
        className='mt-5 hidden h-[39px] w-full rounded-[9px] border-[1px] border-gray bg-transparent pl-4 text-black outline-none placeholder:text-black lg:max-w-[300px] xl:block xl:max-w-[200px] 2xl:max-w-[400px]'
      />

      <button onClick={toggleMenu} className='flex flex-col items-center xl:hidden'>
        <Icon icon='mdi-light:menu' fontSize={21} />
        <p className='text-[14px] font-light'>Menu</p>
      </button>

      {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
    </div>
  );
};

export default NavBar;

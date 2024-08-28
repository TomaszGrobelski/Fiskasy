'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';

import '@/app/styles/menu.css';

interface IMenu {
  toggleMenu: VoidFunction;
}

const Menu = ({ toggleMenu }: IMenu) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: '', stiffness: 300, damping: 30, duration: 0.5 }}
      className='fixed inset-0 z-[200] flex'
    >
      <div onClick={toggleMenu} className='h-screen w-screen'></div>

      <div className='menu-container flex flex-col items-center overflow-y-auto overflow-x-hidden'>
        <button onClick={toggleMenu} className='absolute left-[24px] top-[24px]'>
          <Icon icon='lets-icons:close-round' width={24} />
        </button>

        <div className='relative -right-20 top-3 mr-4 mt-[8px]'>
          <input
            type='text'
            name=''
            placeholder='Wyszukaj...'
            className='h-[39px] max-w-[150px] self-end border-b-[1px] border-gray bg-transparent pl-4 pr-8 text-black outline-none placeholder:text-black'
          />
          <Icon icon='fluent:search-32-regular' fontSize={24} className='absolute right-2 top-2' />
        </div>

        <div className='mt-8 flex flex-col items-center text-[30px]'>
          <p>Sklep</p>
          <p>Promocje</p>
          <p className='whitespace-nowrap'>Poradnik Fiskalny</p>
        </div>

        <ul className='mt-[34px] flex flex-col items-center gap-[26px] text-[17px]'>
          <li>Jak wybrać urządzenie fiskalne</li>
          <li>Oprogramowanie do zarządzania firmą</li>
          <li>Sklep (systemy sprzedaży)</li>
          <li>Restauracja</li>
        </ul>

        <div className='mt-[39px] flex flex-col items-center text-[20px]'>
          <p className='text-left font-extrabold'>MASZ PYTANIE?</p>
          <p className='text-left font-light'>WYŚLIJ WIADOMOŚĆ</p>
        </div>

        <div className='mt-[52px] flex flex-col items-center gap-[10px]'>
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

        <div className='mt-[58px] flex items-center gap-[33px]'>
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

        {/* Information */}

        <div className='my-[120px] flex flex-col items-center text-[20px]'>
          <h2 className='w-full text-end text-[20px] font-extrabold text-black'>
            WYBIERZ SWOJĄ BRANŻE I POZNAJ URZĄDZENIA
          </h2>
          <div className='relative right-[-65px] mt-[15px] w-[180px] rounded-l-xl border-[3px] border-black'></div>

          <ul className='flex flex-col items-center space-y-4 pt-[60px] text-[15px]'>
            <li>Salon fryzjerski, salon kosmetyczny</li>
            <li>Fitness i siłownie</li>
            <li>Branża budowlana</li>
            <li>Lekarze</li>
            <li>Lekarze</li>
            <li>Mała gastronomia</li>
            <li>Warsztat samochodowy, wulkanizacja</li>
            <li>Apteka</li>
            <li>Taxi</li>
            <li>Piekarnia i cukiernia</li>
            <li>Mały punkt handlowo usługowy</li>
            <li>Sklep internetowys</li>
          </ul>

          <h3 className='w-full pt-[30px] text-end text-[20px] font-extrabold text-black'>PORADNIK</h3>
          <div className='relative right-[-65px] mt-[15px] w-[180px] rounded-l-xl border-[3px] border-black'></div>

          <ul className='flex flex-col items-center space-y-4 pt-[60px] text-[15px]'>
            <li>Jak wybrać urządzenie fiskalne</li>
            <li>Oprogramowanie do zarządzania firmą</li>
            <li>Sklep (systemy sprzedaży)</li>
            <li>Restauracja</li>
          </ul>

          <h3 className='w-full pt-[30px] text-end text-[20px] font-extrabold text-black'>INFORMACJE</h3>
          <div className='relative right-[-65px] mt-[15px] w-[180px] rounded-l-xl border-[3px] border-black'></div>

          <ul className='flex flex-col items-center space-y-4 pt-[60px] text-[15px]'>
            <li>Zmiana VAT. Programowanie kasy</li>
            <li>Przeglądy okresowe</li>
            <li>Porady prawne</li>
            <li>Często zadawne pytania</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;

import React from 'react';

const Information = () => {
  return (
    <div className='absolute left-[142px] top-[1101px] z-20 hidden md:left-[40px] xl:block'>
      <h2 className='max-w-[354px] text-[30px] font-extrabold text-black'>WYBIERZ SWOJĄ BRANŻE I POZNAJ URZĄDZENIA</h2>
      <div className='relative left-[-142px] xl:w-[450px] 2xl:w-[536px] border-[3px] border-black'></div>

      <ul className='space-y-4 pt-[60px]'>
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

      <h3 className='max-w-[354px] pt-[30px] text-[30px] font-extrabold text-black'>PORADNIK</h3>
      <div className='relative left-[-142px] xl:w-[450px] 2xl:w-[536px]  border-[3px] border-black'></div>

      <ul className='space-y-4 pt-[60px]'>
        <li>Jak wybrać urządzenie fiskalne</li>
        <li>Oprogramowanie do zarządzania firmą</li>
        <li>Sklep (systemy sprzedaży)</li>
        <li>Restauracja</li>
      </ul>

      <h3 className='max-w-[354px] pt-[30px] text-[30px] font-extrabold text-black'>INFORMACJE</h3>
      <div className='relative left-[-142px] xl:w-[450px] 2xl:w-[536px]  border-[3px] border-black'></div>

      <ul className='space-y-4 pt-[60px]'>
        <li>Zmiana VAT. Programowanie kasy</li>
        <li>Przeglądy okresowe</li>
        <li>Porady prawne</li>
        <li>Często zadawne pytania</li>
      </ul>
    </div>
  );
};

export default Information;

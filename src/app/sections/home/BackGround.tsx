import React from 'react';

import '@/app/styles/hero.css';

import { motion } from 'framer-motion';

import BlueCircle from '@/app/components/circles/BlueCircle';
import DashedCircle from '@/app/components/circles/DashedCircle';
import IconBox from '@/app/components/IconBox/IconBox';
import IconBox2 from '@/app/components/IconBox/IconBox2';

const BackGround = () => {
  return (
    <>
      <p className='absolute left-[166px] top-[73px] h-[49px] w-[21px] text-left text-[40px] font-extrabold leading-[49px] tracking-[0px] text-black opacity-[0.22] md:left-1/2 md:top-[212px] md:translate-x-[-4000%] md:transform md:text-[75px]'>
        x
      </p>
      <svg
        width={376}
        height={376}
        className='hidden md:absolute md:left-[1502px] md:top-[-64px] md:block md:h-[376px] md:w-[376px]'
      >
        <circle cx='188' cy='188' r='180' stroke='#ffffff' strokeWidth='3' fill='none' strokeDasharray='10 10' />
      </svg>
      {/* <BlueCircle className='absolute left-[-210px] top-[170px] h-[609px] w-[609px] sm:left-[-100px] sm:h-[650px] sm:w-[650px] md:left-1/2 md:top-[183px] md:h-[1084px] md:w-[1084px] md:-translate-x-1/2 md:transform' /> */}

      <BlueCircle className='customHeroBg left-[-461.3px] top-[-154.04px] -z-20 h-[1052px] w-[1157px] bg-lightBlue bg-left-top bg-no-repeat sm:h-[1200px] sm:w-[1357px] md:left-1/2 md:top-[-400px] md:h-[2200px] md:w-[2100px] md:-translate-x-1/2 md:transform' />

      {/* <IconBox2 className='-z-10 hidden md:absolute md:left-1/2 md:top-[189px] md:grid md:h-[175px] md:w-[174px] md:translate-x-[-300%] md:transform' /> */}

      <IconBox2 className='-z-10 hidden md:absolute md:left-[1441px] md:top-[1399px] md:grid md:h-[579px] md:w-[576px]' />

      {/* kreskowane tam gdzie głowne zdj */}
      {/* <svg
        width={640}
        height={640}
        className='hidden md:absolute md:left-[60%] md:top-[212px] md:block md:h-[640px] md:w-[640px] md:translate-x-[-104%] md:transform xl:left-1/2 xl:top-[212px]'
      >
        <circle cx='320' cy='320' r='310' stroke='#000000' strokeWidth='3' fill='none' strokeDasharray='5 10' />
      </svg>
      <DashedCircle className='left-[-133px] top-[262px] z-10 h-[359px] w-[359px] sm:left-[-23px] md:hidden' /> */}

      {/* <IconBox className='absolute left-[307px] top-[157px] sm:left-[430px] md:left-1/2 md:top-[183px] md:h-[100px] md:w-[100px] md:translate-x-[355%] md:transform' /> */}

      {/* Okrąg ceny 1429 */}
      {/* <svg
        width={245}
        height={245}
        className='absolute left-[207px] top-[597px] h-[245px] w-[245px] sm:left-[317px] md:hidden'
      >
        <circle cx='122.5' cy='122.5' r='120' stroke='#FFFFFF' strokeWidth='1' fill='none' strokeDasharray='3 3' />
      </svg>
      <svg
        width={245}
        height={245}
        className='hidden md:absolute md:left-1/2 md:top-[787px] md:block md:h-[376px] md:w-[376px] md:translate-x-[3%] md:transform xl:translate-x-[57%]'
      >
        <circle cx='188' cy='188' r='180' stroke='#FFFFFF' strokeWidth='3' fill='none' strokeDasharray='10 10' />
      </svg> */}

      {/* <IconBox2 className='hidden md:absolute md:left-1/2 md:top-[932px] md:grid md:h-[136px] md:w-[135px] md:translate-x-[410%] md:transform' /> */}

      {/* <IconBox2 className='-z-10 hidden md:absolute md:left-[-262.4px] md:top-[779px] md:grid md:h-[579px] md:w-[576px]' /> */}

      <p className='absolute left-[36px] top-[770px] h-[51px] w-[21px] text-center text-[42px] font-extrabold leading-[51px] opacity-[0.22] md:hidden'>
        -
      </p>

      {/* discount */}
      <svg width={291} height={291} className='absolute left-[-167px] top-[985px] h-[291px] w-[291px] md:hidden'>
        <circle cx='145.5' cy='145.5' r='141.5' stroke='black' strokeWidth='3' fill='none' strokeDasharray='5 10' />
      </svg>
      <svg width={291} height={291} className='absolute left-[-167px] top-[2596px] hidden h-[640px] w-[640px] md:grid'>
        <circle cx='320' cy='320' r='310' stroke='black' strokeWidth='3' fill='none' strokeDasharray='5 10' />
      </svg>


      <BlueCircle className='left-[-56px] top-[1094px] -z-20 h-[224px] w-[224px] bg-left-top bg-no-repeat md:left-[64px] md:top-[2836px] md:h-[492px] md:w-[492px]' />

      <IconBox
        imageWidth={192}
        imageHeight={192}
        className='absolute left-[352px] top-[1023px] h-[108px] w-[108px] md:left-[142px] md:top-[2373px] md:h-[579px] md:w-[578px]'
      />
      <BlueCircle className='left-[36px] top-[1181px] -z-20 h-[997px] w-[995px] bg-lightBlue bg-left-top bg-no-repeat md:hidden' />
      <p className='absolute left-[194px] top-[1265px] h-[24px] w-[11px] text-[20px] font-extrabold leading-[51px] opacity-[0.22] md:left-[1748px] md:top-[2075px] md:text-[75px]'>
        2
      </p>
      <p className='absolute left-[634px] top-[3626px] hidden text-[75px] font-extrabold opacity-[0.22] md:block'>3</p>

      <svg width={202} height={202} className='absolute left-[84px] top-[1577px] h-[202px] w-[202px] md:hidden'>
        <circle cx='100' cy='100' r='98' stroke='black' strokeWidth='1' fill='none' strokeDasharray='3 3' />
      </svg>
      <p className='absolute left-[15px] top-[1447px] h-[51px] w-[21px] text-[42px] font-extrabold leading-[51px] opacity-[0.22]'>
        -
      </p>
      <p className='tetx-left absolute left-[341px] top-[1866px] h-[24px] w-[10px] text-[20px] font-extrabold leading-[51px] opacity-[0.22] md:left-[46px] md:top-[4921px] md:-z-10 md:text-[75px]'>
        7
      </p>

      {/* Dased + + */}
      <p className='absolute left-[394px] top-[2125px] h-[51px] w-[24px] text-[42px] font-extrabold leading-[51px] opacity-[0.22]'>
        +
      </p>
      <svg width={202} height={202} className='absolute left-[1404px] top-[2262px] hidden h-[374px] w-[374px] md:block'>
        <circle cx='187' cy='187' r='180' stroke='black' strokeWidth='3' fill='none' strokeDasharray='5 10' />
      </svg>

      <p className='tetx-left absolute left-[26px] top-[2417px] h-[24px] w-[11px] text-[20px] font-extrabold leading-[51px] opacity-[0.22] md:hidden'>
        5
      </p>
      <BlueCircle className='left-[-575px] top-[2189px] -z-20 h-[982px] w-[943px] bg-lightBlue bg-left-top bg-no-repeat md:hidden' />
      <p className='absolute left-[191px] top-[2722px] h-[51px] w-[24px] text-[42px] font-extrabold leading-[51px] opacity-[0.22] md:left-[1600px] md:top-[2468px] md:text-[75px]'>
        +
      </p>

      <p className='tetx-left absolute left-[312px] top-[3566px] h-[51px] w-[24px] text-[42px] font-extrabold leading-[51px] opacity-[0.22] '>
        9
      </p>

      <p className='absolute left-[394px] top-[3797px] h-[51px] w-[21px] scale-x-150 text-[42px] font-extrabold leading-[51px] opacity-[0.22] md:left-[1662px] md:top-[1248px] md:scale-[170%]'>
        -
      </p>
      <p className='absolute left-[10px] top-[4205px] h-[51px] w-[24px] scale-x-[80%] scale-y-90 text-[42px] font-extrabold leading-[51px] opacity-[0.22]'>
        +
      </p>

      <p className='absolute font-extrabold leading-[51px] opacity-[0.22] md:left-[1698px] md:top-[3642px] md:text-[75px]'>
        +
      </p>

      <p className='tetx-left absolute left-[281px] top-[4569px] h-[51px] w-[17px] text-[42px] font-extrabold leading-[51px] opacity-[0.22] md:left-[66px;] md:top-[2778px] md:text-[75px]'>
        1
      </p>
    </>
  );
};

export default BackGround;

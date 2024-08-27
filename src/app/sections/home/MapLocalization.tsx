import Image from 'next/image';

const MapLocalization = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative flex items-center mt-[39px] w-full max-w-[430px]'>
        {/* Obrazki po bokach */}
        <Image src='/images/contact/ajx.png' width={215} height={79} alt='localization icon' className='w-1/2 object-contain' />
        <Image src='/images/contact/ajw.png' width={215} height={79} alt='localization icon' className='w-1/2 object-contain' />

        {/* Obrazek na środku */}
        <div className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-[55px] h-[55px] flex items-center justify-center bg-white rounded-full'>
          <Image src='/images/contact/aka.png' width={25} height={25} alt='localization icon' className='w-[25px]' />
        </div>
      </div>
      <p className='text-[13px] font-extrabold mt-2'>wyznacz trasę!</p>
    </div>
  );
};

export default MapLocalization;

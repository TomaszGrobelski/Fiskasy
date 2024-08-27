import Image from 'next/image';

const ContactInformation = () => {
  return (
    <div className='mt-[15px] hidden w-full gap-8 md:flex md:justify-between md:px-[0px] md:text-[16px] lg:text-[18px] xl:px-[0px]'>
      <div className='space-y-[7px]'>
        <div className='flex items-center gap-[20px]'>
          <Image src='/icons/contact/anj@2x.png' width={45} height={45} alt='localization icon' />
          <div className='text-left'>
            <p>ESC SA Centrum - ul. Mieszczańska 19, 30-313 Kraków</p>
          </div>
        </div>
        <div className='flex items-center gap-[20px]'>
          <Image src='/icons/contact/amg@2x.png' width={45} height={45} alt='localization icon' />
          <div className='text-left'>
            <p>sprzedaz@escsa.pl</p>
          </div>
        </div>
        <div className='flex items-center gap-[20px]'>
          <Image src='/icons/contact/ami@2x.png' width={45} height={45} alt='localization icon' />
          <div className='text-left'>
            <p>+48 12 633 73 08</p>
            <p>+48 12 656 51 58</p>
          </div>
        </div>
      </div>

      <div>
        <p>poniedziałek - piątek: 9.00 - 17.00</p>
      </div>

      <div className='flex flex-col items-end gap-[7px]'>
        <div className='flex items-center gap-[20px]'>
          <div className='text-right'>
            <p>ESC SA Nowa Huta - Osiedle Teatralne 3, 31-945 Kraków</p>
          </div>
          <Image src='/icons/contact/anj@2x.png' width={45} height={45} alt='localization icon' />
        </div>
        <div className='flex items-center gap-[20px]'>
          <div className='text-right'>
            <p>sprzedaznh@escsa.pl</p>
          </div>
          <Image src='/icons/contact/amg@2x.png' width={45} height={45} alt='localization icon' />
        </div>
        <div className='flex items-center gap-[20px]'>
          <div className='text-right'>
            <p>+48 12 656 33 64</p>
          </div>
          <Image src='/icons/contact/ami@2x.png' width={45} height={45} alt='localization icon' />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;

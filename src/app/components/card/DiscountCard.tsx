import Image from 'next/image';

import BlueCircle from '@/app/components/circles/BlueCircle';

interface IDiscountCarD {
  title: string;
  image: string;
  price: number;
}
const DiscountCard = ({ title, image, price }: IDiscountCarD) => {
  return (
    <div className='relative flex h-[151px] w-[95px] flex-col items-center rounded-[14px] bg-white shadow-discountBoxShadow md:h-[331px] md:w-[240px] md:rounded-[35px]'>
      <p className='px-6 pt-[8px] text-center text-[6px] font-extrabold leading-[8px] md:text-[20px] md:leading-[24px]'>{title}</p>
      <Image src={image} width={95} height={101} alt='discount product' className='relative -top-6 md:hidden' />
      <Image src={image} width={322} height={229} alt='discount product' className='hidden md:relative md:-top-16 md:block' />
      <BlueCircle className='left-[50px] top-[110px] h-[40px] w-[40px] md:left-[160px] md:top-[208px] md:h-[100px] md:w-[100px]'>
        <span className='relative -left-1 text-[10px] font-extrabold leading-[13px] md:text-[20px] md:leading-[24px]'>{price}zł</span>
      </BlueCircle>
      <Image src='/images/promotions/aky.png' width={29} height={29} alt='discount icon' className='absolute left-[70px] top-[135px] md:hidden' />
      <Image
        src='/images/promotions/aky@2x.png'
        width={74}
        height={74}
        alt='discount icon'
        className='absolute hidden md:left-[200px] md:top-[281px] md:block'
      />
    </div>
  );
};

export default DiscountCard;

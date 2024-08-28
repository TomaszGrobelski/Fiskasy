import Image from 'next/image';

import BlueCircle from '../circles/BlueCircle';

interface IProductCard {
  title: string;
  image: string;
  price: number;
  isOnlline?: boolean;
}
const ProductCard = ({ title, image, price, isOnlline }: IProductCard) => {
  return (
    <div className='relative flex h-[175px] w-[129px] sm:scale-125 md:scale-100 flex-col items-center rounded-[7px] bg-white shadow-discountBoxShadow md:h-[331px] md:w-[240px] md:rounded-[35px]'>
      <p className='mx-auto mt-[21px] h-[11px] w-[74px] text-center text-[9px] sm:text-[12px] font-extrabold md:w-[200px] md:h-[46px] md:text-[20px]'>{title}</p>
      <Image src={image} width={100} height={140} alt='Product card' className='relative -top-2 md:hidden' />
      <Image src={image} width={258} height={183} alt='Product card' className='relative -top-10 hidden md:block' />
      <BlueCircle className='left-[103px] top-[115px] h-[51px] w-[51px] md:left-[170px] md:top-[187px] md:h-[100px] md:w-[100px]'>
        <span className='text-center text-[9px] font-extrabold md:text-[20px]'>
          OD <br /> {price}zł
        </span>
      </BlueCircle>
      {isOnlline && <p>ONLINE</p>}
    </div>
  );
};

export default ProductCard;

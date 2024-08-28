import DiscountCard from '@/app/components/card/DiscountCard';
import ProductCard from '@/app/components/card/ProductCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from '@/app/components/core/carousel';

import { productsList } from './productsList';

const Promotions = () => {
  return (
    <div className='relative mx-[15px] flex flex-col items-center md:mx-0 md:mt-[350px] xl:mt-[300px] xl:left-[170px] 2xl:left-[200px]'>
      <h2 className='h-[17px] w-[75px] self-start text-left text-[14px] sm:text-[16px] font-extrabold leading-[17px]  md:h-[55px] md:w-[242px] md:self-center md:text-[45px] md:text-white'>
        PROMOCJE
      </h2>

      <div className='mt-[10px]  sm:mb-10 max-w-[415px] sm:max-w-[550px]  md:max-w-[750px] lg:max-w-[950px] self-center'>
        <Carousel>
          <CarouselContent className='flex gap-[2px]'>
            <CarouselItem className='basis-1/3'>
              <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
            </CarouselItem>
            <CarouselItem className='basis-1/3'>
              <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
            </CarouselItem>
            <CarouselItem className='basis-1/3'>
              <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
            </CarouselItem>
            <CarouselItem className='basis-1/3'>
              <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
            </CarouselItem>
            <CarouselItem className='basis-1/3'>
              <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
            </CarouselItem>
            <CarouselItem className='basis-1/3'>
              <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
            </CarouselItem>
          </CarouselContent>
          <CarouselNavigation />
        </Carousel>
      </div>

      {/* <div className='mt-[13px] flex w-[415px] justify-center gap-[38px] self-center md:w-[1228px]'>
        <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
        <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
        <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
        <DiscountCard title='Kasoterminal POSPAY2 Online' image='/images/promotions/ako.png' price={1799} />
      </div> */}

      <h3 className='mt-[20px]  hidden text-[45px] font-extrabold text-white md:block lg:mt-0'>KATALOG PRODUKTÓW </h3>
      <div className=' md:mt-[35px] grid grid-cols-2 sm:gap-24 gap-x-[61px] gap-y-[41px] lg:grid-cols-3 md:gap-x-[45px]'>
        {productsList.map((product) => (
          <ProductCard key={product.id} title={product.title} image={product.image} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Promotions;

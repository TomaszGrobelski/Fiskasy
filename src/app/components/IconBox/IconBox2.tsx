import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface IIconBox {
  className?: string;
}
const IconBox2 = ({ className }: IIconBox) => {
  return (
    <div className={twMerge('grid grid-cols-3 grid-rows-3 opacity-10', className)}>
      <Image src='/icons/hero/aag@2x.png' height={135} width={135} alt='' className='col-start-3 row-start-3 w-full' />
      <Image src='/icons/hero/aam@2x.png' height={135} width={135} alt='' className='col-start-1 row-start-3 w-full' />
      <Image src='/icons/hero/aak@2x.png' height={135} width={135} alt='' className='col-start-2 row-start-2 w-full' />
      <Image src='/icons/hero/aai@2x.png' height={135} width={135} alt='' className='col-start-3 row-start-1 w-full' />
    </div>
  );
};

export default IconBox2;

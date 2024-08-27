import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface IIconBox {
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
}
const IconBox = ({ className, imageHeight = 20, imageWidth = 20 }: IIconBox) => {
  return (
    <div className={twMerge('grid  grid-cols-3 grid-rows-3 opacity-10', className)}>
      <Image src='/icons/hero/aag.png' height={imageHeight} width={imageWidth} alt='slash icon' className='col-start-1 row-start-1 w-full' />
      <Image src='/icons/hero/aam.png' height={imageHeight} width={imageWidth} alt='multiplication icon' className='col-start-3 row-start-1 w-full' />
      <Image src='/icons/hero/aak.png' height={imageHeight} width={imageWidth} alt='add icon' className='col-start-2 row-start-2 w-full' />
      <Image src='/icons/hero/aai.png' height={imageHeight} width={imageWidth} alt='subtraction icon' className='col-start-3 row-start-3 w-full' />
    </div>
  );
};

export default IconBox;

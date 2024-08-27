import { twMerge } from 'tailwind-merge';

interface IBlueCircle {
  className?: string;
  children?: React.ReactNode;
}
const BlueCircle = ({ className, children }: IBlueCircle) => {
  return <div className={twMerge(' absolute rounded-full flex items-center justify-center text-white  bg-semiBlue ', className)}>{children}</div>;
};

export default BlueCircle;

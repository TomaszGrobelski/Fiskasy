import { twMerge } from "tailwind-merge"
interface IDashedCircle{
    className?: string;
}
const DashedCircle = ({className}:IDashedCircle) => {
  return (
    <div 
    className={ twMerge (" rounded-full border-[2px] border-black absolute border-dashed  ", className)}></div>
  )
}

export default DashedCircle
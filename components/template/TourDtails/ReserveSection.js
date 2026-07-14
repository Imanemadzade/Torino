import { spNum } from "core/utils/replaceNumber";
import Link from "next/link";

function ReserveSection({ className, price }) {
  return (
    
      <div className= {`${className} mt-8 text-[#282828B2]  flex justify-between items-baseline `}>
        <Link
          href="#"
          className="w-38.5 flex items-center p-2  justify-center  bg-[#28A745] text-white rounded-sm text-[15px] font-normal md:w-30  lg:w-40 "
        >
          رزرو و خرید
        </Link>
        <div>
          <span
            className="ml-1.5
    text-[#009ECA] "
          >
            {spNum(+price)}
          </span>
          تومان
        </div>
      </div>
    
  );
}

export default ReserveSection;

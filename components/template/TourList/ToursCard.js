import Image from "next/image";

import { spNum } from "core/utils/replaceNumber";
import { tourDays } from "core/utils/DateFn";
import { vehicleToFa } from "core/utils/VehicleToFaFn";
import Link from "next/link";

async function ToursCard({
  name,
  image,
  price,
  title,
  startDate,
  endDate,
  fleetVehicle,
  options,
}) {
  return (
    <section className="w-[327.44px] h-69.25 mb-8.75  rounded-[10px]  shadow-[0_0_2px_#00000025] md:w-[278.44px] ">
      <Image
        src={image}
        width={1000}
        height={1000}
        alt={`${name} picture`}
        className="w-97.5 h-39.75 md:h-39.75 mb-2 "
      />
      <div>
        <h3 className="mb-1.5 mr-2.5 text-[22px] font-normal ">{title}</h3>
        <p className="mb-1.5 mr-2.5 text-[#282828B2] text-[15px] font-normal ">
          مهرماه .{tourDays(startDate, endDate)} روزه -{" "}
          {vehicleToFa(fleetVehicle)} -{options[1]}...
        </p>
        <div className="h-px bg-[#D9D9D9]"></div>
      </div>
      <div className="mx-1.5 h-10.25 flex justify-between items-center">
        <Link
          href="#"
          className="inline-flex items-center justify-center w-24.75 h-7.25 bg-[#28A745] text-white rounded-sm text-[15px] font-normal"
        >
          رزرو
        </Link>
        <div>
          <span>{spNum(+price)}</span>
          تومان
        </div>
      </div>
    </section>
  );
}

export default ToursCard;


import Image from "next/image";

import { spNum } from "core/utils/replaceNumber";
import { tourDays } from "core/utils/DateFn";
import { vehicleToFa } from "core/utils/VehicleToFaFn";

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
    <section>
      <Image src={image} width={1000} height={1000} alt={`${name} picture`} />
      <div>
        <h3>{title}</h3>
        <p>
          مهرماه .{tourDays(startDate, endDate)} روزه -{" "}
          {vehicleToFa(fleetVehicle)} -{options[1]}...
        </p>
      </div>
      <div>
        <button>رزرو</button>
        <div>
          <span>{spNum(+price)}</span>
          تومان
        </div>
      </div>
    </section>
  );
}

export default ToursCard;

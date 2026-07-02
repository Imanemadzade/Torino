import BusIcon from "@/icons/TourDetails/BusIcon";
import Calender2Icon from "@/icons/TourDetails/Calender2Icon";
import CalenderIcon from "@/icons/TourDetails/CalenderIcon";
import Profile2UsersIcon from "@/icons/TourDetails/Profile2UsersIcon";
import Routing2Icon from "@/icons/TourDetails/Routing2Icon";
import SecurityIcon from "@/icons/TourDetails/SecurityIcon";
import { cityToFa } from "core/utils/cityToFa";
import { e2p } from "core/utils/replaceNumber";
import { vehicleToFa } from "core/utils/VehicleToFaFn";

function TourInfo({
  origin,
  fleetVehicle,
  availableSeats,
  insurance,
  startDate,
  endDate,
}) {
  const TOUR_INFO_DATA = [
    {
      id: "1",
      icon: Routing2Icon,
      title: "مبدا",
      text: cityToFa(origin),
    },
    {
      id: "2",
      icon: CalenderIcon,
      title: "تاریخ رفت",
      text: "تهران",
    },
    {
      id: "3",
      icon: Calender2Icon,
      title: "تاریخ برگشت",
      text: "تهران",
    },
    {
      id: "4",
      icon: BusIcon,
      title: "حمل و نقل",
      text: vehicleToFa(fleetVehicle),
    },
    {
      id: "5",
      icon: Profile2UsersIcon,
      title: "ظرفیت",
      text: e2p(availableSeats),
    },
    {
      id: "6",
      icon: SecurityIcon,
      title: "بیمه",
      text: "تهران",
    },
  ];

  return (
    <div className="grid grid-cols-3 justify-items-start gap-x-2 gap-y-6 text-[14px]">
      {TOUR_INFO_DATA.map((item) => (
        <div key={item.id} className="text-right">
          <div className="flex  items-center  gap-2   ">
            <item.icon className="size-4 " />
            <p className=" text-[#444444]">{item.title}</p>
          </div>
          <p className="text-center text-[#282828] text-[12px] ">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default TourInfo;

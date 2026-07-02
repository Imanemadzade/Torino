import TourHeader from "./TourHeader";
import TourImage from "./TourImage";
import TourInfo from "./TourInfo";

function TourDtails({
  id,
  image,
  price,
  title,
  startDate,
  endDate,
  fleetVehicle,
  availableSeats,
  options,
  origin: { name: origin },
  insurance,
}) {
  return (
    <div className="lg:bg-[#F3F3F3]">
      <div className="container  m-auto  px-7.75 py-3.75  md:px-18.75 lg:px-31.5">
        <div>
          <TourImage image={image} name={origin} />
          <TourHeader title={title} startDate={startDate} endDate={endDate} />
          <TourInfo
            origin={origin}
            fleetVehicle={fleetVehicle}
            price={price}
            availableSeats={availableSeats}
            insurance={insurance}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>
    </div>
  );
}

export default TourDtails;

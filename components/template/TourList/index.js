import Image from "next/image";
import Link from "next/link";
import ToursCard from "./ToursCard";

function TourList({ toursData }) {
  if (!toursData) return <p>توری وجود ندارد .</p>;

  return (
    <main>
      <Image
        src="/images/banner-image.webp"
        width={1000}
        height={1000}
        alt="Torino Banner"
        className="w-full h-29.75 mb-6 md:h-40 lg:h-87.5  lg:mb-4.25"
      />
      <div className="container  m-auto  px-2.5  md:px-18.75">
        <div className="flex">
          <h1 className=" text-[16px] text-[#595959] font-semibold m-auto  lg:text-[28px]  ">
            <span className="text-[#28A745]">تورینو</span> برگزار کننده بهترین
            تور های داخلی و خارجی{" "}
          </h1>
        </div>
        <div>
          <h2>همه تورها</h2>
          {toursData?.map((tour) => (
            <ToursCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default TourList;

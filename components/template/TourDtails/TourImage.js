import Image from "next/image";

function TourImage({ image, name }) {
  return (
    <div >
      <Image
        src={image}
        width={1000}
        height={1000}
        alt={`${name} picture`}
        className="  aspect-ratio-4/3 object-cover mb-4  rounded-xl "
      />
    </div>
  );
}

export default TourImage;

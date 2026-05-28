import { serverFetch } from "@/service/http";
import TourList from "@/template/TourList";

async function page({ searchParams }) {
  const data = await serverFetch("/tour", searchParams, { cache: "no-store" });

  return <TourList toursData={data} />;
}

export default page;

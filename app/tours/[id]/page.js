import { serverFetch } from "@/service/http";


async function TourDetailsPage({ params }) {
  const tourData = await serverFetch(`/tour/${(await params).id}`);
  console.log(tourData);
  return <div>TourDetailsPage</div>;
}

export default TourDetailsPage;

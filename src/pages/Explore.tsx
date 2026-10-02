import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { ServiceDirectory } from "../components/ServiceDirectory";
import { ReviewWall } from "../components/ReviewWall";

export function ExplorePage() {
  return (
    <>
      <Hero />
      <Features />
      <ServiceDirectory />
      <ReviewWall />
    </>
  );
}

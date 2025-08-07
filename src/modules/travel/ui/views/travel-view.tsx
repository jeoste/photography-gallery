import { PageTransitionContainer } from "@/components/page-transition";
import { Introduction } from "../components/introduction";
import { TravelSection } from "../sections/travel-section";

export const TravelView = () => {
  return (
    <PageTransitionContainer className="flex flex-col lg:flex-row min-h-screen w-full">
      <Introduction />
      <TravelSection />
    </PageTransitionContainer>
  );
};

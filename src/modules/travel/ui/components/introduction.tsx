import CardContainer from "@/components/card-container";

export const Introduction = () => (
  <CardContainer>
    <div className="flex flex-col p-12 gap-[128px]">
      <h1 className="text-4xl">Travel</h1>
      <div className="flex flex-col gap-4 font-light">
        <p>
          Exploring countries and cities, feeling the culture, and capturing, little by little, the moments.
          From cities to countryside, the most crowded places to the most hidden ones.
        </p>
      </div>
    </div>
  </CardContainer>
);

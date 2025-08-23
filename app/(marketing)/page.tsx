import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";
import { QualitiesSection } from "./_components/qualities-section";
import { PropertiesSection } from "./_components/properties-section";
import { StatsSection } from "./_components/stats-section";
import { TestimonialsSection } from "./_components/testimonials-section";

 export default function MarketingPage() {
  return (
    <>
      <div className="min-h-full flex flex-col">
        <div className="flex flex-col bg-black items-center justify-center text-center gap-y-8 flex-1 px-0 pb-10">
          <Heroes />
          <PropertiesSection />
          <QualitiesSection />
          <StatsSection />
          <TestimonialsSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

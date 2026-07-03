import { LogoBeltRow } from "@/components/HomePartnerBelts";
import { useSiteContentQuery } from "@/lib/site-content";

const HomeProfessionalsSection = () => {
  const { data: homeProfessionals } = useSiteContentQuery("home_professionals");
  const hasLogos = homeProfessionals.some((logo) => logo.src);

  if (!hasLogos) {
    return null;
  }

  return (
    <section className="border-y-2 border-foreground bg-white">
      <div className="container py-8 md:py-10">
        <div className="text-center">
          <span className="eyebrow">Partnered with professionals</span>
        </div>
        <div className="mt-6">
          <LogoBeltRow
            label="Partnered with professionals"
            logos={homeProfessionals}
            showLabel={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeProfessionalsSection;

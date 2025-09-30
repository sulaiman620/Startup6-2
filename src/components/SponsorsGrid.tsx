import smesAuthority from "@/assets/sponsors/smes-authority.png";
import googleStartups from "@/assets/sponsors/google-startups.png";
import deel from "@/assets/sponsors/deel.png";
import brex from "@/assets/sponsors/brex.png";
import risingOmani from "@/assets/sponsors/rising-omani.png";
import riyada from "@/assets/sponsors/riyada.png";

const SponsorsGrid = () => {
  const sponsors = [
    { logo: smesAuthority, name: "SMEs Development Authority" },
    { logo: riyada, name: "Riyada" },
    { logo: risingOmani, name: "The Rising Omani Startups Programme" },
    { logo: googleStartups, name: "Google for Startups" },
    { logo: deel, name: "Deel" },
    { logo: brex, name: "Brex" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
      {sponsors.map((sponsor, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center p-6 md:p-8 bg-card rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer animate-fade-in-up hover-lift"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-full h-auto max-h-20 object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 filter grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SponsorsGrid;

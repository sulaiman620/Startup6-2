import { Rocket, Code, Lightbulb, Zap, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const TechStarts = () => {
  const { t } = useLanguage();
  const startups = [
    {
      Icon: Rocket,
      title: "SpaceConnect",
      description: "Revolutionary satellite communication platform connecting remote areas with high-speed internet.",
    },
    {
      Icon: Code,
      title: "DevFlow",
      description: "AI-powered development environment that accelerates coding workflows and team collaboration.",
    },
    {
      Icon: Lightbulb,
      title: "BrightEnergy",
      description: "Smart energy management system for homes and businesses, optimizing consumption patterns.",
    },
    {
      Icon: Zap,
      title: "QuickMed",
      description: "On-demand healthcare platform connecting patients with medical professionals instantly.",
    },
    {
      Icon: Target,
      title: "GoalTracker Pro",
      description: "Comprehensive project management tool with advanced analytics and team performance insights.",
    },
    {
      Icon: Globe,
      title: "EcoWorld",
      description: "Sustainable marketplace platform for eco-friendly products and carbon-neutral delivery.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {t("techstarts.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("techstarts.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, index) => {
            const Icon = startup.Icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover-lift animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {startup.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {startup.description}
                </p>
                <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground transition-all ripple">
                  {t("techstarts.readmore")}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStarts;

import { Code2, Rocket, Zap, Users, Sparkles, Trophy, Target, Lightbulb, Globe, Star, Award, Heart } from "lucide-react";

const SponsorsGrid = () => {
  const sponsors = [
    { Icon: Code2, name: "TechCorp" },
    { Icon: Rocket, name: "InnovateLab" },
    { Icon: Zap, name: "QuickStart" },
    { Icon: Users, name: "TeamHub" },
    { Icon: Sparkles, name: "BrightIdeas" },
    { Icon: Trophy, name: "WinVentures" },
    { Icon: Target, name: "FocusGroup" },
    { Icon: Lightbulb, name: "ThinkTank" },
    { Icon: Globe, name: "GlobalTech" },
    { Icon: Star, name: "StarterKit" },
    { Icon: Award, name: "Excellence" },
    { Icon: Heart, name: "PassionProjects" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {sponsors.map((sponsor, index) => {
        const Icon = sponsor.Icon;
        return (
          <div
            key={index}
            className="flex items-center justify-center p-8 bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer animate-fade-in-up"
            style={{ 
              animationDelay: `${index * 0.05}s`,
              transformStyle: "preserve-3d",
            }}
          >
            <Icon
              size={48}
              className="text-muted group-hover:text-primary transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SponsorsGrid;

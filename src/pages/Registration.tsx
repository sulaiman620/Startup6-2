import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BackgroundParticles from "@/components/BackgroundParticles";
import { useLanguage } from "@/contexts/LanguageContext";

const Registration = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative gradient-secondary min-h-[600px] flex items-center justify-center overflow-hidden animate-gradient">
        <BackgroundParticles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto glass rounded-2xl p-8 md:p-16 animate-scale-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
              {t("registration.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {t("registration.description")}
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="https://www.techstars.com/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white text-lg px-8 py-6 hover:scale-105 transition-all ripple shadow-glow group"
                >
                  {t("registration.button")}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;

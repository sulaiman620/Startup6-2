import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BackgroundParticles from "@/components/BackgroundParticles";

const Registration = () => {
  const [remainingSeats] = useState(47);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative gradient-secondary min-h-[600px] flex items-center justify-center overflow-hidden animate-gradient">
        <BackgroundParticles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto glass rounded-2xl p-8 md:p-16 animate-scale-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
              Ready to Innovate? Register Now!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Join us for an exhilarating weekend of innovation, networking, and
              launching your startup idea. Don't miss this opportunity to connect with
              mentors, judges, and fellow entrepreneurs. Secure your spot today!
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg" 
                className="gradient-primary text-white text-lg px-8 py-6 hover:scale-105 transition-all ripple shadow-glow group"
              >
                Register for Startup Weekend
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <p className="text-white/80 mt-4 text-sm animate-glow-pulse">
                ⚡ Remaining Seats: <span className="font-bold text-xl">{remainingSeats}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
              What You'll Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Launch Your Idea</h3>
                <p className="text-muted-foreground">
                  Transform your concept into a viable startup in just 54 hours
                </p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Network & Collaborate</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded entrepreneurs, developers, and designers
                </p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Win Amazing Prizes</h3>
                <p className="text-muted-foreground">
                  Compete for cash prizes, mentorship opportunities, and investor meetings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;

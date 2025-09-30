import CountdownTimer from "@/components/CountdownTimer";
import EventTimetable from "@/components/EventTimetable";
import SponsorsGrid from "@/components/SponsorsGrid";
import BackgroundParticles from "@/components/BackgroundParticles";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Countdown */}
      <section className="relative gradient-primary min-h-[600px] flex items-center justify-center overflow-hidden animate-gradient">
        <BackgroundParticles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 animate-scale-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">
              Welcome! To Startup weekend
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-2 animate-fade-in-down" style={{ animationDelay: "0.1s" }}>
              My work about outside space
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 animate-fade-in-down" style={{ animationDelay: "0.2s" }}>
              WE ARE COMING SOON
            </h2>
            <p className="text-white/80 mb-8 animate-fade-in-down" style={{ animationDelay: "0.3s" }}>
              Get ready for a weekend full of creativity, innovation, and entrepreneurship at Startup Weekend Sur!
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* What is Startup Weekend */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What is Startup Weekend?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Startup Weekend is a 54-hour event where aspiring entrepreneurs, developers, designers,
              and startup enthusiasts come together to share ideas, form teams, and launch a startup in
              a single weekend. It's an opportunity to learn, network, and potentially find your co-founder
              or next big idea.
            </p>
          </div>
        </div>
      </section>

      {/* Event Timetable */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
            Event Timetable
          </h2>
          <EventTimetable />
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
            Our Esteemed Sponsors
          </h2>
          <SponsorsGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Quick Links</a>
              <a href="#" className="hover:text-accent transition-colors">About</a>
              <a href="#" className="hover:text-accent transition-colors">Community</a>
            </div>
            <div className="flex gap-4">
              {/* Social icons */}
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const EventTimetable = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();

  // Placeholder images - replace with your actual event images
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      titleKey: "home.timetable.day1.title",
      dateKey: "home.timetable.day1.date"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
      titleKey: "home.timetable.day2.title",
      dateKey: "home.timetable.day2.date"
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop",
      titleKey: "home.timetable.day3.title",
      dateKey: "home.timetable.day3.date"
    },
  ];

  // Reset to first slide when language changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [language]);

  // Auto-advance every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-secondary/80 backdrop-blur-sm text-secondary-foreground p-3 rounded-full hover:bg-secondary transition-all hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-secondary/80 backdrop-blur-sm text-secondary-foreground p-3 rounded-full hover:bg-secondary transition-all hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slides Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full relative"
            >
              <div className="relative aspect-video w-full">
                <img
                  src={slide.image}
                  alt={t(slide.titleKey)}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <p className="text-sm md:text-base font-semibold mb-2 text-accent">{t(slide.dateKey)}</p>
                  <h3 className="text-xl md:text-4xl font-bold">{t(slide.titleKey)}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary w-8"
                : "bg-muted hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventTimetable;

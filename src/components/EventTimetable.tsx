import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const EventTimetable = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const events = [
    { date: "22 Jun 1951", title: "First dogs in space" },
    { date: "04 Oct 1957", title: "First artificial satellite" },
    { date: "03 Feb 1966", title: "Moon landing on the Moon" },
    { date: "20 Jul 1969", title: "First human on the Moon" },
    { date: "17 Apr 1976", title: "Closest flyby of the Sun" },
    { date: "04 Dec 1978", title: "First orbital exploration of Venus" },
    { date: "19 Feb 1986", title: "First inhabited space station" },
    { date: "08 Aug 1989", title: "First astrometric satellite" },
    { date: "20 Nov 1998", title: "First multinational space station" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-secondary text-white p-4 rounded-full hover:bg-accent transition-all hover:scale-110 shadow-lg"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-secondary text-white p-4 rounded-full hover:bg-accent transition-all hover:scale-110 shadow-lg"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide px-16 py-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-4 min-w-max">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative scroll-snap-align-start animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 hover-glow min-w-[200px] border border-border">
                <p className="text-sm text-primary font-semibold mb-2">{event.date}</p>
                <p className="text-sm text-foreground">{event.title}</p>
              </div>
              {index < events.length - 1 && (
                <div className="absolute top-1/2 right-[-16px] w-4 h-0.5 bg-accent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimetable;

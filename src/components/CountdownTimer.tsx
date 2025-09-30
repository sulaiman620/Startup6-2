import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-10-30T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days", delay: "0.8s" },
    { value: timeLeft.hours, label: "Hours", delay: "0.9s" },
    { value: timeLeft.minutes, label: "Minutes", delay: "1.0s" },
    { value: timeLeft.seconds, label: "Seconds", delay: "1.1s" },
  ];

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="countdown-item animate-fade-in-up w-[40%] sm:w-auto"
          style={{ animationDelay: unit.delay }}
        >
          <div className="pulse-number bg-white rounded-lg p-4 md:p-6 shadow-lg min-w-[80px] md:min-w-[100px]">
            <span className="text-3xl md:text-5xl font-bold text-primary block">
              {unit.value}
            </span>
          </div>
          <span className="text-white text-sm md:text-base mt-2 font-medium block text-center">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

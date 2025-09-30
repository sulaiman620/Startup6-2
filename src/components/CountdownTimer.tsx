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

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center animate-pulse-glow">
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg min-w-[80px] md:min-w-[100px]">
        <span className="text-3xl md:text-5xl font-bold text-primary">{value}</span>
      </div>
      <span className="text-white text-sm md:text-base mt-2 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-4 md:gap-6 justify-center items-center w-full">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;

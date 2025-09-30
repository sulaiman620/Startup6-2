import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CountdownTimer = () => {
  const { t } = useLanguage();
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
    <div className="flex flex-col items-center gap-2">
      <div 
        key={value}
        className="bg-white rounded-xl p-4 md:p-6 shadow-lg min-w-[70px] md:min-w-[100px] animate-[scale-pulse_1s_ease-in-out]"
        style={{
          animation: 'scale-pulse 1s ease-in-out'
        }}
      >
        <span className="text-3xl md:text-5xl font-bold text-primary block text-center">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-white text-xs md:text-base font-medium uppercase tracking-wide">{label}</span>
      <style>{`
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );

  return (
    <div className="flex gap-4 md:gap-6 justify-center items-center w-full">
      <TimeUnit value={timeLeft.days} label={t("countdown.days")} />
      <TimeUnit value={timeLeft.hours} label={t("countdown.hours")} />
      <TimeUnit value={timeLeft.minutes} label={t("countdown.minutes")} />
      <TimeUnit value={timeLeft.seconds} label={t("countdown.seconds")} />
    </div>
  );
};

export default CountdownTimer;

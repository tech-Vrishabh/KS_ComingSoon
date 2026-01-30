import { useEffect, useState } from "react";

export default function Counter() {
  const launchDate = "2026-01-31T00:00:00";

  const calculateTimeLeft = () => {
    const diff = new Date(launchDate).getTime() - Date.now();

    if (diff <= 0) {
      return null; // ⛔ countdown finished
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ⛔ Hide counter after launch
  if (!timeLeft) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Coming Soon text */}
      <p className="text-lg md:text-xl uppercase tracking-[0.35em] text-purple-300/70">
        Coming Soon
      </p>

      {/* Countdown */}
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="px-4 py-3 md:px-6 md:py-4 bg-slate-900/70 backdrop-blur-md rounded-xl border border-purple-400/20 text-center"
            >
              <div className="text-2xl md:text-4xl font-bold text-purple-200">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs tracking-widest text-purple-300/60 uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

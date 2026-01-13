import React, { useState, useEffect } from "react";
import {
  Book,
  Music,
  Headphones,
  Library,
  ListMusic,
  Award,
  Users,
  Heart,
} from "lucide-react";

export default function ComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // 🔔 SET YOUR LAUNCH DATE HERE
  const LAUNCH_DATE = new Date("2026-01-30T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ⏳ Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = LAUNCH_DATE - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Book, title: "Katha", desc: "Sacred stories & wisdom" },
    { icon: Music, title: "Kirtan", desc: "Devotional chanting" },
    { icon: Heart, title: "Bhajan", desc: "Spiritual hymns" },
    { icon: Headphones, title: "Read & Hear", desc: "Immersive experience" },
    { icon: Library, title: "Library", desc: "Your collection" },
    { icon: ListMusic, title: "Playlists", desc: "Curated journeys" },
    { icon: Award, title: "Rewards", desc: "Spiritual milestones" },
    { icon: Users, title: "Community", desc: "Connect & share" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl transition-all duration-700"
          style={{
            top: "15%",
            left: `${15 + mousePosition.x * 0.015}%`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl transition-all duration-700"
          style={{
            bottom: "15%",
            right: `${15 + mousePosition.y * 0.015}%`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full text-center space-y-16">
            {/* Title */}
            <div className="space-y-8">
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 bg-clip-text text-transparent"
                style={{ fontFamily: "'El Messiri', sans-serif" }}
              >
                KATHĀ SINDHU
              </h1>

              {/* Coming Soon */}
              <div className="flex justify-center">
                <div className="px-8 py-3 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-purple-400/40">
                  <span className="text-lg font-semibold tracking-wider text-purple-200">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* ⏳ Countdown */}
            <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-4 md:gap-6">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 md:px-6 md:py-4 bg-slate-900/70 backdrop-blur-md rounded-xl border border-purple-400/20"
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

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-5 bg-slate-900/60 rounded-xl border border-purple-500/20"
                  >
                    <Icon className="mx-auto mb-3 w-7 h-7 text-purple-300" />
                    <h3 className="text-purple-100 font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-purple-300/60">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="space-y-6">
              <p className="text-xl italic text-purple-200/70">
                Beautiful things unfold slowly…
              </p>
              <a href="/subscribe">
                <button className="px-16 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:scale-105 transition">
                  Notify Me →
                </button>
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-purple-300/50 text-sm">
          © 2024 Kathā Sindhu. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

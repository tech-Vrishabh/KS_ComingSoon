import { useState, useEffect } from "react";
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

import Counter from "./Counter";
import Footer from "./Footer";
import StoreBadges from "./Storebadge";


export default function ComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const today = new Date().getDate();
  const isLaunchDay = today === 31;


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full text-center space-y-16">
            {/* Title */}
            <div className="space-y-6">
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 bg-clip-text text-transparent"
                style={{ fontFamily: "'El Messiri', sans-serif" }}
              >
                KATHĀ SINDHU
              </h1>
              <p
                className="text-xl md:text-2xl text-purple-200/80 tracking-wide"
                style={{ fontFamily: "'El Messiri', sans-serif" }}
              >
                — By HH Radhanath Swami
              </p>
            </div>

            {/* Image */}
            {isLaunchDay ? <div className="flex justify-center">
              <img
                src="/assets/images/Launched.png"
                alt="Coming Soon"
                className="w-full max-w-md rounded-xl shadow-lg shadow-purple-900/40"
              />
            </div> : 
            <div className="flex justify-center">
              <img
                src="/assets/images/phone.png"
                alt="Coming Soon"
                className="w-full max-w-md rounded-xl shadow-lg shadow-purple-900/40"
              />
            </div>}

            {/* Counter OR Store Badges */}
            {isLaunchDay ? <StoreBadges /> : <Counter />}
            

           

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-5 bg-slate-900/60 backdrop-blur-md rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition"
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
            {/* CTA */}
            <div className="space-y-10 md:space-y-12">
              <p className="text-xl italic text-purple-200/70 mb-10 md:mb-12">
                Beautiful things unfold slowly…
              </p>

              {isLaunchDay ? null : <a
                href="https://rgm.myflodesk.com/fvel9d74gv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-16 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:scale-105 transition">
                  Notify Me →
                </button>
              </a>}
              
            </div>

          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

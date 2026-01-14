export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 text-purple-100">
      
      {/* Top glow divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

          {/* Left */}
          <div className="opacity-80 text-center md:text-left">
            © {new Date().getFullYear()} Kathā Sindhu. All rights reserved.
          </div>

          {/* Center */}
          <div className="flex items-center gap-5 opacity-90 tracking-wide text-lg md:text-xl font-medium">
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="opacity-40">|</span>
            <a
              href="/terms-of-service"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 opacity-90">
            <a
              href="https://x.com/iskconchowpatty"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/iskcon.chowpatty?igsh=MTNta21lMXVzMHozbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCKsPhfStsvK9NKPjXj0DLvg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              YouTube
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

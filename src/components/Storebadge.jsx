export default function StoreBadges() {
  return (
    <div className="flex justify-center animate-fade-in">
      {/* Glass Container */}
      <div className="px-8 py-10 md:px-12 md:py-12
        bg-black/40 backdrop-blur-xl
        rounded-2xl
        border border-white/10
        shadow-2xl shadow-black/40
        flex flex-col items-center gap-8
      ">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-purple-200">
          Download Now
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-10">
          {/* iOS Column */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://rgm.onl/ks-ios"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="/assets/images/ios_app_qr.png"
                alt="iOS App QR Code"
                className="w-40 h-40 md:w-44 md:h-44
                  rounded-xl
                  bg-black/30
                  border border-purple-500/30
                  group-hover:scale-105 transition
                "
              />
            </a>

            <a
              href="https://rgm.onl/ks-ios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/KS_App_Store_Badge-208x62.png"
                alt="Download on the App Store"
                className="h-[62px] hover:scale-105 transition cursor-pointer"
              />
            </a>
          </div>

          {/* Android Column */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://rgm.onl/ks-and"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="/assets/images/andro_app_qr.png"
                alt="Android App QR Code"
                className="w-40 h-40 md:w-44 md:h-44
                  rounded-xl
                  bg-black/30
                  border border-purple-500/30
                  group-hover:scale-105 transition
                "
              />
            </a>

            <a
              href="https://rgm.onl/ks-and"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/KS_Play_Store_badge-208x62.webp"
                alt="Get it on Google Play"
                className="h-[62px] hover:scale-105 transition cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

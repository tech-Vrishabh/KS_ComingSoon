export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-slate-950 text-purple-100 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Title */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-200">
            Kathā Sindhu – Privacy Policy
          </h1>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-200">
            Introduction
          </h2>
          <p className="text-purple-200/80 leading-relaxed">
            Kathā Sindhu is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, store, and protect your personal
            information when you use the Kathā Sindhu mobile and web application.
          </p>
        </section>

        {/* Policy Content */}
        <section className="space-y-8 text-purple-200/80 leading-relaxed">

          <div>
            <h3 className="font-semibold text-purple-200">
              1. Information We Collect
            </h3>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Mobile number</li>
              <li>
                App usage data such as listening history, session duration, and
                feature interactions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              2. Purpose of Data Collection
            </h3>
            <p>
              All collected information is used strictly for internal analytical
              and functional purposes, including improving user experience, app
              performance, and content delivery. We do not use personal data for
              advertising, marketing, or profiling.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              3. Rewards System (Non-Monetary)
            </h3>
            <p>
              Kathā Sindhu includes a non-monetary rewards and engagement system
              designed solely to encourage consistent spiritual engagement.
              Rewards have no monetary value and cannot be redeemed for cash or
              goods.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              4. App Permissions & Purpose of Use
            </h3>
            <p>
              Kathā Sindhu requests certain device permissions only when required
              for core functionality and user-initiated actions. All permissions
              are used responsibly and in compliance with platform privacy
              guidelines.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-purple-200">
              4.1 Media Library Access
            </h4>
            <p>
              The app may request access to media files on your device to allow
              you to select, play, and manage audio or video content within the
              app. This permission is used only for media explicitly selected by
              the user and never to scan or access personal files without
              consent.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-purple-200">
              4.2 Microphone Access
            </h4>
            <p>
              Microphone access is requested only when a user initiates a feature
              requiring audio input, such as voice interaction or audio
              recording. The app does not record audio in the background or
              without explicit user action.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-purple-200">
              4.3 Camera Access
            </h4>
            <p>
              Camera access may be requested only for optional, user-initiated
              features. The app does not capture photos or videos without
              explicit consent and does not store or transmit camera data without
              the user’s knowledge.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-purple-200">
              4.4 Location Access
            </h4>
            <p>
              Kathā Sindhu may request access to approximate location data solely
              for internal analytical purposes to understand regional app usage
              patterns.
            </p>

            <p className="mt-3 font-medium">How location data is used:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Understand geographical distribution of app usage</li>
              <li>Analyze regional listening patterns</li>
              <li>
                Improve content planning, performance optimization, and overall
                user experience
              </li>
            </ul>

            <p className="mt-3">
              Location data is collected only in aggregated and anonymized form,
              is not used for tracking individuals, real-time monitoring, or
              advertising, and is never shared with third-party SDKs, plugins,
              advertisers, or external services.
            </p>

            <p className="mt-2">
              Kathā Sindhu does not use location data for advertising, profiling,
              or marketing purposes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-purple-200">
              4.5 Foreground Services & Background Audio
            </h4>
            <p>
              The app uses foreground services to enable uninterrupted audio
              playback when the app is minimized or the screen is turned off.
              This is required to provide a smooth listening experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              5. Data Security
            </h3>
            <p>
              We apply industry-standard security measures, including encryption
              and restricted access, to protect user data. Only authorized
              personnel have access to sensitive information.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              6. Data Sharing
            </h3>
            <p>
              We do not sell, rent, or share personal data with third parties.
              Any service providers used for infrastructure or analytics operate
              under strict confidentiality agreements.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              7. User Control
            </h3>
            <p>
              Users can manage or revoke app permissions at any time through
              their device settings. Denying certain permissions may limit
              specific features, but the app will continue to function with core
              capabilities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              8. Policy Updates
            </h3>
            <p>
              This Privacy Policy may be updated periodically. Continued use of
              the app indicates acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              9. Contact Information
            </h3>
            <p>
              Email:{" "}
              <a
                href="mailto:info@kathasindhu.com"
                className="text-purple-300 hover:text-purple-200 underline"
              >
                info@kathasindhu.com
              </a>
              <br />
              Website:{" "}
              <a
                href="https://www.kathasindhu.com"
                className="text-purple-300 hover:text-purple-200 underline"
              >
                www.kathasindhu.com
              </a>
            </p>
          </div>

        </section>
      </div>
    </section>
  );
}

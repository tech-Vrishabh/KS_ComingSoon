export default function TermsOfService() {
  return (
    <section className="min-h-screen bg-slate-950 text-purple-100 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Title */}
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-200">
            Kathā Sindhu – Terms of Service
          </h1>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-200">
            Introduction
          </h2>
          <p className="text-purple-200/80 leading-relaxed">
            Welcome to Kathā Sindhu. These Terms of Service govern your use of the
            Kathā Sindhu mobile application, web application, and website
            (https://kathasindhu.com). Kathā Sindhu offers devotional content
            based on the teachings of His Holiness Rādhānāth Swāmi Maharaj
            (radhanathswami.com). By using the Service, you agree to comply with
            these Terms.
          </p>
        </section>

        {/* Sections */}
        <section className="space-y-8 text-purple-200/80 leading-relaxed">
          <div>
            <h3 className="font-semibold text-purple-200">
              1. Use of the Service
            </h3>
            <p>
              You may use the Service only for personal, non-commercial,
              devotional purposes and in compliance with all applicable laws.
              The Service provides access to audio lectures, kīrtans, videos,
              transcripts, and related spiritual resources.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              2. User Accounts
            </h3>
            <p>
              Some features require account registration. You agree to provide
              accurate information, safeguard your login credentials, and accept
              responsibility for all activity under your account.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              3. Intellectual Property
            </h3>
            <p>
              All content available on Kathā Sindhu—including audio, video,
              transcripts, images, branding, and software—is the intellectual
              property of ISKCON Chowpatty, Kathā Sindhu, or respective licensors.
              Content related to His Holiness Rādhānāth Swāmi Maharaj is provided
              strictly for personal spiritual use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              4. Acceptable Use
            </h3>
            <p>
              You agree not to misuse the Service, attempt unauthorized access,
              disrupt operations, upload malicious code, or use content in a
              disrespectful or unlawful manner.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              5. Permissions & App Functionality
            </h3>
            <p>
              To deliver a seamless experience, Kathā Sindhu may request device
              permissions including media access, microphone, camera, location,
              notifications, and foreground services.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Enable audio and media playback selected by the user</li>
              <li>Support optional user-initiated features</li>
              <li>
                Improve user experience and app performance through internal
                analytics
              </li>
            </ul>
            <p className="mt-3">
              No permission is used to access personal data without consent.
              Collected data is never sold or shared with third-party plugins or
              external services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              6. Rewards & Engagement Program
            </h3>
            <p>
              Kathā Sindhu includes a non-monetary rewards system designed to
              encourage devotional engagement. Rewards have no financial value
              and cannot be redeemed for money, goods, or services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              7. Third-Party Services
            </h3>
            <p>
              The Service may include links to third-party platforms such as
              YouTube or radhanathswami.com. Kathā Sindhu does not control or
              assume responsibility for third-party content or policies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              8. Disclaimer of Warranties
            </h3>
            <p>
              The Service is provided on an “as is” and “as available” basis. We
              do not guarantee uninterrupted, error-free operation or continuous
              availability of content.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              9. Limitation of Liability
            </h3>
            <p>
              To the fullest extent permitted by law, ISKCON Chowpatty and Kathā
              Sindhu shall not be liable for any indirect, incidental, or
              consequential damages arising from use of the Service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              10. Indemnification
            </h3>
            <p>
              You agree to indemnify and hold harmless ISKCON Chowpatty, Kathā
              Sindhu, and its associates from any claims arising from misuse of
              the Service or violation of these Terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              11. Changes to Terms
            </h3>
            <p>
              These Terms may be updated periodically. Continued use of the
              Service indicates acceptance of any revisions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-200">
              12. Contact Information
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

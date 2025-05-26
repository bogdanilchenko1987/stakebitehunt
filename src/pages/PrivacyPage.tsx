const PrivacyPage: React.FC = () => {
  return (
    <main>
      {" "}
      <section id="privacy-policy" className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold font-creepster tracking-wider text-center mb-12 text-red-600">
            Privacy Policy
          </h1>
          <p className="text-lg text-center mb-8">
            Protecting your privacy is important to us. This policy explains how
            we collect, use, and safeguard your personal information when using
            our services.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Information We Collect
              </h3>
              <p className="text-gray-400">
                We collect the following types of personal information when you
                use our website:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Personal details such as name, email address, and contact
                  information.
                </li>
                <li>
                  Usage data including IP address, browser type, and pages
                  visited.
                </li>
                <li>
                  Information voluntarily provided by you during registration or
                  transactions.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                How We Use Your Information
              </h3>
              <p className="text-gray-400">
                We use the collected information for the following purposes:{" "}
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>To provide and improve our services.</li>
                <li>To process transactions and fulfill your requests.</li>
                <li>
                  To send updates and promotional materials, if you have
                  consented.
                </li>
                <li>
                  To analyze site performance and enhance user experience.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                How We Protect Your Information
              </h3>
              <p className="text-gray-400">
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration, or
                destruction. This includes encryption, secure servers, and other
                technical measures to safeguard your data.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Sharing Your Information
              </h3>
              <p className="text-gray-400">
                We do not share your personal information with third parties
                except in the following cases:{" "}
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>When required by law or to protect our legal rights.</li>
                <li>
                  When we partner with trusted third-party services for
                  essential operations.
                </li>
                <li>
                  In the event of a business transaction, such as a merger or
                  sale.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Your Rights and Choices
              </h3>
              <p className="text-gray-400">
                You have the right to access, update, or delete your personal
                information. You can also withdraw your consent for receiving
                promotional emails at any time by contacting us.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-400">
                We use cookies to improve your experience on our website. You
                can control cookie settings in your browser, but please note
                that disabling cookies may limit the functionality of our
                services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Children's Privacy
              </h3>
              <p className="text-gray-400">
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                minors. If you believe we have inadvertently collected such
                information, please contact us to have it removed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Changes to This Policy
              </h3>
              <p className="text-gray-400">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with the updated date. We encourage
                you to review this policy periodically to stay informed about
                how we protect your information.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">
                If you have any questions or concerns about this Privacy Policy
                or the handling of your personal information, please contact us
                at{" "}
                <span className="font-bold text-red-600">
                  support@stakebitehunt.site
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;

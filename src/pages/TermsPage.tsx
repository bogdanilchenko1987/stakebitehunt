import React from "react";

const TermsPage: React.FC = () => {
  return (
    <main>
      {" "}
      <section id="terms-conditions" className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center font-creepster tracking-wider mb-12 text-red-600">
            Terms and Conditions
          </h1>
          <p className="text-lg text-center mb-8">
            Please read these terms and conditions carefully before using our
            website and services.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-400">
                By accessing or using the services provided by StakeBiteHunt,
                you agree to comply with and be bound by these Terms and
                Conditions. If you do not agree with any part of these terms,
                you should refrain from using the services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                2. Use of the Services
              </h3>
              <p className="text-gray-400">
                You are granted a non-exclusive, non-transferable, and revocable
                license to access and use our website and services. You agree to
                use the services solely for lawful purposes and in accordance
                with the guidelines provided.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                3. User Responsibilities
              </h3>
              <p className="text-gray-400">
                You are responsible for maintaining the confidentiality of your
                account information and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                access or use of your account.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                4. Age Requirement
              </h3>
              <p className="text-gray-400">
                You must be at least 18 years old to use our services. By using
                our platform, you confirm that you meet the minimum age
                requirement. Users below the age of 18 are not permitted to
                access or use the services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">5. Restrictions</h3>
              <p className="text-gray-400">
                You may not use the services for any unlawful or unauthorized
                activities, including but not limited to cheating, fraud, or any
                activities that would disrupt or interfere with the services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                6. Content Ownership
              </h3>
              <p className="text-gray-400">
                All content, including but not limited to text, images, and
                graphics, on the StakeBiteHunt website is owned by us or
                licensed to us. You may not use, reproduce, or distribute any
                content from the website without our prior written consent.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                7. Limitation of Liability
              </h3>
              <p className="text-gray-400">
                In no event shall StakeBiteHunt be liable for any indirect,
                incidental, special, or consequential damages arising from your
                use of the services. We do not guarantee that the services will
                be free of errors or interruptions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                8. Third-Party Services
              </h3>
              <p className="text-gray-400">
                Our website may contain links to third-party websites and
                services. We do not control or endorse these third-party
                websites and are not responsible for their content or privacy
                practices.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">9. Termination</h3>
              <p className="text-gray-400">
                We reserve the right to suspend or terminate your access to the
                services at our discretion, without notice, if we believe that
                you have violated these Terms and Conditions or engaged in
                harmful activities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                10. Modifications to Terms
              </h3>
              <p className="text-gray-400">
                We may update these Terms and Conditions periodically. Any
                changes will be posted on this page with an updated effective
                date. We recommend that you review these terms periodically to
                stay informed of any changes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">11. Governing Law</h3>
              <p className="text-gray-400">
                These Terms and Conditions are governed by the laws. Any
                disputes arising under these terms shall be resolved in the
                courts.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">12. Contact Us</h3>
              <p className="text-gray-400">
                If you have any questions or concerns regarding these Terms and
                Conditions, please contact us at{" "}
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

export default TermsPage;

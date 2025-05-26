import React from "react";

const CookiesPage: React.FC = () => {
  return (
    <main>
      {" "}
      <section id="cookies-policy" className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold font-creepster tracking-wider  text-center mb-12 text-red-600">
            Cookies Policy
          </h1>
          <p className="text-lg text-center mb-8">
            We use cookies to enhance your experience on our site. This policy
            explains what cookies are, how we use them, and how you can manage
            your cookie settings.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">What are cookies?</h3>
              <p className="text-gray-400">
                Cookies are small files placed on your device when you visit a
                website. They are used to help websites function, provide
                essential features, and improve your experience. Cookies can
                store preferences and are used to track your activity across
                various sites to deliver personalized content.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                How we use cookies
              </h3>
              <p className="text-gray-400">
                We use cookies for the following purposes:{" "}
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>To provide the necessary functionalities of our site.</li>
                <li>To personalize your experience and content.</li>
                <li>
                  To analyze the performance of our website and improve it.
                </li>
                <li>
                  To provide social media features and targeted advertising.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                How to manage cookies
              </h3>
              <p className="text-gray-400">
                You can manage cookie settings through your browser. Most
                browsers allow you to refuse or accept cookies. You can also
                delete cookies that have already been set on your device.
                However, please note that blocking or deleting cookies may
                affect your experience on our site and prevent some
                functionalities from working properly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Third-party cookies
              </h3>
              <p className="text-gray-400">
                Our website may include third-party services such as Google
                Analytics or social media plugins. These third-party services
                may use cookies to collect information about your browsing
                activities. We have no control over third-party cookies and
                recommend reviewing their respective cookie policies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Changes to this policy
              </h3>
              <p className="text-gray-400">
                We may update this cookie policy periodically. Any changes to
                the policy will be posted on this page, and the date of the
                latest update will be indicated at the top of the page. We
                encourage you to review this policy regularly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact us</h3>
              <p className="text-gray-400">
                If you have any questions about this cookie policy or our use of
                cookies, please feel free to contact us at{" "}
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

export default CookiesPage;

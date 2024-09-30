const PrivacyPolicy = () => {
  return (
    <main className="font-inter text-base font-normal text-grey-500">
      <h1 className="font-raleway text-4xl font-bold text-pry-500 lg:text-6xl">
        Privacy Policy for Alte
      </h1>
      <time
        dateTime="2024-09-12"
        className="mb-10 mt-2 inline-block text-lg lg:text-xl"
      >
        12th Sept, 2024
      </time>
      <ol className="flex flex-col gap-8">
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            1. Introduction
          </h2>
          <p>
            Welcome to Alte. Your privacy is important to us. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you visit our website. By accessing or using our
            services, you agree to the terms of this Privacy Policy.
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            2. Information We Collect
          </h2>
          <p>
            We collect various types of information to provide better services
            to our users:
          </p>
          <ul className="mt-2 list-inside list-disc">
            <li>
              <strong>Personal Information:</strong> This includes your name,
              email address, phone number, and other contact details when you
              sign up, create an account, or communicate with us.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect data on how you interact
              with our website, including your IP address, browser type,
              operating system, pages visited, time spent on the site, and links
              clicked.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              and similar technologies to collect information about your
              browsing activities.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            3. How We Use Your Information
          </h2>
          <p>We use the information collected for the following purposes:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>To provide, operate, and maintain our website.</li>
            <li>
              To improve user experience and optimize website performance.
            </li>
            <li>
              To communicate with you regarding updates, promotions, or customer
              service.
            </li>
            <li>To process transactions and manage orders.</li>
            <li>
              To ensure the security of our website and prevent fraudulent
              activities.
            </li>
            <li>
              To comply with legal obligations and protect our legal rights.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell or rent your personal information to third parties.
            However, we may share your information with:
          </p>
          <ul className="mt-2 list-inside list-disc">
            <li>
              <strong>Service Providers:</strong> Third-party companies that
              help us run the website, such as payment processors, hosting
              services, or analytics providers.
            </li>
            <li>
              <strong>Legal Compliance:</strong> When required by law, we may
              disclose your personal information to authorities or regulatory
              bodies.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            5. Data Security
          </h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, and destruction.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            6. Your Rights
          </h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Access your personal information.</li>
            <li>Correct inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Object to or restrict certain data processing.</li>
            <li>Withdraw consent where applicable.</li>
          </ul>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            7. Data Deletion
          </h2>
          <p>
            Your personal data will be deleted after 12 months of inactivity, so
            that we can ensure your privacy is respected in compliance with data
            retention policies. You will receive an email notification 30 days
            informing you of the upcoming data deletion.
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            8. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of those sites. Please review
            the privacy policies of any third-party sites you visit.
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            9. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage
            you to review this page periodically for any changes.
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            10. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
            <a
              href="mailto:info@alteconsulting.com"
              className="block text-sec-500 underline"
            >
              info@alteconsulting.com
            </a>
          </p>
        </li>
      </ol>
    </main>
  );
};

export default PrivacyPolicy;

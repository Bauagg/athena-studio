import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-slate-100 py-12">
      <div className="mx-auto max-w-4xl rounded-xl bg-white px-8 py-10 shadow-sm">
        <Link
          href="/#home"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
        >
          <ChevronLeft size={16} />
          Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last Updated: February 1, 2026</p>

        <div className="mt-8 space-y-8 text-slate-700">
          <div className="border-t border-slate-200 pt-6 text-base leading-relaxed">
            <p>
              ATHENA STUDIO (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
              is committed to protecting your privacy and personal data. This
              Privacy Policy explains how we collect, use, store, and protect
              information when you visit our website, communicate with us, or
              use our services.
            </p>
            <p className="mt-3">
              By accessing or using our Services, you acknowledge that you have
              read and understood this Privacy Policy.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Who We Are and How to Contact Us
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              ATHENA STUDIO is an IT Consultant & Software House providing
              strategic consulting, digital solutions, and technology services
              to clients in Indonesia and internationally.
            </p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Contact:</h3>
            <p className="mt-2 text-base">Email: athenaa.studioo@gmail.com</p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Scope of This Policy
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              This Privacy Policy applies to information we process when you:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>Visit and browse our website</li>
              <li>Submit inquiries, contact forms, or consultation requests</li>
              <li>Engage with us as a client, partner, or prospect</li>
              <li>Communicate with us via email or other channels</li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              This Policy does not apply to third-party websites or services
              that you may access through links on our website.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Information We Collect
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              We collect information only as necessary to operate our business
              and deliver our services.
            </p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.1 Information You Provide
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>Name, email address, company name, and contact details</li>
              <li>Project or business information shared during consultations</li>
              <li>Communications you send to us (emails, forms, feedback)</li>
            </ul>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.2 Technical & Usage Information
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>IP address, browser type, device information</li>
              <li>Pages visited, session duration, and general interaction data</li>
              <li>Basic analytics data to improve website performance</li>
            </ul>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">3.3 Cookies</h3>
            <p className="mt-2 text-base leading-relaxed">
              We use essential cookies to ensure website functionality. Optional
              analytics cookies may be used to understand usage trends. You can
              manage cookie preferences through your browser settings.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              4. How We Use Your Information
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              We use personal information to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>Respond to inquiries and provide consultations</li>
              <li>Deliver and manage our services and client engagements</li>
              <li>Improve our website, services, and communication</li>
              <li>Maintain security and prevent misuse</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              We do not use personal data for automated decision-making or
              profiling.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Legal Basis for Processing
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              We process personal data where necessary to provide services,
              fulfill contracts, pursue legitimate business interests, and
              comply with applicable legal obligations.
            </p>
            <p className="mt-3 text-base leading-relaxed">
              Where applicable (including GDPR and similar regulations), we
              process personal data based on:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>Performance of a contract or pre-contractual steps</li>
              <li>Legitimate business interests</li>
              <li>Your consent, where required</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Data Sharing
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              ATHENA STUDIO does not sell personal data.
            </p>
            <p className="mt-3 text-base leading-relaxed">
              We may share information only with:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>
                Trusted service providers (hosting, email, analytics) under
                confidentiality agreements
              </li>
              <li>Legal or regulatory authorities when required by law</li>
              <li>
                Business successors in the event of a merger or acquisition
              </li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              All third parties are required to protect your data.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              7. International Data Transfers
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              As we work with clients globally, your information may be
              processed outside your country of residence. Where required, we
              apply appropriate safeguards to ensure data protection in
              accordance with applicable laws.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Data Retention
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              We retain personal information only for as long as necessary to
              fulfill the purposes outlined in this Policy or as required by
              law. When no longer needed, data is securely deleted or
              anonymized.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              9. Data Security
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              We implement reasonable technical and organizational measures to
              protect personal data. While we strive to safeguard information,
              no method of transmission or storage is completely secure.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              10. Children&apos;s Privacy
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Our Services are not intended for individuals under the age of
              13. We do not knowingly collect personal data from children.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              11. Your Rights
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Depending on your location, you may have rights to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              Requests can be made by contacting us using the details below.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              12. Changes to This Privacy Policy
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes
              in law or our practices. Updates will be posted on our website
              with a revised effective date.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              13. Contact Us
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              If you have any questions about this Privacy Policy or how ATHENA
              STUDIO handles personal data, please contact us:
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              ATHENA STUDIO
            </h3>
            <p className="mt-2 text-base">Email : athenaa.studioo@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

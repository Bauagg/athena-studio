import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function TermsConditionsPage() {
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
          Terms & Conditions
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last Updated: February 1, 2026</p>

        <div className="mt-8 space-y-8 text-slate-700">
          <div className="border-t border-slate-200 pt-6 text-base leading-relaxed">
            <p>
              These Terms & Conditions (&quot;Terms&quot;) govern your access
              to and use of the website, services, and any related products or
              engagements provided by ATHENA STUDIO (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p className="mt-3">
              By accessing our website or engaging with our services, you agree
              to be bound by these Terms. If you do not agree, please do not
              use our Services.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              1. About ATHENA STUDIO
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              ATHENA STUDIO is an IT Consultant & Software House providing
              strategic consulting, digital solutions, software development, and
              related technology services to clients locally and internationally.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Scope of Services
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Our Services may include, but are not limited to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>IT and digital strategy consulting</li>
              <li>Software and system development</li>
              <li>Business process analysis and optimization</li>
              <li>System audits, improvements, and technology roadmaps</li>
              <li>Ongoing support, maintenance, or advisory services</li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              Specific deliverables, timelines, and fees will be defined in
              written agreements, proposals, or statements of work (SOW).
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Use of Website
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              You agree to use our website for lawful purposes only. You must
              not:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>Misuse, disrupt, or attempt to gain unauthorized access</li>
              <li>Use the website to transmit malicious code or harmful content</li>
              <li>Copy, reproduce, or exploit website content without permission</li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              We reserve the right to restrict or terminate access if misuse
              occurs.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Client Engagements
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              All client engagements are subject to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>A mutually agreed proposal or contract</li>
              <li>Defined scope, deliverables, timelines, and payment terms</li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              Any changes to scope must be agreed upon in writing and may result
              in adjustments to fees or timelines.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Client Responsibilities
            </h2>
            <p className="mt-3 text-base leading-relaxed">Clients agree to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>Provide accurate and complete information for the project</li>
              <li>Respond in a timely manner to requests for feedback or approval</li>
              <li>
                Ensure they have rights to any materials or data provided to ATHENA
                STUDIO
              </li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              Delays caused by incomplete or late client input may affect delivery
              timelines.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Fees and Payments
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>Fees will be stated in proposals or agreements</li>
              <li>Payments must be made according to agreed schedules</li>
              <li>Late payments may result in project suspension or additional charges</li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              All fees are exclusive of applicable taxes unless stated otherwise.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Intellectual Property
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Unless otherwise agreed in writing:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>
                ATHENA STUDIO retains ownership of its methodologies, frameworks, tools,
                and pre-existing intellectual property
              </li>
              <li>
                Upon full payment, clients receive rights to use the agreed deliverables
                for their intended business purposes
              </li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              ATHENA STUDIO may showcase non-confidential work as part of its
              portfolio unless restricted by agreement.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Confidentiality
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Both parties agree to keep confidential any non-public business,
              technical, or commercial information shared during the engagement,
              unless disclosure is required by law.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              9. Third Party Services
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Our Services may involve third party tools, platforms, or services.
              ATHENA STUDIO is not responsible for the availability, performance,
              or policies of third-party providers.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              10. Limitation of Liability
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              To the maximum extent permitted by law:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>
                ATHENA STUDIO shall not be liable for indirect, incidental, or
                consequential damages
              </li>
              <li>
                Our total liability shall not exceed the fees paid for the specific
                service giving rise to the claim
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              11. No Guarantee
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              While we strive to deliver high-quality solutions, ATHENA STUDIO
              does not guarantee specific business outcomes, financial results,
              or performance improvements, as these depend on factors beyond our
              control.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              12. Termination
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Either party may terminate an engagement:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>As stated in the contract or proposal</li>
              <li>For material breach if not remedied within a reasonable period</li>
            </ul>
            <p className="mt-2 text-base leading-relaxed">
              Upon termination, fees for work completed up to the termination date
              remain payable.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              13. International Clients
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              For international clients, services may be provided remotely. You
              are responsible for compliance with local laws applicable to your
              business or industry.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              14. Governing Law
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Unless otherwise agreed in writing, these Terms shall be governed
              by and interpreted in accordance with the laws of the Republic of
              Indonesia, without regard to conflict of law principles.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              15. Changes to These Terms
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              ATHENA STUDIO may update these Terms from time to time. Updated
              versions will be posted on our website with a revised effective
              date.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              16. Contact Information
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              For questions regarding these Terms & Conditions, please contact:
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

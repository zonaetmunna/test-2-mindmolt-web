'use client';
import CTA from '@/components/CTAs/cta';
import { left_sidebar_data, LeftMenu } from '@/components/menu/left-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function TermsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const selectedPage = left_sidebar_data.find((e) => e.slug == pathname);
  return (
    <div>
      <div className="container flex gap-8">
        <LeftMenu />
        {/* main content */}
        <div className="pt-10 lg:max-w-2xl">
          <div className="flex justify-center py-4">
            <Select
              onValueChange={(value) => {
                router.push(value);
              }}
            >
              <SelectTrigger className="w-full mb-8 md:hidden flex">
                <SelectValue placeholder={selectedPage?.name} />
              </SelectTrigger>
              <SelectContent>
                {left_sidebar_data.map((e) => (
                  <SelectItem key={e.slug} value={e.slug}>
                    <Link href={e.slug}> {e.name}</Link>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-16">
            <h1 className="text-primary">Terms of Use</h1>
            <h6 className=" text-gray-500">Effective Date November 4, 2024</h6>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p>
                Welcome to MindMolt! These Terms of Use (&quot;Terms&quot;)
                govern your use of the MindMolt app (the &quot;App&quot;), owned
                and operated by Enigma Digital Apps LLC (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;). By accessing or using the
                App, you agree to be bound by these Terms. If you do not agree
                to these Terms, please do not use the App.
              </p>
            </div>

            <div>
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using MindMolt, you accept and agree to be bound
                by these Terms and our Privacy Policy. These Terms apply to all
                users of the App.
              </p>
            </div>

            <div>
              <h2>Account Registration and Responsibilities</h2>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Account Creation:</b> To use MindMolt, you must create an
                  account using a valid email, encrypted password, and a
                  mandatory username. This username cannot be anonymous, as it’s
                  required for community accountability. You may also provide
                  optional information, such as full name, age, and location,
                  which can remain anonymous to protect your privacy.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Security:</b> You are responsible for safeguarding your
                  account information, including your password, and for any
                  activity conducted through your account. Notify us immediately
                  if you suspect any unauthorized access.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Device ID Collection:</b> We collect Device ID information
                  to identify user devices and to detect if the app has been
                  bypassed or uninstalled in ways that compromise the app&apos;s
                  intended use.
                </li>
              </ul>
            </div>

            <div>
              <h2>Permitted and Prohibited Uses</h2>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Permitted Uses:</b> MindMolt is designed to help users
                  manage and overcome porn addiction through tools and community
                  support. You agree to use the App solely for lawful, personal,
                  and non-commercial purposes.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Prohibited Uses:</b> You may not:
                  <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    <li className="list-outside list-disc   leading-tight">
                      Use the App to engage in any unlawful, abusive, or
                      inappropriate activity.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      Attempt to reverse-engineer, modify, or distribute the App
                      or its content without permission.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      Interfere with the operation of the App or use the App in
                      any manner that could damage, disable, or overburden our
                      infrastructure.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2>Data Collection and Privacy</h2>
              Please review our <b>Privacy Policy</b> to understand how we
              collect, use, and store your personal information, including
              email, password (encrypted), username, Device ID, and optional
              demographic information. We do not share user data with third
              parties. Your information may be transferred to and stored in
              global data centers.
            </div>

            <div>
              <h2>Cookies and Similar Technologies</h2>
              <p>
                MindMolt uses cookies to enhance your experience, including:
              </p>

              <ul style={{ paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Essential Cookies</b> for core functionality.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Functional Cookies</b> to remember user preferences.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Analytics Cookies</b> to improve App performance.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Security Cookies</b> to secure your account.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Advertising/Marketing Cookies </b> to personalize content
                  and advertisements (with opt-out options).
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Third-Party Cookies</b> may be used by partners like Google
                  Analytics or Firebase for analytics and app improvements.
                </li>
              </ul>
              <p>
                For more details, refer to our <b>Cookie Policy</b> in the App
                settings.
              </p>
            </div>
            <div>
              <h2>Potential Future Tracking</h2>
              <p>
                In future updates, MindMolt may introduce web activity tracking
                to improve our content restrictions and services. We will notify
                you and obtain consent before implementing such features.
              </p>
            </div>
            <div>
              <h2>Data Deletion Policy</h2>
              <p>
                Upon request, your account and all associated data will be
                deleted within 90 days. Deletion requests can be made through
                the App’s settings.
              </p>
            </div>
            <div>
              <h2>Intellectual Property Rights</h2>
              <p>
                Upon request, your account and all associated data will be
                deleted within 90 days. Deletion requests can be made through
                the App’s settings.
              </p>
              <ul style={{ paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Ownership: </b> MindMolt, its source code, and all content
                  are protected by copyright, trademark, and other intellectual
                  property laws.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>User Restrictions: </b> Unauthorized copying, modification,
                  distribution, or reverse-engineering of MindMolt’s source
                  code, content, or materials is strictly prohibited.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Content Protection: </b> Content within the App is for
                  personal use only and may not be replicated or redistributed.
                </li>
              </ul>
            </div>
            <div>
              <h2>Refund Policy</h2>
              <p>
                If the App does not work as expected, you may request a refund.
                Refunds will be processed in accordance with the policies of the
                platform from which the App was purchased (e.g., Stripe, Google
                Play Store, or Apple App Store).
              </p>
            </div>
            <div>
              <h2>Disclaimers and Limitation of Liability</h2>
              <ul style={{ paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>No Warranty: </b> MindMolt is provided &quot;as is&quot;
                  without warranties of any kind, either express or implied. We
                  do not warrant that the App will be error-free, secure, or
                  free of viruses.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Health Disclaimer: </b> MindMolt does not replace
                  professional medical or mental health services. Always consult
                  a professional for diagnosis or treatment of any health
                  condition.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Device Damage: </b> We are not liable for any damage to
                  your device resulting from the use of MindMolt.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Limitation of Liability: </b> To the extent permitted by
                  law, we shall not be liable for any indirect, incidental, or
                  consequential damages arising from your use of the App.
                </li>
              </ul>
            </div>
            <div>
              <h2>User Conduct and Community Guidelines</h2>
              <p>To maintain a supportive environment, you agree to:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Respect Other Users: </b> Do not engage in abusive,
                  harassing, or otherwise disruptive behavior.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Follow Guidelines: </b> Abide by all community guidelines,
                  as outlined in the App. Violating these may result in account
                  suspension or termination.
                </li>
              </ul>
            </div>
            <div>
              <h2>Modifications to Terms and Services</h2>
              <p>
                We may update these Terms periodically to reflect changes in our
                services or for legal compliance. We will notify you of any
                significant updates through the App or via email. Your continued
                use of MindMolt after updates indicates your acceptance of the
                modified Terms.
              </p>
            </div>

            <div>
              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Country/State], without regard to its
                conflict of laws principles.
              </p>
            </div>
            <div>
              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns regarding this terms, please
                contact us at:
                <br />
                Enigma Digital Apps LLC
                <br />
                228 Park Ave S PMB 772763,New York, NY 10003
                <br />
                <b>email: </b>support@mindmolt.com
              </p>
            </div>
            <div>
              <h2>Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the
                entire agreement between you and MindMolt regarding the use of
                our App.
              </p>
            </div>
            {/* <!-- Add other sections in similar fashion --> */}
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}

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

export default function PrivacyPolicyPage() {
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
            <h1 className="text-primary">Privacy Policy</h1>
            <h6 className=" text-gray-500">Effective Date November 4, 2024</h6>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p>
                At Enigma Digital Apps LLC (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;), we respect your privacy and are committed to
                protecting your personal information. This Privacy Policy
                describes how we collect, use, store, and safeguard data when
                you use the MindMolt application (&quot;App&quot;). By using the
                App, you agree to the terms outlined in this policy. Our Privacy
                Policy explains the types of information we collect, the
                purposes for which we use it, your rights regarding your data,
                and how you can manage your privacy preferences. We are
                dedicated to ensuring that your personal information is handled
                securely and transparently.
              </p>
            </div>

            <div>
              <h2>Information We Collect</h2>
              <h5> User Information</h5>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Email Address:</b> Used for account creation, login, and to
                  communicate with you about your account.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Password:</b> Stored in encrypted form for security.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Username (mandatory, non-anonymous):</b> Required for
                  community participation and accountability.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Optional Information</b>
                  <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    <li className="list-outside list-disc   leading-tight">
                      <b>Full Name (can be anonymous)</b>{' '}
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      <b>Age (can be anonymous)</b>{' '}
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      <b>Location (can be anonymous)</b>{' '}
                    </li>
                  </ul>
                </li>
              </ul>
              <h5> Device Information</h5>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Device Id:</b> Collected to identify your device. This
                  helps us detect any attempts to bypass or uninstall the app in
                  a way that may impact the service.
                </li>
              </ul>
            </div>

            <div>
              <h2> Purpose of Data Collection</h2>
              <p>
                We collect and use the above information for the following
                purposes:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Account Management:</b> To create and authenticate your
                  account, manage logins, and enable user identification.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>User Identification:</b> We require usernames for public
                  interactions within the community, maintaining accountability
                  and integrity.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Optional Demographics:</b> For those who choose to provide
                  additional information (such as name, age, or location), this
                  data is used solely for public-facing interactions on the
                  platform and can be kept anonymous to safeguard privacy.
                </li>
              </ul>
            </div>

            <div>
              <h2> No Third-Party Data Sharing</h2>
              <p>
                We do not share your personal information with third parties.
                All data collected is strictly for the purpose of providing and
                improving MindMolt’s services.
              </p>
            </div>

            <div>
              <h2>Data Retention and Deletion</h2>
              <p>
                If you wish to delete your account, you can submit a request
                through the app’s account settings. Upon receiving your request,
                we will delete your account and associated data within 90 days.
              </p>
            </div>

            <div>
              <h2>International Data Transfer</h2>
              <p>
                We use global data centers to store and process your data, which
                may involve transferring information internationally. By using
                our app, you consent to such transfers, understanding that data
                protection laws may vary by location.
              </p>
            </div>

            <div>
              <h2>Data Security</h2>
              <p>
                We are committed to ensuring the security of your data. Measures
                include:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Role-Based Access Control:</b> Access to your information
                  is limited to authorized personnel only.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Audits:</b> Regular audits of access logs are conducted to
                  detect and prevent unauthorized access.
                </li>
              </ul>
            </div>

            <div>
              <h2>Cookies and Similar Technologies</h2>
              <p>
                MindMolt uses cookies and similar tracking technologies for
                various purposes:
              </p>

              <ul style={{ paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Essential Cookies: </b> Necessary for basic functionalities
                  such as login and account security.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Functional Cookies: </b> Used to remember preferences, such
                  as language settings.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Analytics Cookies: </b> Gather anonymized data to help us
                  improve app performance and user experience.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Security Cookies: </b> Aid in detecting and preventing
                  suspicious activity.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Advertising/Marketing Cookies: </b> Used for personalized
                  content and advertisements (you can opt out in your cookie
                  settings).
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Third-Party Cookies: </b> Set by external services like
                  Google Analytics or Firebase to enhance functionality and
                  gather usage insights.
                </li>
              </ul>
            </div>
            <div>
              <h2>Future Data Collection</h2>
              <p>
                <b>Potential Web Activity Tracking:</b> At present, we do not
                track users web activity. However, in future updates, we may
                implement this feature to improve content restrictions and user
                support. If this feature is introduced, we will update this
                Privacy Policy and obtain your explicit consent.
              </p>
            </div>
            <div>
              <h2>Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have certain rights
                regarding your data, including the right to access, correct,
                delete, or restrict the use of your information. To exercise
                these rights, please contact us at support@mindmolt.com .
              </p>
            </div>
            <div>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our practices, services, or legal requirements. If we
                make significant changes, we will notify you through the app or
                by other means. Please review this policy regularly to stay
                informed.
              </p>
            </div>
            <div>
              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns regarding this Privacy Policy
                or our data practices, please contact us at:
                <br />
                Enigma Digital Apps LLC
                <br />
                228 Park Ave S PMB 772763,New York, NY 10003
                <br />
                <b>email: </b>support@mindmolt.com
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

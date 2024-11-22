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

export default function CookiePolicyPage() {
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
            <h1 className="text-primary">Cookie Policy</h1>
            <h6 className=" text-gray-500">Effective Date November 4, 2024</h6>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p>
                This Cookie Policy explains how MindMolt (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) uses cookies and similar
                tracking technologies to recognize you when you visit or use our
                application (&quot;App&quot;). This policy provides information
                about what cookies are, the types of cookies we use, why we use
                them, and how you can manage your cookie preferences.
              </p>
            </div>

            <div>
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small data files placed on your device when you
                visit or use an app or website. Cookies serve a variety of
                functions, such as enabling essential features, enhancing your
                experience, remembering your preferences, and providing
                analytics and personalized advertisements.
              </p>
            </div>

            <div>
              <h2>Why We Use Cookies</h2>
              <p>
                We use cookies and similar tracking technologies for several
                purposes:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Essential Functionality:</b> To enable core functionality
                  and ensure the security and stability of the App.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Personalization:</b> To remember your preferences and
                  personalize content based on your previous usage.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Analytics:</b> To understand and improve the performance of
                  our App by gathering anonymous usage data.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Security:</b> To enhance account security and detect
                  potential security threats.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Advertising/Marketing:</b> To deliver relevant
                  advertisements and marketing materials.
                </li>
              </ul>
            </div>

            <div>
              <h2>Types of Cookies We Use</h2>
              <p>
                The cookies we use can be classified into the following
                categories:
              </p>
              <ol>
                <li>
                  <br />
                  <h5>Essential Cookies</h5>
                  <p>
                    Essential cookies are necessary for basic functionality.
                    These cookies cannot be disabled as they ensure key
                    functionalities, such as:
                  </p>
                  <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    <li className="list-outside list-disc   leading-tight">
                      <b>Login authentication:</b> Verify your identity for
                      secure access to the App.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      <b>Session management:</b> Maintain your session while you
                      are logged in.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      <b>Fraud prevention:</b> Protect against fraudulent or
                      suspicious activity.
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <h5>Functional Cookies</h5>
                  <p>
                    Functional cookies allow the App to remember your
                    preferences and settings, enhancing your experience. These
                    cookies may:
                  </p>
                  <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    <li className="list-outside list-disc   leading-tight">
                      Store preferences like language, display settings, and
                      other customizations.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      Help deliver features such as personalized content based
                      on your usage history.
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <h5>Analytics Cookies</h5>
                  <p>
                    Analytics cookies gather anonymous data to help us
                    understand how users interact with the App. This information
                    assists us in:
                  </p>
                  <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    <li className="list-outside list-disc   leading-tight">
                      Identifying popular sections and features.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      Improving user experience and App performance.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      Making data-driven improvements to our services.
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <h5>Security Cookies</h5>
                  <p>
                    Security cookies are used to protect your data and account
                    by detecting unusual activity or access patterns. These
                    cookies may:
                  </p>
                  <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    <li className="list-outside list-disc   leading-tight">
                      Monitor logins to detect and prevent unauthorized access.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      Track behavior for security purposes to enhance the
                      overall safety of the App.
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <h5>Advertising/Marketing Cookies</h5>
                  <p>
                    Advertising cookies collect data about your interactions and
                    preferences to deliver relevant advertisements. You can opt
                    out of these cookies in the App’s settings. These cookies
                    help us:
                  </p>
                  <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    <li className="list-outside list-disc   leading-tight">
                      Personalize marketing messages based on your interactions.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      Measure the effectiveness of our marketing campaigns.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      Prevent repetitive or irrelevant advertisements.
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <h5>Third-Party Cookies</h5>
                  <p>
                    We may use third-party cookies, such as Google Analytics or
                    Firebase, to provide additional insights and functionality,
                    including analytics and marketing. These third parties may
                    collect data to analyze usage patterns and provide targeted
                    advertisements.
                  </p>
                </li>
              </ol>
            </div>

            <div>
              <h2>How You Can Control Cookies</h2>
              <p>
                You have the right to control the use of cookies and can manage
                your preferences as follows:
              </p>
              <ol>
                <li>
                  <br />
                  <h5>Managing Cookies in App Settings</h5>
                  <p>
                    Essential cookies are necessary for basic functionality.
                    These cookies cannot be disabled as they ensure key
                    functionalities, such as:
                  </p>
                  <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    <li className="list-outside list-disc   leading-tight">
                      <b>Essential Cookies:</b> These are necessary for the core
                      functions of the App and cannot be disabled.
                    </li>
                    <li className="list-outside list-disc   leading-tight">
                      <b>Functional, Analytics, and Marketing Cookies:</b> You
                      can choose to disable these cookies by adjusting your
                      preferences in the App’s cookie settings.
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <h5>Browser-Based Control</h5>
                  <p>
                    You can set your browser to refuse cookies or alert you when
                    cookies are being sent. However, please note that disabling
                    certain cookies may affect the functionality of the App and
                    your experience.
                  </p>
                </li>
                <li>
                  <br />
                  <h5>Opt-Out from Third-Party Tracking</h5>
                  <p>
                    Some third-party cookies, such as those provided by Google
                    Analytics, allow you to opt out directly on their platforms.
                    Visit the Google Analytics opt-out page or consult
                    Firebase’s privacy settings to control third-party tracking.
                  </p>
                </li>
              </ol>
            </div>

            <div>
              <h2>Data Retention and Expiry</h2>
              <p>
                Cookies used on our App are retained for different periods
                depending on their purpose:
              </p>

              <ul style={{ paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Session Cookies: </b> These cookies expire when you close
                  your browser or log out of the App.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Persistent Cookies: </b> These cookies remain on your
                  device for a set duration or until you delete them manually.
                  Persistent cookies are used to remember preferences and keep
                  track of your usage over time.
                </li>
              </ul>
            </div>
            <div>
              <h2> Updates to This Cookie Policy</h2>
              <p>
                We may periodically update this Cookie Policy to reflect changes
                in our practices, legal requirements, or improvements to the
                App. When we make significant updates, we will notify you via
                the App or by other means. Please review this policy regularly
                to stay informed.
              </p>
            </div>
            <div>
              <h2>Contact Us</h2>
              <p>
                If you have questions about our Cookie Policy or wish to make
                requests regarding your preferences, please contact us at:
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

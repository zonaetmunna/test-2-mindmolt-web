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

export default function EulaPage() {
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
            <h1 className="text-primary">End-User License Agreement (EULA)</h1>
            <h6 className=" text-gray-500">Effective Date November 4, 2024</h6>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p>
                This End-User License Agreement (&quot;Agreement&quot; or
                &quot;EULA&quot;) is a legal agreement between you
                (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and
                MindMolt (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                for the use of the MindMolt application (&quot;App&quot;). By
                installing, accessing, or using MindMolt, you agree to be bound
                by this EULA. If you do not agree to this EULA, do not install,
                access, or use the App.
              </p>
            </div>

            <div>
              <h2>License Grant</h2>
              <p>
                Subject to your compliance with this EULA, we grant you a
                limited, non-exclusive, non-transferable, non-sublicensable, and
                revocable license to use MindMolt on compatible devices that you
                own or control for personal and non-commercial purposes only.
              </p>
            </div>

            <div>
              <h2>License Restrictions</h2>
              <p>You agree to comply with the following restrictions:</p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>No Reverse Engineering: </b> You may not reverse-engineer,
                  decompile, disassemble, modify, or create derivative works of
                  MindMolt or any part thereof.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>No Copying or Distribution: </b> You may not copy,
                  distribute, lease, lend, or sell the App or any portion of it.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>No Transfer: </b> You may not assign or transfer your
                  license or rights under this EULA without prior written
                  consent from MindMolt.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Intellectual Property: </b> You acknowledge that MindMolt,
                  including all code, content, and related intellectual
                  property, is protected by copyright, trademark, and other
                  laws, and you have no ownership interest in it.
                </li>
              </ul>
            </div>

            <div>
              <h2>User Data and Privacy</h2>
              <p>
                Your use of MindMolt may involve the collection and processing
                of personal data. By using the App, you agree to the collection,
                processing, and handling of your data as described in our{' '}
                <b>Privacy Policy</b>. Key data points collected include:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>User Information: </b> Email, password (encrypted),
                  username, Device ID, and optional demographics (full name,
                  age, location).
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Device Information: </b> Device ID, used for detecting
                  unauthorized usage patterns.
                </li>
              </ul>
              <p>
                We do not share your personal data with third parties, and data
                will be deleted within 90 days upon request for account
                deletion.
              </p>
            </div>
            <div>
              <h2>Data Security and Cookies</h2>
              <p>
                MindMolt uses essential, functional, and security cookies to
                enhance your experience. Third-party cookies, such as Google
                Analytics, are used for anonymized analytics, and you may manage
                non-essential cookies in your settings. Refer to our Cookie
                Policy for more details.
              </p>
            </div>
            <div>
              <h2>Updates and Modifications</h2>
              <p>
                MindMolt may issue periodic updates or modifications to enhance
                functionality, security, or compatibility. You agree that
                updates may install automatically or require manual
                installation. Failure to install updates may affect your use of
                the App.
              </p>
            </div>

            <div>
              <h2>Ownership and Intellectual Property Rights</h2>
              <p>
                MindMolt retains ownership of the App, its source code, and
                content. This EULA does not grant you any ownership rights; it
                grants you a limited license to use the App according to the
                terms of this EULA. Unauthorized copying, reproduction, or
                distribution of the App’s source code or content is prohibited.
              </p>
            </div>
            <div>
              <h2>Termination of License</h2>
              <p>
                This license is effective until terminated. MindMolt may suspend
                or terminate your license without notice if you fail to comply
                with this EULA or engage in prohibited activities. Upon
                termination, you must stop all use of the App and delete it from
                your devices.
              </p>
            </div>
            <div>
              <h2>Disclaimer of Warranties</h2>
              <p>
                MindMolt is provided &quot;as is&quot; without warranties of any
                kind, either express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular
                purpose, or non-infringement. We do not warrant that the App
                will be error-free or secure.
              </p>
            </div>
            <div>
              <h2>Limitation of Liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  MindMolt shall not be liable for any indirect, incidental, or
                  consequential damages, including but not limited to loss of
                  data, revenue, or profit.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  MindMolt assumes no responsibility for any damages to your
                  device arising from the installation or use of the App.
                </li>
              </ul>
            </div>
            <div>
              <h2>Health and Safety Disclaimer</h2>
              <p>
                MindMolt is intended to provide support and resources for
                managing porn addiction but is not a substitute for professional
                medical or mental health advice. Always consult a healthcare
                professional for medical or psychological concerns. MindMolt
                does not assume any responsibility for actions or decisions
                taken by users based on the content provided.
              </p>
            </div>
            <div>
              <h2>Governing Law</h2>
              <p>
                This EULA is governed by and construed in accordance with the
                laws of [Your Country/State], without regard to its conflict of
                laws principles. Any disputes arising from this EULA shall be
                resolved in the courts of [Your Country/State].
              </p>
            </div>
            <div>
              <h2>Changes to This Agreement</h2>
              <p>
                We may modify this EULA periodically to reflect changes in our
                services, software, or legal obligations. If significant updates
                are made, we will notify you through the App or by other means.
                Your continued use of the App after such updates indicates your
                acceptance of the modified EULA.
              </p>
            </div>
            <div>
              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns regarding this EULA, please
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
              <p>
                By using MindMolt, you acknowledge that you have read,
                understood, and agree to be bound by this EULA.
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

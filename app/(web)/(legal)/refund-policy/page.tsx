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

export default function RefundPolicyPage() {
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
            <h1 className="text-primary">Refund Policy</h1>
            <h6 className=" text-gray-500">Effective Date November 4, 2024</h6>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p>
                This Refund Policy outlines the terms and conditions under which
                users of MindMolt (“we,” “us,” or “our”) may request and receive
                a refund for purchases made within the MindMolt app (“App”). By
                using our services, you agree to this Refund Policy.
              </p>
            </div>

            <div>
              <h2>Eligibility for Refunds</h2>
              <p>
                Refunds for purchases made in the MindMolt App may be granted
                under the following circumstances:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Technical Issues:</b> If the App does not function as
                  expected due to technical issues or bugs on our end, users may
                  be eligible for a refund after reasonable troubleshooting
                  efforts have been attempted with our support team.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Unauthorized Charges:</b> If you believe there has been an
                  unauthorized charge on your account, please contact our
                  support team immediately. Unauthorized charges may be eligible
                  for a refund subject to verification.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Subscription Cancellation:</b> For users who have purchased
                  subscription-based services, you may cancel your subscription
                  at any time. However, please note that subscription
                  cancellations will not be eligible for a pro-rata refund for
                  any remaining period within the billing cycle.
                </li>
              </ul>
            </div>
            <div>
              <h2> Refund Process and Conditions</h2>
              <p>
                MindMolt processes payments and refunds through third-party
                platforms (such as Stripe, Google Play Store, and Apple App
                Store). Refund requests must be submitted to the platform where
                the original purchase was made, as they handle payment
                processing and compliance.
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Google Play and Apple App Store:</b> Refunds for purchases
                  made through the Google Play Store or Apple App Store are
                  subject to the policies of those platforms. MindMolt does not
                  have control over the approval process or timing of refunds
                  handled by these platforms.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Stripe:</b> If you made a direct purchase via Stripe,
                  contact our customer support team at [Contact Email] with
                  proof of purchase and your refund request details. Our team
                  will review and respond to your request within [5-7 business
                  days].
                </li>
              </ul>
            </div>

            <div>
              <h2> Refund Limitations</h2>
              <p>Refunds are limited to cases where:</p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  The issue reported directly impacts the functionality of the
                  app.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  Reasonable troubleshooting steps have been exhausted.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  The refund request is made within [30 days] of purchase.
                </li>
              </ul>
              <br />
              <p>We do not offer refunds for:</p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  User error or dissatisfaction with the app&apos;s
                  functionality that is consistent with its description.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  Misunderstandings of subscription terms or auto-renewal
                  charges.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  Downgraded or discontinued features that are clearly
                  communicated in app updates.
                </li>
              </ul>
            </div>

            <div>
              <h2>Timeframe for Refund Processing</h2>
              <p>
                If eligible, refunds for purchases made through third-party
                platforms (Google Play Store, Apple App Store) will follow the
                timeline of that specific platform’s policies. Direct purchases
                made via Stripe are typically processed within 7–10 business
                days upon refund approval.
              </p>
            </div>

            <div>
              <h2>Changes to Refund Policy</h2>
              <p>
                MindMolt reserves the right to modify this Refund Policy at any
                time. Any changes will be effective immediately upon posting,
                and users will be notified of significant updates. Continued use
                of the App following any changes constitutes acceptance of the
                updated Refund Policy.
              </p>
            </div>
            <div>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Refund Policy or need
                assistance with a refund request, please contact us at:
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

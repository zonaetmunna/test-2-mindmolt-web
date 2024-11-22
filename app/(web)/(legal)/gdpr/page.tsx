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

const TableComponent = () => {
  const data = [
    {
      id: 1,
      purpose: 'Account Registration & Login',
      dataCollected: 'Email, Encrypted Password, Mandatory Username',
      lawfulBasis: 'Contractual Necessity',
    },
    {
      id: 2,
      purpose: 'User Identification',
      dataCollected: 'Mandatory Username',
      lawfulBasis: 'Legitimate Interest',
    },
    {
      id: 3,
      purpose: 'Optional Demographics',
      dataCollected:
        'Full Name (optional), Age (optional), Location (optional)',
      lawfulBasis: 'Consent',
    },
    {
      id: 4,
      purpose: 'Device Identification',
      dataCollected: 'Device ID',
      lawfulBasis: 'Legitimate Interest for security and fraud prevention',
    },
    {
      id: 5,
      purpose: 'Data Security & Audits',
      dataCollected: 'Access Logs, Role-Based Access Records',
      lawfulBasis: 'Legal Obligation',
    },
    {
      id: 6,
      purpose: 'Cookie Usage',
      dataCollected:
        'Essential, Functional, Analytics, Security, Advertising, Third-Party Cookies',
      lawfulBasis: 'Consent (where required)',
    },
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              <b>Purpose</b>
            </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              <b>Type of Data Collected</b>
            </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              <b>Lawful Basis</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <b>{item.purpose}</b>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {item.dataCollected}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {item.lawfulBasis}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function GdprPage() {
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
            <h1 className="text-primary">GDPR Compliance</h1>
            <h6 className=" text-gray-500">
              Effective Date : November 4, 2024
            </h6>
            <h6 className=" text-gray-500">Last Updated : November 4, 2024</h6>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p>
                This GDPR Compliance Documentation explains MindMolt’s data
                processing activities and user rights under the General Data
                Protection Regulation (GDPR). MindMolt is committed to ensuring
                the security and privacy of personal data for users within the
                European Economic Area (EEA).
              </p>
            </div>

            <div>
              <h2>Data Processing Purposes and Lawful Basis</h2>
              <p>
                MindMolt processes personal data only for the specific purposes
                defined below, each under a lawful basis as required by GDPR:
              </p>
              <TableComponent />
            </div>

            <div>
              <h2>Data Retention Policy</h2>
              <p>
                Personal data is retained only for as long as necessary for the
                purposes outlined above, or as required by law. User data will
                be deleted or anonymized upon:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Account deletion request: </b> Data associated with user
                  accounts will be deleted within 90 days.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Expiry of retention period: </b> All data exceeding the
                  necessary retention period will be anonymized or deleted
                  securely.
                </li>
              </ul>
            </div>

            <div>
              <h2>User Rights under GDPR</h2>
              <p>
                MindMolt is committed to respecting and facilitating the
                following GDPR rights for users within the EEA:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Right to Access: </b> Users can request access to their
                  personal data by contacting support@mindmolt.com. We will
                  provide a copy of the data upon verification of identity.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Right to Rectification: </b> Users can request corrections
                  to their data if they believe it is inaccurate or incomplete.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Right to Erasure: </b> Users may delete their accounts, and
                  we will erase their data within 90 days, barring legal
                  obligations.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Right to Restrict Processing: </b> Users can request that
                  we temporarily restrict processing of their data under
                  specific conditions.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Right to Data Portability: </b> Users can request a
                  structured, commonly used, and machine-readable format of
                  their data for transfer to another service.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Right to Object: </b> Users may object to processing of
                  their data for direct marketing or other legitimate interests.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Right to Withdraw Consent: </b> Users can withdraw consent
                  at any time for optional data collection (e.g., marketing
                  cookies, demographic information).
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Right Not to Be Subject to Automated Decision-Making: </b>{' '}
                  MindMolt does not employ automated decision-making that has
                  significant legal or similar effects on users.
                </li>
              </ul>
            </div>
            <div>
              <h2>International Data Transfers</h2>
              <p>
                MindMolt’s data centers are located globally, and user data may
                be transferred internationally. Where we transfer data outside
                the EEA, we comply with GDPR requirements by implementing:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Standard Contractual Clauses (SCCs) </b> with our
                  third-party vendors.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Adequate safeguards </b> where required for data transfers
                  to ensure equivalent data protection levels as required by
                  GDPR.
                </li>
              </ul>
            </div>
            <div>
              <h2>Data Security Measures</h2>
              <p>
                MindMolt employs a combination of physical, technical, and
                administrative measures to safeguard personal data, including:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Role-Based Access Control (RBAC): </b> Only authorized
                  personnel can access personal data, with access restricted to
                  necessary functions.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Audits and Access Logging: </b> Regular audits and access
                  logs monitor and prevent unauthorized access.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Encryption: </b> Passwords are encrypted, and sensitive
                  data is protected using encryption both in transit and at
                  rest.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Anonymization and Pseudonymization: </b> Where possible,
                  data is anonymized or pseudonymized to enhance privacy
                  protections.
                </li>
              </ul>
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
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                MindMolt uses cookies as outlined in our Cookie Policy. Users
                may control their preferences, and we seek consent for
                non-essential cookies per GDPR requirements. Types of cookies
                used include:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Essential: </b> Necessary for core functions (login,
                  security) and cannot be disabled.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Functional, Analytics, and Marketing Cookies: </b> Require
                  consent, which can be managed in the App’s settings.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Third-Party Cookies: </b> Provided by services like Google
                  Analytics, with opt-out options available within their
                  respective platforms.
                </li>
              </ul>
            </div>
            <div>
              <h2>Data Protection Impact Assessment (DPIA)</h2>
              <p>
                MindMolt conducts regular DPIAs to assess the risks associated
                with processing personal data and ensures necessary steps are
                taken to mitigate potential risks. DPIAs are reviewed whenever
                significant changes are made to the App’s data processing
                activities.
              </p>
            </div>
            <div>
              <h2>Contact for Data Protection Officer (DPO)</h2>
              <p>
                MindMolt has appointed a Data Protection Officer (DPO) to
                oversee GDPR compliance. For inquiries or to exercise your
                rights, contact our DPO:
              </p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>Email: </b>support@mindmolt.com
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>Address: </b>228 Park Ave S PMB 772763,New York, NY 10003
                </li>
              </ul>
            </div>
            <div>
              <h2>Policy Updates and Notifications</h2>
              <p>
                MindMolt may update this GDPR Compliance Documentation
                periodically. Users will be notified of any significant changes
                via the App or by email. Continued use of the App after updates
                constitutes acceptance of the revised terms.
              </p>
            </div>
            <div>
              <h2>Complaints and Dispute Resolution</h2>
              <p>
                If you believe your data protection rights under GDPR have been
                violated, you have the right to file a complaint with your local
                Data Protection Authority (DPA) or contact us to resolve any
                concerns.
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

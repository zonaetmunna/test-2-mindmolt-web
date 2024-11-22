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

export default function DisclaimerPage() {
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
            <h1 className="text-primary">Disclaimer</h1>
            <h6 className=" text-gray-500">Effective Date November 4, 2024</h6>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p>
                This Disclaimer outlines the limitations and responsibilities
                related to the use of the MindMolt application (&quot;App,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By using
                MindMolt, you agree to the terms of this Disclaimer. If you do
                not agree, please refrain from using the App.
              </p>
            </div>

            <div>
              <h2>General Information and Educational Purpose</h2>
              <p>
                MindMolt is an application designed to assist individuals in
                managing and overcoming porn addiction through resources, tools,
                and community support. The content, information, and features
                provided within the App are intended for general informational
                and educational purposes only and are not intended to replace or
                substitute for professional advice, diagnosis, or treatment.
              </p>
            </div>

            <div>
              <h2>No Professional or Medical Advice</h2>
              <p>
                The App does not provide professional medical, psychological, or
                mental health advice, diagnosis, or treatment. We are not
                licensed healthcare providers, therapists, or counselors. Any
                information provided within the App, including articles,
                community discussions, resources, and tracking tools, is for
                informational purposes only and is not a substitute for
                professional advice or guidance from a qualified healthcare
                provider. Always seek the advice of a licensed professional or
                healthcare provider regarding any questions or concerns you may
                have about addiction, mental health, or medical conditions.
                Never disregard, avoid, or delay seeking professional help due
                to information provided by the App.
              </p>
            </div>

            <div>
              <h2>User Responsibility</h2>
              <p>
                You are responsible for any actions or decisions you make based
                on the information or tools provided by the App. MindMolt is a
                support tool and is not intended to replace personal
                responsibility or professional intervention. By using the App,
                you acknowledge that you are responsible for your own health,
                wellbeing, and any decisions you make.
              </p>
            </div>

            <div>
              <h2>Limitation of Liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                <li className="list-outside list-disc   leading-tight">
                  <b>No Warranties: </b> MindMolt is provided &quot;as is&quot;
                  and &quot;as available&quot; without warranties of any kind,
                  express or implied. We do not guarantee the accuracy,
                  completeness, or usefulness of any information provided
                  through the App and make no warranty that the App will be
                  error-free, secure, or uninterrupted.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>No Liability for Device Damage: </b> We are not liable for
                  any damages to your device, operating system, or data that may
                  result from downloading or using the App. MindMolt does not
                  warrant that the App will be free of viruses, malware, or
                  other harmful components.
                </li>
                <li className="list-outside list-disc   leading-tight">
                  <b>No Liability for Indirect or Consequential Damages: </b>{' '}
                  MindMolt and its affiliates, officers, employees, or licensors
                  shall not be liable for any direct, indirect, incidental,
                  consequential, or special damages arising from your use of the
                  App, including loss of data, loss of revenue, or emotional
                  distress.
                </li>
              </ul>
            </div>

            <div>
              <h2>Data Security and Privacy Limitations</h2>
              <p>
                While we employ reasonable measures to protect your data and
                privacy, we cannot guarantee absolute security of your personal
                information. By using the App, you acknowledge that you
                understand and accept the inherent security risks associated
                with transmitting data online.
              </p>
            </div>

            <div>
              <h2>Third-Party Links and Services</h2>
              <p>
                The App may contain links to third-party websites, applications,
                or resources for informational purposes. MindMolt does not
                endorse or assume responsibility for any third-party content,
                services, or resources, and you access these at your own risk.
                Any interactions you have with third-party websites or services
                are solely between you and the third party.
              </p>
            </div>

            <div>
              <h2>No Guarantee of Results</h2>
              <p>
                MindMolt does not guarantee that using the App will lead to any
                specific result or outcome, including addiction recovery or
                improvement in mental health. Results will vary depending on
                individual factors, and we make no assurances or representations
                regarding success or progress.
              </p>
            </div>
            <div>
              <h2>Modification of Disclaimer</h2>
              <p>
                MindMolt reserves the right to modify or update this Disclaimer
                at any time without prior notice. Changes will be effective
                immediately upon posting. Continued use of the App after any
                modifications constitutes acceptance of the updated Disclaimer.
                Please review this Disclaimer periodically to stay informed.
              </p>
            </div>
            <div>
              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns regarding this disclaimer
                please contact us at:
                <br />
                Enigma Digital Apps LLC
                <br />
                228 Park Ave S PMB 772763,New York, NY 10003
                <br />
                <b>email: </b>support@mindmolt.com
              </p>
            </div>

            <div>
              <h2>Acknowledgement</h2>
              <p>
                By using MindMolt, you acknowledge that you have read,
                understood, and agreed to this Disclaimer.
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

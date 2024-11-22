import React from 'react';
import Image from 'next/image';

const HowItHelpsYou: React.FC = () => {
  return (
    <section className="container my-[64px]">
      <h2 className="text-center text-muted">How MindMolt Helps You</h2>
      <div className="flex flex-col items-center space-y-2 mt-4 gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-4">
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/howMindMoltHelpsYou/mental.svg"
              alt="Mental Image"
              width={640}
              height={460}
            />
          </div>
          <div className="flex flex-col items-start w-full sm:w-1/2 ">
            <h3 className="text-primary">Mental and Emotional Wellbeing</h3>
            <ul className="font-noto_serif_jp text-foreground text-base ">
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>Improved Mental Health </b>Witness a remarkable decline in
                anxiety and depression by overcoming porn addiction.
              </li>
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>Better Focus and Motivation </b>Say goodbye to distractions
                caused by porn addiction and hello to productivity.
              </li>
              <li className="list-inside before:content-['-'] before:mr-2 leading-tight ">
                <b>Increased Self-Control </b> Build up your self-discipline and
                self-esteem significantly by quitting porn. Relationships and
                Social Connections
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-4 lg:pl-[64px]">
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/howMindMoltHelpsYou/relationships.svg"
              alt="Mental Image"
              width={640}
              height={460}
            />
          </div>
          <div className="flex flex-col items-start w-full sm:w-1/2 ">
            <h3 className="text-primary">
              Relationships and Social Connections
            </h3>
            <ul className="font-noto_serif_jp text-foreground text-base ">
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>Enhanced Relationships </b>Reconnect better with loved ones
                as you stop watching porn and improve your intimacy.
              </li>
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>Better Intimacy </b>Experience more profound, more meaningful
                connections without the interference of porn addiction.
              </li>
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>Increased Confidence </b> Feel more self-assured in social
                interactions, knowing you&apos;ve quit porn.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-4">
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/howMindMoltHelpsYou/productivity.svg"
              alt="Mental Image"
              width={640}
              height={460}
            />
          </div>
          <div className="flex flex-col items-start w-full sm:w-1/2 ">
            <h3 className="text-primary">Productivity and Time Management</h3>
            <ul className="font-noto_serif_jp text-foreground text-base ">
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>More Time and Productivity </b> Regain lost hours previously
                spent on porn addiction and use them effectively.
              </li>
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>Reduced Procrastination </b>Tackle your tasks head-on with
                newfound clarity after quitting porn.
              </li>
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>Increased Productivity </b>Achieve more in your day-to-day
                life by employing our resources for porn addiction recovery.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-4 lg:pl-[64px] ">
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/howMindMoltHelpsYou/health.svg"
              alt="Mental Image"
              width={640}
              height={460}
            />
          </div>
          <div className="flex flex-col items-start w-full sm:w-1/2 ">
            <h3 className="text-primary">Health and Brain Function</h3>
            <ul className="font-noto_serif_jp text-foreground text-base ">
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>Healthier Brain </b>Improve overall brain health and
                functionality by stopping porn.
              </li>
              <li className="list-inside before:content-['-'] before:mr-2   leading-tight">
                <b>Rewiring the Brain </b>Benefit from enhanced dopamine
                sensitivity after battling porn addiction.
              </li>
              <li className="list-inside before:content-['-'] before:mr-2 leading-tight ">
                <b>Better Physical Health </b>Feel stronger and healthier both
                mentally and physically by quitting porn.
              </li>
              <li className="list-inside before:content-['-'] before:mr-2  leading-tight">
                <b>Support for Positive Change </b>Embrace a lifestyle
                transformation that respects both personal and societal values,
                supported by our porn addiction resources.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelpsYou;

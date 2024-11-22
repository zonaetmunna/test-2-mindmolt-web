import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  return (
    <section className="items-center ">
      <h1 className="bg-tertiary text-center text-foreground mt-0 py-8">
        Frequently Asked Questions
      </h1>
      <div className="container max-w-5xl items-center justify-center mx-auto my-16">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-foreground font-bold text-left text-2xl">
              Do you store or read our personal information like what websites
              are visited?
            </AccordionTrigger>
            <AccordionContent>
              No, we do not store or read personal information related to the
              websites you visit. Our service is designed with user privacy as a
              top priority. This means we do not track, log, or monitor your
              browsing activity in any form. Any data that passes through our
              system remains private and is not stored or analyzed.{' '}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-foreground font-bold text-left text-2xl">
              How can I unblock the porn from my device?
            </AccordionTrigger>
            <AccordionContent>
              If you need to unblock access to porn on your device, follow these
              steps within our app:
              <br />
              <b>Open the App: </b> Launch the app on your device.
              <br />
              <b>Navigate to Settings: </b>Tap on the Settings icon or menu.
              <br />
              <b>Access Control Settings: </b>Go to the Access Control section
              within the settings.
              <br />
              <b>Unblock Option: </b>Find the Unblock button in this section.
              <br />
              <b>Click Unblock: </b>Tap the Unblock button to disable the
              content block.
              <br />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-foreground font-bold text-left text-2xl">
              Would using this affect our streaming services like netflix and
              amazon prime?
            </AccordionTrigger>
            <AccordionContent>
              No, using our app will not affect your access to streaming
              services like Netflix, Amazon Prime, or other similar platforms.
              Our app is specifically designed to block certain types of content
              while ensuring that your streaming experience remains
              uninterrupted. The app’s content control and restrictions are
              focused solely on blocking pornographic material and do not
              interfere with legitimate streaming services or other
              non-restricted content.{' '}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-foreground font-bold text-left text-2xl">
              Would using this app lower our internet bandwidth?
            </AccordionTrigger>
            <AccordionContent>
              No, using this app would not lower your internet bandwidth. The
              app is designed to run efficiently in the background without
              affecting your overall internet speed or bandwidth. Our technology
              ensures that while it provides its content filtering and security
              features, it does not create any noticeable lag or slow down your
              internet connection.{' '}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

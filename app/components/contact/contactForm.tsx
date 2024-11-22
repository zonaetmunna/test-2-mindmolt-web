'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().optional(),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type formSchemaType = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });
  const [dialogState, setDialogState] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setDialogState('sending');
    console.log(JSON.stringify(values, null, 2));
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('email sent');
        setDialogState('sent');
        form.reset();
      } else {
        setDialogState('error');
        console.log('email failed');
      }
    } catch (error) {
      setDialogState('error');
      console.error('Error submitting form:', error);
    }
  }
  const closeDialog = () => {
    setDialogState('idle'); // Reset the dialog to 'idle' state
  };
  return (
    <section className="container py-8 max-w-5xl font-figtree flex flex-col lg:flex-row mx-auto my-16 lg:gap-4 gap-10 justify-between items-start">
      <div className="w-full flex  flex-col items-center">
        <h2 className="text-[28px] mt-0 font-bold text-foreground">
          Have other questions? Contact us
        </h2>
        <p className="mt-2 max-w-xl px-12 text-base text-center font-noto_serif_jp text-foreground">
          We&apos;re always here if you need us. Our help center is always open
          for business. If you can&apos;t find the answer you&apos;re looking
          for, we&apos;re here to lend a hand.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-[450px] mx-auto shrink-0 flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute left-4 -translate-y-1/2 top-0 text-xs bg-[#DFEEFF] py-[2px] px-1">
                  Email address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    {...field}
                    className="!mt-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute left-4 -translate-y-1/2 top-0 text-xs bg-[#DFEEFF] py-[2px] px-1">
                  Subject (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="What is your message about?"
                    {...field}
                    className="!mt-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute left-4 -translate-y-1/2 top-0 text-xs bg-[#DFEEFF] py-[2px] px-1">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hi MindMolt team!"
                    className="resize-none !mt-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full mx-auto md:max-w-[370px] bg-[#7CC7FE]"
            size={'lg'}
          >
            Submit Message
          </Button>
        </form>
      </Form>
      {dialogState !== 'idle' && (
        <div
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            padding: '20px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          {dialogState === 'sending' && <p>Sending your email...</p>}
          {dialogState === 'sent' && <p>Email sent successfully!</p>}
          {dialogState === 'error' && (
            <p>There was an error sending your email. Please try again.</p>
          )}
          <button onClick={closeDialog}>Close</button>
        </div>
      )}
    </section>
  );
};

export default ContactForm;

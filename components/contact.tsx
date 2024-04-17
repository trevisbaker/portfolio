'use client';

import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      id="contact"
      initial={{
        opacity: 0,
      }}
      ref={ref}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      whileInView={{
        opacity: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:tbaker@brackio.com">
          tbaker@brackio.com
        </a>{' '}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          maxLength={500}
          name="senderEmail"
          placeholder="Your email"
          required
          type="email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          maxLength={5000}
          name="message"
          placeholder="Your message"
          required
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

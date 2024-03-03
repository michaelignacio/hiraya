'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/services/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      // Assuming sendEmail returns a Promise
      await sendEmail(data);
      setIsSubmitted(true);
    } catch (error) {
      // Handle the error if sendEmail fails
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="my-5">
      {isSubmitted ? (
        <p className="text-center">
          Thank you for your inquiry! We will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5">
          <div className="mb-5">
            <label
              htmlFor='name'
              className='mb-3 block text-base font-medium text-black sr-only'
            >
              Full Name
            </label>
            <input
              type='text'
              placeholder='Full Name'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:shadow-md'
              {...register('name', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='email'
              className='mb-3 block text-base text-black sr-only'
            >
              Email Address
            </label>
            <input
              type='email'
              placeholder='example@domain.com'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:shadow-md'
              {...register('email', { required: true })}
            />
          </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base text-black sr-only'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:shadow-md'
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button className='hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none w-full'>
            Send Inquiry
          </button>
        </div>
      </form>
      )}
    </div>
  );
};

export default Contact;
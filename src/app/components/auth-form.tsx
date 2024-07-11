'use client';

import { Formik, Form } from 'formik';
import React from 'react';
import InputField from './input-field';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export type AuthFormValues = {
  name: string;
  email: string;
  password: string;
};

const initialValues: AuthFormValues = {
  name: '',
  email: '',
  password: '',
};

export interface AuthFormProps {
  onSubmit?: (values: AuthFormValues) => void | Promise<void>;
}

export default function AuthForm({ onSubmit }: AuthFormProps) {

  const route = useRouter()


  const handleSubmit = (values: AuthFormValues) => {
    console.log(values);
  };

  return (
    <>
      <div className="container flex justify-center">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="flex flex-col gap-10 justify-center">
            <p className="mb-0.5 text-xl">Sign Up</p>
            <div className="flex flex-col gap-6">
              <div>
                <InputField label="Name" placeholder="Name" name="name" />
              </div>
              <div>
                <InputField label="Email" placeholder="Email" name="email" />
              </div>
              <div>
                <InputField
                  label="Password"
                  placeholder="Password"
                  name="password"
                  type="password"
                />
              </div>
            </div>

            <button
              className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded"
              type="submit"
            >
              Submit
            </button>
            <p className="mb-0.5 text-xl text-center uppercase">Or</p>
            <button
              className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded"
              onClick={() => signIn('google', { callbackUrl: '/home' })}
            >
              Continue via Google
            </button>
            <button
              className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded"
              onClick={() => signIn('github', { callbackUrl: '/home' })}
            >
              Continue via GitHub
            </button>
          </Form>
        </Formik>
      </div>
      <button></button>
    </>
  );
}

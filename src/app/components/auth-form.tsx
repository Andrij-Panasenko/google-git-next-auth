'use client';

import { Formik, Form } from 'formik';
import React from 'react';
import InputField from './input-field';

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
  const handleSubmit = (values: AuthFormValues) => {
    console.log(values);
  };

  return (
    <>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
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
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputFieldProps {
  label?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  id?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <Field {...rest} id={id} />
      </div>
    </>
  );
}

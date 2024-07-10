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
      <div className="flex flex-col">
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
        <Field
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow "
          {...rest}
          id={id}
        />
      </div>
    </>
  );
}

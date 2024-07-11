import Image from 'next/image';
import React from 'react';

export interface StatusBarProps {
  children: React.ReactNode;
}

export default function StatusBar({ children }: StatusBarProps) {
  return (
    <>
      <div className="container m-auto mt-10 py-6 px-10">
        <div className="flex justify-between bg-white border-b border-gray-300 py-6 px-10 rounded-md">
          <div className="flex flex-col gap-3">{children}</div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between">
              <p className="font-bold">Profile compleated</p>
              <p className="text-emerald-500 font-bold">100%</p>
            </div>
            <div className="flex gap-1">
              <span className="block h-2 w-20 bg-green-300"></span>
              <span className="block h-2 w-20 bg-green-300"></span>
              <span className="block h-2 w-20 bg-green-300"></span>
              <span className="block h-2 w-20 bg-green-300"></span>
              <span className="block h-2 w-20 bg-green-300"></span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-12 px-8">
          <ul className="flex gap-10">
            <li className=" rounded-md flex-grow bg-white space-y-5 p-6 shadow-lg shadow-gray-300/50">
              <Image
                width={16}
                height={16}
                src="/icons/check.svg"
                alt="check icon"
              />
              <h3 className="font-bold">Verification</h3>
              <p className="text-gray-600">You verifyed your account</p>
            </li>
            <li className=" rounded-md flex-grow bg-white space-y-5 p-6 shadow-lg shadow-gray-300/50">
              <Image
                width={16}
                height={16}
                src="/icons/check.svg"
                alt="check icon"
              />
              <h3 className="font-bold">Profile picture</h3>
              <p className="text-gray-600">You added profile picture</p>
            </li>
            <li className=" rounded-md flex-grow bg-white space-y-5 p-6 shadow-lg shadow-gray-300/50">
              <Image
                width={16}
                height={16}
                src="/icons/check.svg"
                alt="check icon"
              />
              <h3 className="font-bold">Parents</h3>
              <p className="text-gray-600">Ypu added the parents</p>
            </li>
            <li className=" rounded-md flex-grow bg-white space-y-5 p-6 shadow-lg shadow-gray-300/50">
              <Image
                width={16}
                height={16}
                src="/icons/check.svg"
                alt="check icon"
              />
              <h3 className="font-bold">Litter</h3>
              <p className="text-gray-600">Ypu added the litter</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

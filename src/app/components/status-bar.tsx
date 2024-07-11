import React from 'react';

export interface StatusBarProps {
  children: React.ReactNode;
}

export default function StatusBar({ children }: StatusBarProps) {
  return (
    <>
      <div className="container m-auto mt-10 py-6 px-10 bg-white flex justify-between">
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
    </>
  );
}

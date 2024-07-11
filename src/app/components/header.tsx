import Image from 'next/image';
import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-300">
      <header className=" container m-auto flex items-center gap-5 py-6	px-10">
        <h1 className="flex-1 text-3xl font-semibold text-gray-900">
          {children}
        </h1>
        <div className="w-px self-stretch bg-gray-300" />

        <div className="flex gap-3 items-center">
          <Image
            width={44}
            height={44}
            src="/images/avatar.png"
            alt="User avatar"
          />
          <p className="text-base	font-semibold text-gray-900">John Smith</p>
        </div>
      </header>
    </div>
  );
}

import React from 'react';
import AuthForm from './components/auth-form';
import Header from './components/header';
import StatusBar from './components/status-bar';

export default function Home() {
  return (
    <main>
      {/* <AuthForm /> */}
      <Header>My Tipaw</Header>
      <StatusBar>
        <h2 className="font-semibold text-lg text-teal-400">
          You successfully compleated your profile at Tipaw
        </h2>
        <p className="font-semibold">Now you can use Tipaw for 100% 🎉</p>
      </StatusBar>
    </main>
  );
}

import React from "react"
import Header from "../components/header";
import StatusBar from "../components/status-bar";
import Announsments from "../components/announsments";

export interface PageProps { }

export default function Page({ }: PageProps) {
  return (
    <>
      <main>
        {/* <Header>My Tipaw</Header> */}
        <StatusBar>
          <h2 className="font-semibold text-lg text-teal-400">
            You successfully compleated your profile at Tipaw
          </h2>
          <p className="font-semibold">Now you can use Tipaw for 100% 🎉</p>
        </StatusBar>
        {/* <Announsments /> */}
      </main>
    </>
  );
}
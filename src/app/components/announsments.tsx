import React from 'react';

export interface AnnounsmentsProps {}

export default function Announsments({}: AnnounsmentsProps) {
  return (
    <>
      <div className="container m-auto py-6 px-10">
        <div className="bg-white py-6 px-10 rounded-md">
          <h2 className="font-bold text-lg text-cyan-300 mb-6">
            Announsments from Tipaw <span>🔴</span>
          </h2>
          <div className="border-2 border-cyan-300 rounded-lg">
            <div className="bg-cyan-300 flex justify-between px-2 py-2.5">
              <h3 className="text-white font-bold">What is Tipaw?</h3>
              <span className="cursor-pointer">⬇</span>
            </div>
            <div className="px-4 py-4">
              <div className="flex gap-2 mb-4">
                📆 <p className="text-cyan-300 font-semibold">Date</p>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                sunt facere qui nulla perspiciatis at non facilis deserunt
                labore. Dignissimos, consequatur velit. Dolore cupiditate
                perferendis itaque reiciendis hic eum corrupti. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Minima quibusdam,
                eos sequi temporibus veniam aliquid ipsa incidunt eum accusamus,
                rem nesciunt quo. Veritatis, aperiam? Repellat perferendis
                provident similique aut odio! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Illum, voluptas libero quidem
                expedita ut perferendis quae, deleniti dicta quia obcaecati
                recusandae beatae est quam provident velit. Dolor quas ducimus
                illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia odio beatae sapiente repudiandae voluptatum unde
                reprehenderit, labore consectetur repellat voluptates quaerat
                illo iure quos accusantium dolores culpa libero totam?
                Veritatis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

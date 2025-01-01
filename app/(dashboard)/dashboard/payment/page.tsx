/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { useState } from 'react';

/* eslint-disable jsx-a11y/alt-text */
export default function TopBotStrategy() {
  // https://publuu.com/flip-book/283604/662094
  return (
    <main className="flex flex-col pt-[2rem]">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 w-full justify-between">
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
      </div>
    </main>
  );
}

const PaymentCard = () => {
  return (
    <div className="border border-[color:var(--Background,#F2F4F5)] bg-white flex max-w-[359px] flex-col px-3 py-4 rounded-md border-solid items-start">
      <div className="text-sky-950 text-lg font-bold leading-6 self-stretch">Salary</div>
      <div className="self-stretch text-stone-300 text-sm leading-5 mt-3">
        Lorem ipsum dolor sit amet consectetur. Ut montes nunc condimentum hac vestibulum faucibus
        nunc. Tincidunt risus arcu donec consectetur nisl{' '}
      </div>
      <div className="items-stretch border border-[color:var(--Primary,#3EC5F0)] flex w-[91px] max-w-full gap-2 mt-4 px-3 py-2 rounded-lg border-solid">
        <div className="text-sky-400 text-base font-semibold leading-6">View </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41fd7bbff41e314407406900808a7b7e8a1ab7e8b8fe3ac31322b93fc2d0ae43?apiKey=78d3d1db18ff493abeb06e613aff3679&"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
        />
      </div>
    </div>
  );
};

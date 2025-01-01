/* eslint-disable jsx-a11y/alt-text */

import HelpWoman from '@assets/svg/help.svg';

const HelpCenterComp = () => {
  return (
    <div className="flex w-60 flex-col">
      <div className="shadow-[0px_20px_40px_0px_rgba(6,59,90,0.16)] bg-violet-700 self-stretch flex w-full items-start justify-between gap-2.5 mt-2 pl-3 pr-5 pb-3 rounded-[100px]">
        <img
          loading="lazy"
          src={HelpWoman.src}
          className="aspect-square object-cover object-center w-12 overflow-hidden shrink-0 mt-3"
        />
        <div className="flex flex-col mt-[1rem]">
          <div className="text-purple-50 text-xs font-bold leading-3 mt-2">Having issues?</div>
          <div className="text-purple-50 text-sm leading-4 mt-1.5">Reach out to our Agent</div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterComp;

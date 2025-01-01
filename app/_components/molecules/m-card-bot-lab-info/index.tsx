import LabIcon from '@/app/_lib/icons/dashboard/lab';

const BotLabInfo = () => {
  return (
    <div className="flex flex-col items-center justify-start lg:px-5 ">
      <div className="flex space-x-4 text-zinc-800 self-start lg:self-center text-lg font-semibold  whitespace-nowrap">
        BotLab Portal <LabIcon />
      </div>
      <div className="bg-white flex  flex-col mt-4 self-center  py-7 rounded-lg lg:self-start w-[290px] sm:w-[470px] max-md:max-w-full">
        <div className="text-slate-600 bg-white shadow-sm rounded-sm px-[0.2rem] py-[1rem] lg:px-[2rem] lg:py-[1rem] text-sm leading-4 self-center w-[308px] sm:w-[470pxs] lg:w-[1038px] max-w-[1038px] lg:-ml-8 max-md:max-w-full">
          Welcome to our BotLab portal, also known as the Pre-Listing Assessment Lab, a space
          we&rsquo;ve created to introduce new bots from our research before their official listing.
          Here&rsquo;s what you can do:
          <br />
          <br />- Keep tabs on bot performance using Myfxbook data.
          <br />- Verify investor passwords and more, whether it&rsquo;s on a demo or live account
          funded to test the bot.
          <br />
          <br />
          Please note that accounts in the Pre-Listing Lab are not yet ready for copying until they
          pass our certification process. You can review their performances, and when they become
          available for copying, you’re free to make your own choices.
          <br />
          <br />
          The exceptional bots listed below, part of our research, require you to obtain the
          investor password, verify their performance, and diligently monitor their progress on
          Myfxbook.
        </div>
      </div>
    </div>
  );
};

export default BotLabInfo;

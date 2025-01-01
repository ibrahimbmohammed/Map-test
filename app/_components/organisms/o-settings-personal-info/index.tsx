import { getUserFromCookies } from '@/app/_lib/cookies';

const PersonalInfoForm = () => {
  const userData = getUserFromCookies();

  const userEmail = userData?.email;
  return (
    <div className="bg-white flex flex-col px-5 rounded-lg border-2 border-solid border-gray-200">
      <div className="self-center flex w-[750px] max-w-full flex-col mt-5 mb-16">
        <div className="text-zinc-800 text-lg font-semibold">Personal Information</div>
        <div className="items-start content-start flex-wrap flex w-[746px] max-w-full grow flex-col mt-9">
          <div className="flex w-full items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto w-[308px]">
              <div className="border-[color:var(--Topbot-Primary,#5D17EB)] bg-purple-50 self-stretch flex w-full grow flex-col pl-4 pr-5 py-2.5 rounded-xl border-[0.5px] border-solid">
                <div className="justify-center items-start flex w-[81px] max-w-full flex-col -mt-px mb-px">
                  <div className="text-neutral-400 text-xs capitalize">First Name</div>
                  <div className="text-gray-900 text-base font-medium capitalize mt-1.5">
                    {userData?.firstName}
                  </div>
                </div>
              </div>
            </div>
            <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto w-[308px]">
              <div className="border-[color:var(--Topbot-Primary,#5D17EB)] bg-purple-50 self-stretch flex w-full grow flex-col pl-4 pr-5 py-2.5 rounded-xl border-[0.5px] border-solid">
                <div className="justify-center items-start flex w-[81px]  max-w-full flex-col -mt-px mb-px">
                  <div className="text-neutral-400 text-xs capitalize">Last Name</div>
                  <div className="text-gray-900 text-base font-medium capitalize mt-1.5">
                    {userData?.lastName}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start flex w-[741px] max-w-full flex-col mt-8">
            <div className="border-[color:var(--Topbot-Primary,#5D17EB)] bg-purple-50 self-stretch flex grow flex-col pl-4 pr-5 py-2.5 rounded-xl border-[0.5px] border-solid max-md:max-w-full">
              <div className="justify-center items-start flex w-[221px] max-w-full flex-col -mt-px mb-px">
                <div className="text-neutral-400 text-xs capitalize">Email Address</div>
                <div className="text-gray-900 text-base font-medium lowercase mt-1.5">
                  {userEmail}
                </div>
              </div>
            </div>
          </div>
          <div className="items-start flex w-[741px] max-w-full flex-col mt-8">
            <div className="border-[color:var(--Topbot-Primary,#5D17EB)] bg-purple-50 self-stretch flex grow flex-col pl-4 pr-5 py-2.5 rounded-xl border-[0.5px] border-solid max-md:max-w-full">
              <div className="justify-center items-start flex w-[85px] max-w-full flex-col -mt-px mb-px">
                <div className="text-neutral-400 text-xs capitalize">Country/Regional</div>
                <div className="text-gray-900 text-base font-medium capitalize mt-1.5">n/a</div>
              </div>
            </div>
          </div>
          <div className="items-start flex w-[741px] max-w-full flex-col mt-8">
            <div className="border-[color:var(--Topbot-Primary,#5D17EB)] bg-purple-50 self-stretch flex grow flex-col pl-4 pr-5 py-2.5 rounded-xl border-[0.5px] border-solid max-md:max-w-full">
              <div className="justify-center items-start flex w-[55px] max-w-full flex-col -mt-px mb-px">
                <div className="text-neutral-400 text-xs capitalize">City</div>
                <div className="text-gray-900 text-base font-medium capitalize mt-1.5">n/a</div>
              </div>
            </div>
          </div>
          <div className="items-start flex w-[741px] max-w-full flex-col mt-8">
            <div className="border-[color:var(--Topbot-Primary,#5D17EB)] bg-purple-50 self-stretch flex grow flex-col pl-4 pr-5 py-2.5 rounded-xl border-[0.5px] border-solid max-md:max-w-full">
              <div className="justify-center items-start flex w-[72px] max-w-full flex-col -mt-px mb-px">
                <div className="text-neutral-400 text-xs capitalize">State/Province</div>
                <div className="text-gray-900 text-base font-medium capitalize mt-1.5">n/a</div>
              </div>
            </div>
          </div>
          <div className="items-start flex w-[741px] max-w-full flex-col mt-8">
            <div className="border-[color:var(--Topbot-Primary,#5D17EB)] bg-purple-50 self-stretch flex grow flex-col pl-4 pr-5 py-2.5 rounded-xl border-[0.5px] border-solid max-md:max-w-full">
              <div className="justify-center items-start flex w-[55px] max-w-full flex-col -mt-px mb-px">
                <div className="text-neutral-400 text-xs capitalize">ZIP/Postal</div>
                <div className="text-gray-900 text-base font-medium capitalize mt-1.5">n/a</div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center bg-violet-700/25 flex w-[290px] max-w-full grow flex-col mt-6 px-5 py-5 rounded-xl">
            <div className="text-purple-50 text-center text-sm font-semibold leading-5 tracking-normal self-center -mb-px">
              Save Changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;

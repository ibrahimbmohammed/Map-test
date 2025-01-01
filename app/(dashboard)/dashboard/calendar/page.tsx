'use client';

import { useState } from 'react';
import MyTabs from '@/app/_lib/hoc/tab';
import PersonalInfoForm from '@/app/_components/organisms/o-settings-personal-info';
import Security from '@/app/_components/organisms/o-settings-security';
import TopComp from '@/app/_components/atoms/a-top-comp';

export default function SettingsPage() {
  const [, setUserTypeValues] = useState('');
  return (
    <main className="flex w-full flex-col ">
      <TopComp name="Settings" />
      <div className="flex w-full flex-col  content-center space-y-3  md:py-[3rem]  lg:py-[0.5rem] lg:pb-[1.5rem]">
        <MyTabs
          tabHeadClass=" w-full  "
          stateFunction={setUserTypeValues}
          tabList={['Profile Settings', 'Security Settings']}
          tabPanel={[
            <div className="flex w-full flex-col space-y-5 h-screen no-scrollbar  overflow-y-auto">
              <PersonalInfoForm />
            </div>,
            <div className="flex w-full flex-col space-y-5 h-screen no-scrollbar  overflow-y-auto">
              <Security />
            </div>,
          ]}
        />
      </div>
    </main>
  );
}

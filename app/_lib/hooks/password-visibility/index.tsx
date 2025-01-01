'use client';

import React, { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import EyeIcon from '../../icons/dashboard/eye';

const usePasswordToggle = (): [string, React.ReactNode] => {
  const [visible, setVisible] = useState<boolean>(false);
  const inputType = visible ? 'text' : 'password';
  const handleV = () => {
    setVisible(!visible);
  };
  const icon = (
    <div
      role="none"
      className="text-xl"
      onClick={() => {
        handleV();
      }}
    >
      {!visible ? (
        <EyeIcon className="stroke-[#C4C6CB] z-50 cursor-pointer" />
      ) : (
        <AiFillEyeInvisible className="text-primaryColor" />
      )}
    </div>
  );

  return [inputType, icon];
};

export default usePasswordToggle;

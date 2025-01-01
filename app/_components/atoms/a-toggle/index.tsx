/* eslint-disable no-unused-vars */
import { Switch } from '@headlessui/react';
import { useState } from 'react';

interface Props {
  defaultValue?: boolean;
  setOption?(option: boolean): void;
}

const Toggle = ({ defaultValue = true, setOption }: Props) => {
  const [currentOption, setCurrentOption] = useState<boolean>(defaultValue);
  return (
    <div className="py-2">
      <Switch
        checked={currentOption}
        onChange={(value) => {
          setCurrentOption(value);
          if (setOption) {
            setOption(value);
          }
        }}
        className={`${currentOption ? 'bg-[#7FB685]' : 'bg-gray-100'}
            relative inline-flex shadow-[2px_4px_5px_0px_rgba(0,0,0,0.15)_inset] h-[26px] w-[82px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className=" absolute  font-light top-[3px] left-2 text-xs">
          <p className="text-gray-100"> Disable</p>
        </span>
        <span
          aria-hidden="true"
          className={`${currentOption ? 'translate-x-[58px]' : 'translate-x-0'}
              pointer-events-none inline-block h-[21.2px] w-[20.5px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Toggle;

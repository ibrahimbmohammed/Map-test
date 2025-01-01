import { Tab } from '@headlessui/react';
import { Children, Dispatch, SetStateAction } from 'react';

interface MyTabsProps {
  tabList: string[];
  tabPanel: React.ReactNode | React.ReactNode[];
  tabHeadClass?: string;
  stateFunction?: Dispatch<SetStateAction<string>>;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function MyTabs({ tabList, tabPanel, tabHeadClass = 'w-[50%]', stateFunction }: MyTabsProps) {
  const childrenNode = Children.toArray(tabPanel);
  return (
    <Tab.Group>
      <Tab.List
        className={`flex items-center focus-none outline-none  justify-start space-x-8 ml-2 pb-4  ${tabHeadClass}  `}
      >
        {tabList.map((item) => (
          <Tab
            onClick={() => stateFunction && stateFunction(item)}
            className={({ selected }) =>
              classNames(
                'text-start  py-2.5 text-sm font-medium leading-5 text-black ',
                selected ? 'border-b-2 border-[#000080]  ' : ' ',
              )
            }
          >
            {item}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {childrenNode.map((item) => (
          <Tab.Panel>{item}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MyTabs;

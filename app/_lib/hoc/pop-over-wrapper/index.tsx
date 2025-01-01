import { Popover, Transition } from '@headlessui/react';
import { Fragment, Children, Dispatch, SetStateAction } from 'react';

interface MyPopoverProp {
  children: React.ReactNode | React.ReactNode[];
  panelClassName?: string;
  show?: boolean;
  setIsShowing?: Dispatch<SetStateAction<boolean>>;
}

function MyPopover({ children, panelClassName = '', show, setIsShowing }: MyPopoverProp) {
  const childrenNode = Children.toArray(children);
  const handleMouseEnter = () => {
    if (setIsShowing) {
      setIsShowing(true);
    }
  };
  const handleMouseLeave = () => {
    if (setIsShowing) {
      setIsShowing(false);
    }
  };
  return (
    <Popover
      className="relative"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Popover.Button>{childrenNode[0]}</Popover.Button>
      <Transition
        show={show}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className={`absolute ${panelClassName}`}>{childrenNode[1]}</Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default MyPopover;

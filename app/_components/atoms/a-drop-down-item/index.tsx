/* eslint-disable react/no-unused-prop-types */
import { UrlObject } from 'url';
import Link from '@lib/hoc/link';
import { IconProps } from '@lib/icons/dashboard/sidebar/Icon.types';
import { v4 as uuidv4 } from 'uuid';

declare type Url = string | UrlObject;

interface DropDownProps {
  title: string | undefined;
  link?: Url;
  Icon?: React.ComponentType<IconProps> | string;
  subTitle?: string | undefined;
}

function DropDownItem({ link, title, subTitle }: DropDownProps) {
  return (
    <Link
      href={link as Url}
      className="flex items-center whitespace-nowrap p-2 px-4 pr-8 text-sm font-medium text-gray-600 transition-all hover:cursor-pointer hover:bg-primaryColor hover:text-white"
      activeClassName=""
      key={uuidv4()}
    >
      <div className="md:justify-between">
        <div className="relative hidden w-[20%] md:block">
          <div
            className="h-[3rem] w-[3rem] rounded-full  pl-1 "
            style={{
              backgroundColor: 'var(--color-primaryColor)',
              opacity: '15%',
            }}
          />

          {/* {Icon && typeof Icon !== 'string' ? (
                        <i className="absolute top-4 right-5">
                            <Icon />
                        </i>
                    ) : (
                        <i className="absolute top-4 right-5">
                            {IconComponent ? <IconComponent /> : <LectureIcon />}
                        </i>
                    )} */}
        </div>
        <div className="w-full md:w-[70%] ">
          <p className="whitespace-pre-line">{title}</p>
          <p className=" hidden text-[0.6rem] md:block">{subTitle?.substring(0, 40)}</p>
        </div>
      </div>
    </Link>
  );
}

export default DropDownItem;

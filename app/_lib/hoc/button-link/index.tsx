/* eslint-disable jsx-a11y/anchor-is-valid */
import type { ReactElement } from 'react';
import { cloneElement } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

type ActiveButtonProps = LinkProps & {
  children: ReactElement;
  activeClassName?: string;
  className?: string;
};

const ActiveButton = ({
  children,
  activeClassName = '',
  className = '',
  ...rest
}: ActiveButtonProps) => {
  const { asPath } = useRouter();
  const childClassName = children.props.className ?? '';
  const newClassName = `${childClassName} ${activeClassName ?? ''}`;
  const derivedActiveClassName = asPath === rest.href ? newClassName : childClassName;
  // if (partArray && partArray.length === 2) {
  //     derivedActiveClassName = partArray[1] === rest.href ? newClassName : childClassName;
  // }

  // const matchingFunction = (route: string) => {
  //     if (
  //         route === '/events' ||
  //         route === '/conference' ||
  //         route === '/news' ||
  //         route === '/publication'
  //     ) {
  //         return '/events';
  //     }
  //     if (
  //         route === '/about' ||
  //         route === '/leadership' ||
  //         route === '/chapters' ||
  //         route === '/contact_us' ||
  //         route === '/faq'
  //     ) {
  //         return '/about';
  //     }
  //     if (route === '/categories' || route === '/directories') {
  //         return '/membership';
  //     }
  //     return '/programs';
  // };

  return (
    <Link {...rest}>
      {cloneElement(children, { className: `${derivedActiveClassName} ${className} ` })}
    </Link>
  );
};

export default ActiveButton;

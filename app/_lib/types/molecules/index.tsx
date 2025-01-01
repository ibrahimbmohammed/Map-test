/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { IconProps } from '@lib/icons/dashboard/sidebar/Icon.types';
import { type } from 'os';
import React from 'react';

// interface defaultProps{
//     className: string
// }
export interface SubItem {
  id: string;
  name: string;
  path: string;
  Icon: React.ComponentType<IconProps>;
}

export type SidebarNavItemProps = {
  id?: string;
  name: string;
  type?: string;
  path: string;
  asPath?: string;
  showIcon?: boolean;
  style?: {
    link: string;
    linkInner: string;
    active: string;
    activeInner: string;
    inactive: string;
    inactiveInner: string;
    back_active: string;
    back_inactive: string;
    icon_active: string;
    innerIcon_active?: string;
    innerIcon_inactive?: string;
    icon_inactive?: string;
    extra_icon_active?: string;
    extra_icon_inactive?: string;
  };
  subNavItems?: SubItem[];
  Icon: React.ComponentType<IconProps>;
  hasSubNavItems: boolean;
  openDrawer?: boolean;
  toggleOpenSidebar?: () => void;
  handleToggleOpenDrawerAndShiftDashboardContent?: () => void;
};

export type SidebarNavDropDownItemProps = {
  id?: string;
  name: string;
  path: string;
  asPath?: string;
  showIcon?: boolean;
  style?: {
    link: string;
    linkInner: string;
    active: string;
    activeInner: string;
    inactiveInner: string;
    inactive: string;
    back_active: string;
    back_inactive: string;
    icon_active: string;
    innerIcon_active?: string;
    innerIcon_inactive?: string;
    icon_inactive?: string;
    extra_icon_active?: string;
    extra_icon_inactive?: string;
  };
  subNavItems?: SubItem[];
  Icon: React.ComponentType<IconProps>;
  Icon2: React.ComponentType<IconProps>;
  openDrawer: boolean;
  toggleOpenSidebar?: () => void;
  handleToggleOpenDrawerAndShiftDashboardContent?: () => void;
};

export interface ChildNavItem {
  id: string;
  name: string;
  path: string;
  type: string;
  Icon: React.ComponentType<IconProps>;
}
export type ParentNavItem = ChildNavItem & {
  hasSubNavItems: boolean;
  subNavItems?: ChildNavItem[];
};

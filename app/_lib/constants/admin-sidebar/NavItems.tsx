import DashBoardIcon from '@lib/icons/dashboard/sidebar/MainIcon';
import { ParentNavItem } from '@lib/types/molecules';
import { v4 as uuidv4 } from 'uuid';
import DoubleBarIcon from '../../icons/dashboard/sidebar/DoubleBar';
import UserAccessIcon from '../../icons/dashboard/sidebar/UserAccessIcon';
import PersonIcon from '../../icons/dashboard/sidebar/PersonIcon';

const NavItems: ParentNavItem[] = [
  {
    id: uuidv4(),
    type: 'infoItem',
    name: 'Menu',
    path: '/admin',
    Icon: DashBoardIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: 'navItem',
    name: 'Dashboard',
    path: '/admin',
    Icon: DashBoardIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: 'navItem',
    name: 'Departments',
    path: '/admin/departments',
    Icon: DoubleBarIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: 'infoItem',
    name: 'Management',
    path: '/admin',
    Icon: DashBoardIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: 'navItem',
    name: 'User Access',
    path: '/admin/user-access',
    Icon: UserAccessIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: 'navItem',
    name: 'My Profile',
    path: '/admin/logout',
    Icon: PersonIcon,
    hasSubNavItems: false,
  },
];

export default NavItems;

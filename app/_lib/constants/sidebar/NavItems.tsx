import DashBoardIcon from '@lib/icons/dashboard/sidebar/MainIcon';
import { ParentNavItem } from '@lib/types/molecules';
import { v4 as uuidv4 } from 'uuid';
import InventoryIcon from '../../icons/dashboard/sidebar/People';
import FinanceIcon from "../../icons/dashboard/sidebar/PayrollIcon";
import CommunicationIcon from '../../icons/dashboard/sidebar/PaymentIcon';
import CalenderIcon from "../../icons/dashboard/sidebar/PensionIcon";
import ContractsIcon from '../../icons/dashboard/sidebar/UserAccessIcon';
import SettingsIcon from '../../icons/dashboard/sidebar/SettingsIcon';
import SupportIcon from "../../icons/dashboard/sidebar/PersonIcon";
import ProcurementIcon from "../../icons/dashboard/sidebar/ProcurementIcon";


const NavItems: ParentNavItem[] = [
  {
    id: uuidv4(),
    type: "navItem",
    name: "Dashboard",
    path: "/dashboard",
    Icon: DashBoardIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "Inventory",
    path: "/dashboard/inventory",
    Icon: InventoryIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "Procurement",
    path: "/dashboard/procurement",
    Icon: ProcurementIcon,
    hasSubNavItems: true,
    subNavItems: [
      {
        id: uuidv4(),
        name: "Qoute",
        path: "/dashboard/procurement/qoute",
        Icon: DashBoardIcon,
        type: "",
      },
      {
        id: uuidv4(),
        name: "Order",
        path: "/dashboard/procurement/order",
        Icon: DashBoardIcon,
        type: "",
      },
    ],
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "Finance",
    path: "/dashboard/finance",
    Icon: FinanceIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "Communication",
    path: "/dashboard/communication",
    Icon: CommunicationIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "Calendar",
    path: "/dashboard/calendar",
    Icon: CalenderIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "Contracts",
    path: "/dashboard/contracts",
    Icon: ContractsIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "bottomItem",
    name: "Support",
    path: "/dashboard/support",
    Icon: SupportIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "bottomItem",
    name: "Settings",
    path: "/dashboard/settings",
    Icon: SettingsIcon,
    hasSubNavItems: false,
  },
];

export default NavItems;

import { FaWallet } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FiBarChart } from "react-icons/fi";
import { CiViewList } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { ImProfile } from "react-icons/im";

const menuItems = [
  {
    id: 1,
    label: "Balance Overview",
    Icon: FaWallet,
    link: "/balance-overview",
  },
  {
    id: 2,
    label: "Current Bets",
    link: "/current-bets",
    Icon: CiViewList,
    count: 0,
  },
  {
    id: 3,
    label: "Account Statement",
    Icon: CiViewList,
    link: "/account-statement",
  },
  { id: 4, label: "Bets History", Icon: GoHistory, link: "/bets-history" },
  {
    id: 5,
    label: "Profit & Loss",
    Icon: FaHandHoldingDollar,
    link: "/profit-loss",
  },
  { id: 6, label: "Activity Log", Icon: FiBarChart, link: "/activity-log" },
  { id: 7, label: "My Profile", Icon: ImProfile, link: "/my-profile" },
];

export default menuItems;

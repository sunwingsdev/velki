import { useState } from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { useGetDepositsQuery } from "@/redux/features/allApis/depositsApi/depositsApi";
import { useGetWithdrawsQuery } from "@/redux/features/allApis/withdrawApi/withdrawApi";

function HeadingNavbar() {
  const { user } = useSelector((state) => state.auth);
  const { data: deposits } = useGetDepositsQuery();
  const { data: withdraws } = useGetWithdrawsQuery();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const pendingDeposits = deposits?.filter(
    (deposit) => deposit.status === "pending"
  );
  const pendingWithdraws = withdraws?.filter(
    (withdraw) => withdraw.status === "pending"
  );

  const menuItems = [
    {
      label: "Dashboard",
      path: "/admindashboard",
    },
    {
      label: "User",
      path: null, // No path for parent menu with sub-items
      subItems: [
        {
          label: "User",
          path: "usersdata/user",
          roles: [
            "sub-agent",
            "agent",
            "master",
            "sub-admin",
            "admin",
            "mother-admin",
          ],
        },
        {
          label: "Sub Agent",
          path: "usersdata/sub-agent",
          roles: ["agent", "master", "sub-admin", "admin", "mother-admin"],
        },
        {
          label: "Agent",
          path: "usersdata/agent",
          roles: ["master", "admin", "sub-admin", "mother-admin"],
        },
        {
          label: "Master",
          path: "usersdata/master",
          roles: ["admin", "sub-admin", "mother-admin"],
        },
        {
          label: "Sub Admin",
          path: "usersdata/subadmin",
          roles: ["admin", "mother-admin"],
        },
        {
          label: "Admin",
          path: "usersdata/admin",
          roles: ["mother-admin"],
        },
      ],
    },
    {
      label: "Setting",
      path: null,
      subItems: [
        {
          label: "General Setting",
          path: "/admindashboard/generalsetting",
          roles: ["mother-admin"],
        },
        {
          label: "Admin Setting",
          path: "/admindashboard/adminsetting",
          roles: ["mother-admin"],
        },
        {
          label: "Game Api Key",
          path: "/admindashboard/gameapi",
          roles: ["mother-admin"],
        },
        {
          label: "Add Game Api Key",
          path: "/admindashboard/addgame",
          roles: ["sub-agent", "agent", "master", "sub-admin", "admin"],
        },
        {
          label: "Home Control",
          path: "/admindashboard/homecontrol",
          roles: ["mother-admin"],
        },
        {
          label: "Color Control",
          path: "/admindashboard/colorcontrol",
          roles: ["mother-admin"],
        },
        {
          label: "Add Game Api Key",
          path: "/admindashboard/addgame",
          roles: ["mother-admin"],
        },
        {
          label: "Add Deposit Method",
          path: "/admindashboard/depositmethod",
          roles: ["mother-admin"],
        },
      ],
    },
    {
      label: "My Account",
      path: "/admindashboard/myaccount",
    },
    {
      label: "BetList",
      path: "/admindashboard/betlist",
    },
    {
      label: "BetListLive",
      path: "/admindashboard/betlive",
    },
    {
      label: "Banking",
      path: "/admindashboard/banking",
    },
    {
      label: "Casino",
      path: null, // No path for parent menu with sub-items
      subItems: [
        {
          label: "Pragmatic Play",
          path: "#pragmatic-play",
          roles: ["mother-admin"],
        },
        {
          label: "Evolution",
          path: "#evolution",
          roles: ["mother-admin"],
        },
        {
          label: "BGaming",
          path: "#bgaming",
          roles: ["mother-admin"],
        },
        {
          label: "Amusnet",
          path: "#amusnet",
          roles: ["mother-admin"],
        },
        {
          label: "PG Soft",
          path: "#pg-soft",
          roles: ["mother-admin"],
        },
        {
          label: "Play and GO",
          path: "#play-and-go",
          roles: ["mother-admin"],
        },
        {
          label: "Playtech",
          path: "#playtech",
          roles: ["mother-admin"],
        },
        {
          label: "Nolimit City",
          path: "#nolimit-city",
          roles: ["mother-admin"],
        },
        {
          label: "Hacksaw",
          path: "#hacksaw",
          roles: ["mother-admin"],
        },
      ],
    },
    {
      label: "Risk Management",
      path: "#",
    },
    {
      label: "Import",
      path: null, // No path for parent menu with sub-items
      subItems: [
        {
          label: "Game file Import",
          path: "#",
          roles: ["mother-admin"],
        },
        {
          label: "Api file import",
          path: "#",
          roles: ["mother-admin"],
        },
      ],
    },
    {
      label: "Message",
      path: "#message",
    },
    {
      label: "Game Center",
      path: null, // No path for parent menu with sub-items
      subItems: [
        {
          label: "Active Game",
          path: "/admindashboard/activegame",
          roles: ["mother-admin"],
        },
        {
          label: "Deactive Game",
          path: "/admindashboard/deactivegame",
          roles: ["mother-admin"],
        },
        {
          label: "Live Game",
          path: "/admindashboard/livegame",
          roles: ["mother-admin"],
        },
      ],
    },
    {
      label: "Self department",
      path: null, // No path for parent menu with sub-items
      subItems: [
        {
          label: "Deposits",
          path: "/admindashboard/deposits",
          pending: pendingDeposits?.length,
          roles: ["mother-admin"],
        },
        {
          label: "Withdraws",
          path: "/admindashboard/withdraws",
          pending: pendingWithdraws?.length,
          roles: ["mother-admin"],
        },
      ],
    },
  ];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const allowedMenuForOthers = [
    "Dashboard",
    "User",
    "My Account",
    "BetList",
    "BetListLive",
    "Banking",
    "Game Center",
  ];

  const filteredMenuItems = menuItems.filter((item) => {
    if (user?.role === "mother-admin") return true;
    return allowedMenuForOthers.includes(item.label);
  });

  return (
    <div className="">
      <div className="bg-yellow-500 h-auto w-full">
        <nav className="pb-1">
          {/* Hamburger Menu Button */}
          <div className="lg:hidden flex justify-between items-center p-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Slide-In Menu for Small Devices */}
          <div
            className={`fixed top-0 left-0 h-full bg-yellow-500 w-64 z-50 transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="p-4 text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="text-sm">
              {filteredMenuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  activeTab={activeTab}
                  handleTabClick={handleTabClick}
                />
              ))}
            </ul>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center whitespace-nowrap text-sm">
            {filteredMenuItems.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeadingNavbar;

import { useState } from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

function HeadingNavbar() {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

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
          roles: ["sub-agent", "agent", "master", "sub-admin", "admin"],
        },
        {
          label: "Sub Agent",
          path: "usersdata/sub-agent",
          roles: ["agent", "master", "sub-admin", "admin"],
        },
        {
          label: "Agent",
          path: "usersdata/agent",
          roles: ["master", "admin", "sub-admin"],
        },
        {
          label: "Master",
          path: "usersdata/master",
          roles: ["admin", "sub-admin"],
        },
        {
          label: "Sub Admin",
          path: "usersdata/subadmin",
          roles: ["admin"],
        },
        {
          label: "Admin",
          path: "usersdata/admin",
          roles: ["admin"],
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
          roles: ["sub-agent", "agent", "master", "sub-admin", "admin"],
        },
        {
          label: "Admin Setting",
          path: "/admindashboard/adminsetting",
          roles: ["sub-agent", "agent", "master", "sub-admin", "admin"],
        },
        {
          label: "Game Api Key",
          path: "/admindashboard/gameapi",
          roles: ["sub-agent", "agent", "master", "sub-admin", "admin"],
        },
        {
          label: "Home Control",
          path: "/admindashboard/homecontrol",
          roles: ["sub-agent", "agent", "master", "sub-admin", "admin"],
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
        { label: "Pragmatic Play", path: "#pragmatic-play",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"], },
        { label: "Evolution", path: "#evolution",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"] },
        { label: "BGaming", path: "#bgaming",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"] },
        { label: "Amusnet", path: "#amusnet",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"] },
        { label: "PG Soft", path: "#pg-soft",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"] },
        { label: "Play and GO", path: "#play-and-go",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"] },
        { label: "Playtech", path: "#playtech" ,roles: ["sub-agent", "agent", "master", "sub-admin", "admin"]},
        { label: "Nolimit City", path: "#nolimit-city",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"] },
        { label: "Hacksaw", path: "#hacksaw",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"] },
      ],
    },
    {
      label: "MM",
      path: "#MM",
    },
    {
      label: "Import",
      path: null, // No path for parent menu with sub-items
      subItems: [
        { label: "Game file Import", path: "/admindashboard/gamefileimport",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"] },
        { label: "Api file import", path: "/admindashboard/apifileformat",roles: ["sub-agent", "agent", "master", "sub-admin", "admin"] },
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
        { label: "Active Game", path: "/admindashboard/activegame" },
        { label: "Deactive Game", path: "/admindashboard/deactivegame" },
        { label: "Live Game", path: "/admindashboard/livegame" },
      ],
    },
  ];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const allowedMenuForOthers = [
    "Dashboard",
    "User",
    "Setting",
    "My Account",
    "BetList",
    "BetListLive",
    "Banking",
  ];

  const filteredMenuItems = menuItems.filter((item) => {
    if (user?.role === "admin") return true;
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

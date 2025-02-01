import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MenuItem = ({ item, activeTab, handleTabClick }) => {
  const { user } = useSelector((state) => state.auth);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  // Filter subItems based on user role
  const filteredSubItems = item.subItems?.filter(
    (subItem) =>
      Array.isArray(subItem.roles) && subItem.roles.includes(user?.role)
  );

  return (
    <li
      className={`text-black flex relative font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0 border-r-0 lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 py-2 transition group ${
        activeTab === item.path ? "bg-yellow-300" : "text-black"
      }`}
    >
      {/* Render a span (non-clickable) if the item has sub-items */}
      {hasSubItems ? (
        <span className="flex items-center">
          {item.label}
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </span>
      ) : (
        // Render a Link if the item does not have sub-items
        <Link
          to={item.path}
          className="flex items-center"
          onClick={() => handleTabClick(item.path)}
        >
          {item.label}
        </Link>
      )}

      {/* Render sub-items if they exist */}
      {hasSubItems && (
        <ul className="absolute left-0 mt-6 hidden w-56 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
          {filteredSubItems.map((subItem, index) => (
            <li
              key={index}
              className={`border-b ${
                activeTab === subItem.path ? "bg-yellow-300" : "text-black"
              }`}
            >
              <Link
                to={subItem.path}
                className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                onClick={() => handleTabClick(subItem.path)}
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;

import CommonNavMenu from "@/components/CommonNavMenu/CommonNavMenu";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <CommonNavMenu></CommonNavMenu>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

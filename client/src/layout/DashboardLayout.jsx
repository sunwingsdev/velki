import CommonNavMenu from "@/components/CommonNavMenu/CommonNavMenu";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { data: homeControls } = useGetHomeControlsQuery();

  const title = homeControls?.find(
    (control) => control.category === "title" && control.isSelected
  );
  return (
    <div>
      <Helmet>
        <title>{`${title?.title || "***"}`} | Official</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${import.meta.env.VITE_BASE_API_URL}${title?.image}`}
        />
      </Helmet>
      <CommonNavMenu></CommonNavMenu>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

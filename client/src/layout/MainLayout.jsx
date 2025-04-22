import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { checkUserStatus } from "@/redux/slices/authSlice";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const dispatch = useDispatch();

  const title = homeControls?.find(
    (control) => control.category === "title" && control.isSelected
  );
  const logoControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  useEffect(() => {
    dispatch(checkUserStatus());
  }, [dispatch]);
  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.wickspin24.live/images/velki-desktop-bg.webp')",
        backgroundSize: "cover",
      }}
      className="h-screen flex justify-center"
    >
      <Helmet>
        <title>{`${title?.title || "***"}`} | Official</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${import.meta.env.VITE_BASE_API_URL}${title?.image}`}
        />
      </Helmet>
      <div className="hidden lg:flex w-[30%] md:w-[20%] items-center justify-center">
        <img
          src={`${import.meta.env.VITE_BASE_API_URL}${logoControl?.image}`}
          alt=""
        />
      </div>
      <div className="w-full md:w-[60%] lg:w-[40%] xl:w-[30%] bg-[#eef6fb] overflow-y-auto">
        {/* content goes here */}
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <div className="hidden lg:block md:w-[20%] w-[30%]"></div>
    </div>
  );
};

export default MainLayout;
